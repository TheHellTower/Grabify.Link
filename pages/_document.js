import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="index has-navbar-fixed-top">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
