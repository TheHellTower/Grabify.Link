import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";
import validator from "validator";

export default async function handler(req, res) {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();

  try {
    if (req.method === "POST") {
      const { email_address, password } = req.body;
      if (!password || (password && password.length < 6)) {
        return res
          .status(400)
          .json({ message: "password should be at least 6 characters long" });
      }
      if (!validator.isEmail(email_address)) {
        return res.status(400).json({ message: "Email address is not valid" });
      }
      const hashed_password = await hashPassword(password);

      const mongo_client = await connectToDatabase();
      const db = mongo_client.db(process.env.DATABASE_NAME).collection("users");

      const existing_user_with_same_email = await db.findOne({
        email_address: email_address,
      });
      if (existing_user_with_same_email) {
        mongo_client.close();
        return res
          .status(400)
          .json({ message: "Email address already registered" });
      }

      await db.insertOne({
        email_address: email_address,
        password: hashed_password,
        createdAt: `${date}/${month}/${year}`,
        logs: [],
      });

      mongo_client.close();
      return res.status(200).json({ message: "User registered successfully" });
    } else return res.status(503).json({ message: "API not implemented" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Something went wrong!" });
  }
}
