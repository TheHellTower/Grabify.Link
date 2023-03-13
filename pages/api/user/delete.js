import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { connectToDatabase } from "../../../lib/db";
import Cookies from "cookies";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const session = await unstable_getServerSession(req, res, authOptions);

      if (!session) {
        return res.status(401).json({
          message: "You are not authenticated to complete this action",
        });
      }

      const mongo_client = await connectToDatabase();
      const db = mongo_client.db(process.env.DATABASE_NAME).collection("users");

      const user_doc = await db.findOne({
        email_address: session.user.email,
      });

      if (!user_doc) {
        mongo_client.close();
        throw new Error("Something went wrong !!");
      }

      await db.deleteMany({
        email_address: session.user.email,
      });

      mongo_client.close();

      const cookies = new Cookies(req, res);
      cookies.set("next-auth.callback-url", "/");
      cookies.set("next-auth.csrf-token");
      cookies.set("next-auth.session-token");

      //res.setHeader("Refresh", `5; url=/`);
      return res.status(200).json({ message: "User deleted with success !" });
    } else return res.status(503).json({ message: "API not implemented" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Something went wrong!" });
  }
}

export default handler;
