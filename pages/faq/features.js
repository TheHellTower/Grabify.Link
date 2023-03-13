import Head from "next/head";
import { Inter } from "@next/font/google";

import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

import { useState, useEffect } from "react";

export default function Features() {
  const [featureTitle, setFeatureTitle] = useState(
    "Select Feature To See Example"
  );

  const [featureDescription, setFeatureDescription] = useState(
    "Please click on a feature above to see an example of what it would look like in the log."
  );

  const loadFeature = (t) => {
    "date" === t
      ? (setFeatureTitle("Date/Time"),
        setFeatureDescription("2022-11-01 11:50:13 UTC+3"))
      : "ip" === t
      ? (setFeatureTitle("IP Address"), setFeatureDescription("172.67.68.246"))
      : "country" === t
      ? (setFeatureTitle("Country"), setFeatureDescription("Canada"))
      : "city" === t
      ? (setFeatureTitle("City"), setFeatureDescription("Toronto"))
      : "charging" === t
      ? (setFeatureTitle("Charging"), setFeatureDescription("Yes"))
      : "battery" === t
      ? (setFeatureTitle("Battery"), setFeatureDescription("87%"))
      : "orientation" === t
      ? (setFeatureTitle("Orientation"),
        setFeatureDescription("landscape-primary"))
      : "connection" === t
      ? (setFeatureTitle("Connection Type"), setFeatureDescription("4G LTE"))
      : "timezone" === t
      ? (setFeatureTitle("Timezone"),
        setFeatureDescription("America/New_York EDT"))
      : "language" === t
      ? (setFeatureTitle("Language"), setFeatureDescription("en-US"))
      : "incognito" === t
      ? (setFeatureTitle("Incognito/Private Window"),
        setFeatureDescription("Yes"))
      : "ad" === t
      ? (setFeatureTitle("Ad Blocker"), setFeatureDescription("Yes"))
      : "screen" === t
      ? (setFeatureTitle("Screen Size"), setFeatureDescription("1920 x 1080"))
      : "localIp" === t
      ? (setFeatureTitle("Local IP"), setFeatureDescription("192.168.1.123"))
      : "browser" === t
      ? (setFeatureTitle("Browser"),
        setFeatureDescription("Chrome (106.0.0.0)"))
      : "os" === t
      ? (setFeatureTitle("Operating System"),
        setFeatureDescription("Windows 10 x64"))
      : "device" === t
      ? (setFeatureTitle("Device"), setFeatureDescription("Google Pixel 4a"))
      : "gpu" === t
      ? (setFeatureTitle("GPU"),
        setFeatureDescription("NVIDIA GeForce RTX 2070 SUPER"))
      : "botName" === t
      ? (setFeatureTitle("Bot Name"),
        setFeatureDescription("Facebook Metadata"))
      : "ua" === t
      ? (setFeatureTitle("User Agent"),
        setFeatureDescription(
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
        ))
      : "referring" === t
      ? (setFeatureTitle("Referring URL"),
        setFeatureDescription("https://example.com/forum.php?post=123"))
      : "hostName" === t
      ? (setFeatureTitle("Host Name"),
        setFeatureDescription("2.sub-174-209-100.example.com"))
      : "isp" === t
      ? (setFeatureTitle("Internet Service Provider"),
        setFeatureDescription("Vodafone"))
      : "vpn" === t
      ? (setFeatureTitle("VPN/Proxy Detection"), setFeatureDescription("Yes"))
      : "tor" === t
      ? (setFeatureTitle("Tor Detection"), setFeatureDescription("No"))
      : "vm" === t &&
        (setFeatureTitle("Virtual Machine Detection"),
        setFeatureDescription("Yes"));
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Grabify IP Logger & URL Shortener allows you to tracks IP address, track locations and much more. Advanced web analytics at the tap of a finger!"
        />
        <meta
          name="keywords"
          content="grabify, ip logger, iplogger, url shortener, link shortener, ip, grabtheirip, grab ip, ip address, track ip, IP tracker, Facebook IP, Twitter IP"
        />
        <meta property="fb:admins" content="1307078942" />
        <meta name="theme-color" content="#2C3E50" />
        <meta
          name="csrf-token"
          content="1o3OR6tmnbDu04NoYU4YscOL1gAnKlM9Tde5QMkn"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Features - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="Features - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:description"
          content="Grabify IP Logger & URL Shortener allows you to tracks IP address, track locations and much more. Advanced web analytics at the tap of a finger!"
        />
        <meta property="og:image" content="./images/200.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta
          property="og:image:alt"
          content="Features - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/faq/features" />
        <title>Features - Grabify IP Logger &amp; URL Shortener</title>
        <link rel="canonical" href="https://grabify.xyz/" />
        <link rel="shortcut icon" href="./images/favicon.png" sizes="any" />
        <link rel="icon" href="./images/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          type="image/png"
          sizes="200x200"
          href="./images/200.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Grabify",
              url: "https://grabify.xyz/",
              logo: "./images/200.png",
            }),
          }}
        />
        <link
          rel="stylesheet"
          href="/css/styles.css?id=a9a0abd9bcc39197e058b9a87c710e61"
        />
        <script src="/js/jquery-3.6.1.min.js" />
        <Script
          src="/js/scripts.js?id=0e273e7cf8a88c131455954d0a55256f"
          strategy="beforeInteractive"
        />
        <Script src="/js/ads.js" />
        <Script
          async
          src="//cdn.fuseplatform.net/publift/tags/2/1218/fuse.js"
          strategy="beforeInteractive"
        />

        <Script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="beforeInteractive"
        />

        <Script src="/js/ads.js" strategy="beforeInteractive" />
      </Head>
      <main suppressHydrationWarning>
        <div id="wrapper">
          <Script src="./js/analytics.js" strategy="beforeInteractive" />
          <Script src="./js/hotjar.js" strategy="beforeInteractive" />
          <div
            className="is-f-ad ad_container myTestAd"
            style={{
              height: "1px!important",
              width: "1px!important",
              position: "absolute!important",
              left: "-999em!important",
              top: "-999em!important",
            }}
          >
            _
          </div>
          <div
            id="ab"
            className="ab_container"
            style={{ display: "none", backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="css8">
              <div
                className="css1 css2"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              >
                <div></div>
                <div id="step1">
                  <img
                    src="./images/grabify.svg"
                    alt="Grabify Logo"
                    width="200"
                    className="pt-5"
                  />
                  <h3 className="title" style={{ color: "rgb(44, 62, 80)" }}>
                    It looks like you're using an adblocker!
                  </h3>
                  <div
                    className="description"
                    style={{ color: "rgb(44, 62, 80)" }}
                  >
                    We use ads to keep our content free. Please consider
                    supporting us by turning off your adblocker.
                  </div>
                  <button
                    className="button is-primary"
                    onClick={() =>
                      (document.getElementById("step1").outerHTML =
                        '<div className="iframe_container" style="color: rgb(44, 62, 80);"><iframe id="iframe_Id" className="frame" src="/adblockcheck/instructions?textColor=rgba(0,0,0,1)&btnColor=23,188,156,1&btnTextColor=255,255,255,1&textBgColor=255,255,255,1" referrerpolicy="no-referrer" height="420" width="100%" allowtransparency="true"></iframe></div>')
                    }
                  >
                    Show me how to whitelist →
                  </button>
                </div>
                <div
                  className="ab_footer"
                  style={{
                    backgroundColor: "rgba(44, 62, 80, 0.2)",
                    color: "rgb(44, 62, 80)",
                  }}
                >
                  <span className="css11">
                    <p className="css12" style={{ color: "rgb(44, 62, 80)" }}>
                      Continue without disabling
                    </p>
                  </span>
                  <span className="css13">|</span>
                  <span className="css14">
                    Experiencing issues?
                    <Link
                      className="css15"
                      href="https://www.facebook.com/GrabifyLogger/"
                      target="_blank"
                      style={{ color: "rgb(44, 62, 80)" }}
                    >
                      Report a problem
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="navbar is-fixed-top is-transparent"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://grabify.xyz">
                  <img
                    src="./images/grabify.svg"
                    width="112"
                    height="28"
                    alt="Grabify IP Logger"
                  />
                </a>
                <a
                  role="button"
                  className="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarTop"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div id="navbarTop" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item" href="https://grabify.xyz">
                    Home
                  </a>
                  <a className="navbar-item" href="https://grabify.xyz/login">
                    Login
                  </a>
                  <a className="navbar-item" href="https://grabify.xyz/register">
                    Register
                  </a>
                  <a className="navbar-item" href="https://grabify.xyz/blog">
                    Blog
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Tools</a>
                    <div className="navbar-dropdown">
                      <a
                        className="navbar-item"
                        href="https://grabify.xyz/ip-lookup"
                      >
                        IP Lookup
                      </a>
                      <a
                        className="navbar-item"
                        href="https://grabify.xyz/image"
                      >
                        Invisible Image Logger
                      </a>
                      <a
                        className="navbar-item"
                        href="https://grabify.xyz/expander"
                      >
                        Link Expander
                      </a>
                      <a
                        className="navbar-item"
                        href="https://grabify.xyz/speedtest"
                      >
                        Speed Test
                      </a>
                      <a
                        className="navbar-item"
                        href="https://grabify.xyz/mac-lookup"
                      >
                        MAC Address Lookup
                      </a>
                      <a className="navbar-item" href="https://grabify.xyz/hide">
                        VPN
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a
                        className="button is-primary"
                        href="https://grabify.xyz/register"
                      >
                        <strong>Register</strong>
                      </a>
                      <a
                        className="button is-light"
                        href="https://grabify.xyz/login"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <section className="landing-hero">
            <div className="hero-body container has-text-centered">
              <h2 className="title is-2 has-text-white">Features</h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                The full list of features Grabify can log.
              </h3>
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="white" points="0,100 100,0 100,100"></polygon>
            </svg>
          </section>
          <section className="section container" id="features">
            <div className="content">
              <p>
                Here is the list of all the current features Grabify can possibly
                log.
              </p>
              <p>
                To get the most information out of your logs, we recommend
                enabling smart logger.
                <br />
                Some of these features will only be logged if the device
                accessing the link supports them.
              </p>
              <br />
              <div className="buttons is-centered">
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("date")}
                >
                  Date/Time
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("ip")}
                >
                  IP Address
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("country")}
                >
                  Country
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("city")}
                >
                  City
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("battery")}
                >
                  Battery *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("charging")}
                >
                  Charging *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("orientation")}
                >
                  Orientation *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("connection")}
                >
                  Connection Type *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("timezone")}
                >
                  Timezone *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("language")}
                >
                  Language *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("incognito")}
                >
                  Incognito/Private Window *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("ad")}
                >
                  Ad Blocker *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("screen")}
                >
                  Screen Size *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("localIp")}
                >
                  Local IP *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("browser")}
                >
                  Browser
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("os")}
                >
                  Operating System
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("device")}
                >
                  Device
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("gpu")}
                >
                  GPU *
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("botName")}
                >
                  Bot Name
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("ua")}
                >
                  User Agent
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("referring")}
                >
                  Referring URL
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("hostName")}
                >
                  Host Name
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("isp")}
                >
                  Internet Service Provider
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("vpn")}
                >
                  VPN/Proxy Detection
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("tor")}
                >
                  Tor Detection
                </button>
                <button
                  className="button is-link is-rounded"
                  onClick={() => loadFeature("vm")}
                >
                  Virtual Machine Detection *
                </button>
              </div>
              <article className="message is-primary">
                <div className="message-header">
                  <p>{featureTitle}</p>
                </div>
                <div className="message-body">{featureDescription}</div>
              </article>
              <small>* This is with Smart Logger enabled</small>
              <br />
            </div>
          </section>
        </div>
        <div className="mobile_sticky_ad">
          <div data-fuse="21842488990"></div>
        </div>

        <div className="fuse_sticky">
          <div data-fuse="22278910416"></div>
        </div>

        <footer className="footer">
          <div className="container has-text-centered-mobile">
            <div className="columns has-margin-bottom medium-margin has-no-side-margin">
              <div className="column is-4-desktop">
                <Link href="/">
                  {/*<img
                    src="./images/grabify-inverted.svg"
                    width="200"
                    alt="Grabify Logo"
                    className="footer-logo"
                  />*/}
                  <img
                    src="./images/grabify.svg"
                    width="200"
                    alt="Grabify Logo"
                    className="footer-logo"
                  />
                </Link>
                <h3>Advanced web analytics at the tap of a finger!</h3>
              </div>
              <div className="column is-2-desktop is-offset-1-desktop">
                <h2 className="footer-title">Follow us</h2>
                <ul>
                  <li>
                    <Link
                      href="https://twitter.com/GrabifyDOTlink"
                      target="_blank"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/GrabifyLogger/"
                      target="_blank"
                    >
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column is-2-desktop">
                <h2 className="footer-title">About</h2>
                <ul>
                  <li>
                    <Link href="/tos">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="column is-2-desktop">
                <h2 className="footer-title">Help</h2>
                <ul>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/removeme">Remove My Data</Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="footer-separator" />
          </div>
          <div className="adbuffer-footer"></div>
        </footer>
        <Script
          type="text/javascript"
          src="./js/tawk.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/check.js?id=480188759c95b204e7bb773ed0e10641"
          strategy="beforeInteractive"
        />
      </main>
    </>
  );
}
