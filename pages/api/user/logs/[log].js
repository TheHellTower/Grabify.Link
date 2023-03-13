import Head from "next/head";

import Link from "next/link";
import Script from "next/script";

async function handler(req, res) {
  try {
    const { log, type } = req.query;
    console.log(req.query);
    if (req.method === "DELETE") {
    }
    return res.send("ok");
    req.query.log;
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Something went wrong!" });
  }
}

export default handler;
