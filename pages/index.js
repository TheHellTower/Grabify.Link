import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Link from "next/link";
import Script from "next/script";

import { useState, useEffect } from "react";

export default function Home() {
  const [featureTitle, setFeatureTitle] = useState(
    "Select Feature To See Example"
  );

  const [featureDescription, setFeatureDescription] = useState(
    "Please click on a feature above to see an example of what it would look like in the log."
  );

  const [totalLogs, setTotalLogs] = useState("Loading...");

  useEffect(() => {
    fetch("/api/totallogs")
      .then((e) => e.text())
      .then((e) => {
        setTotalLogs(e);
      });
  }, []);

  const [topDonators, setTopDonators] = useState({});

  useEffect(() => {
    fetch("/api/topdonators")
      .then((e) => e.text())
      .then((e) => {
        setTopDonators(e);
      });
  }, []);

  /* const [hasMounted, setHasMounted] = useState(true);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null; */

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
          content="Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="Grabify IP Logger &amp; URL Shortener"
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
          content="Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/" />
        <title>Grabify IP Logger &amp; URL Shortener</title>
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
          <section className="landing-hero">
            <div className="is-world-background">
              <div className="hero-body">
                <div className="columns">
                  <div className="column is-6-desktop is-offset-3-desktop has-text-centered">
                    <div className="columns is-justify-content-space-around">
                      <div
                        data-fuse="21820773065"
                        className="ad_container adbuffer myTestAd"
                      ></div>
                    </div>
                    <h1 className="title is-1 has-text-white">
                      {/*<img
                        src="./images/grabify-inverted.svg"
                        width="350"
                        alt="Grabify"
                      /> */}
                      <img src="./images/grabify.svg" width="350" alt="Grabify" />
                      <br />
                      IP Logger
                    </h1>
                    <p className="subtitle has-text-white">
                      Create or Track URL's
                    </p>
                    <Script src="./js/index1.js" strategy="beforeInteractive" />
                    <form id="grab-form" action="/create" method="post">
                      <div
                        id="recaptcha"
                        className="g-recaptcha"
                        data-sitekey="6LeQMRwUAAAAAI9EqC05CqYE7JKXelwL4MhVwAES"
                        data-callback="onSubmit"
                        data-size="invisible"
                      ></div>
                      <div className="field">
                        <div className="control">
                          <input
                            onKeyDown={() => {
                              if (event.keyCode === 13) {
                                event.preventDefault();
                                $("#confirm").modal();
                                return false;
                              }
                            }}
                            onFocus={() => {
                              var script = document.createElement("script");
                              script.src =
                                "https://www.google.com/recaptcha/api.js";

                              if (
                                $(
                                  'script[src="https://www.google.com/recaptcha/api.js"]'
                                ).length === 0
                              ) {
                                document.head.appendChild(script);
                              }
                            }}
                            className="input"
                            type="text"
                            placeholder="Enter a URL or tracking code..."
                            id="linkToShorten"
                            name="linkToShorten"
                            required
                          />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="_token"
                        value="1o3OR6tmnbDu04NoYU4YscOL1gAnKlM9Tde5QMkn"
                      />
                      <div className="buttons is-centered">
                        <button
                          className="button is-info is-outlined"
                          type="button"
                          data-toggle="modal"
                          data-target="confirm"
                        >
                          Create URL
                        </button>
                        <button
                          className="button is-info is-outlined"
                          type="button"
                          onClick={() => {
                            $("#linkToShorten").val() !== ""
                              ? (window.location.href =
                                  "/track/" + $("#linkToShorten").val())
                              : null;
                          }}
                        >
                          Tracking Code
                        </button>
                      </div>
                      <div id="confirm" className="modal">
                        <div className="modal-background"></div>
                        <div className="modal-card">
                          <header className="modal-card-head">
                            <p className="modal-card-title">
                              This action requires your consent
                            </p>
                            <button
                              className="delete"
                              aria-label="close"
                            ></button>
                          </header>
                          <section className="modal-card-body">
                            I agree with the
                            <Link href="/tos" target="_blank">
                              Terms of Service
                            </Link>
                            and
                            <Link href="/privacy" target="_blank">
                              Privacy Policy
                            </Link>
                            .
                          </section>
                          <footer className="modal-card-foot">
                            <button
                              type="submit"
                              data-dismiss="modal"
                              id="create"
                              className="button is-primary"
                              value="create"
                              onClick={() =>
                                validateSubmit("#create", "#grab-form", true)
                              }
                            >
                              I Agree & Create URL
                            </button>
                            <button
                              type="button"
                              className="button is-light button-close"
                            >
                              Cancel
                            </button>
                          </footer>
                        </div>
                      </div>
                    </form>
                    <div className="columns is-justify-content-space-around is-hidden-desktop">
                      <div
                        data-fuse="22858177414"
                        className="ad_container"
                      ></div>
                    </div>
                    <div id="totalLogs" className="pt-3">
                      <p className="subtitle has-text-white">
                        Total Logs: {totalLogs}
                      </p>
                    </div>
                    <div
                      className="columns is-centered has-text-white pt-6"
                      id="donator"
                    >
                      <div className="column is-half has-text-centered is-donation-box">
                        <p className="is-size-4">Donation Goal</p>
                        <progress
                          className="progress is-info is-large"
                          id="donation--progress"
                          value="0"
                          max="100"
                        ></progress>
                        <div
                          id="donation--status"
                          className="donation--status"
                        ></div>
                        <Link href="/donations">View leaderboard</Link>
                        <br />
                        <Link href="https://www.paypal.com/donate/?hosted_button_id=KURRYFS3QTY96">
                          <img src="./images/paypal.gif" alt="Paypal" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100"></polygon>
              </svg>
            </div>
          </section>
          <section className="section has-margin-bottom">
            <div className="container has-text-centered">
              <h2 className="section-title">Instructions</h2>
              <h3 className="section-subtitle has-text-grey has-margin-bottom mb-6">
                See how to create your Grabify link below to start logging
                analytics.
                <br />
                Our handy video will take you through the full process of
                creating a link and accessing the tracking page to view the
                results.
              </h3>
              <div className="columns is-variable is-8-desktop is-mobile is-multiline is-centered has-margin-bottom">
                <div className="column is-4-desktop is-12-mobile">
                  <div className="how-it-works-box">
                    <figure className="image container is-128x128 has-margin-bottom small-margin">
                      <img src="./images/homepage/2.svg" alt="Create Link" />
                    </figure>
                    <h2 className="hiw-title">Create link</h2>
                    <h3 className="hiw-subtitle">
                      Enter a URL that you want Grabify to track.
                    </h3>
                  </div>
                </div>
                <div className="column is-4-desktop is-12-mobile">
                  <div className="how-it-works-box">
                    <figure className="image container is-128x128 has-margin-bottom small-margin">
                      <img src="./images/homepage/5.svg" alt="Share Link" />
                    </figure>
                    <h2 className="hiw-title">Share link</h2>
                    <h3 className="hiw-subtitle">
                      Share the short link with another user.
                      <br />
                      <br />
                    </h3>
                  </div>
                </div>
                <div className="column is-4-desktop is-12-mobile">
                  <div className="how-it-works-box">
                    <figure className="image container is-128x128 has-margin-bottom small-margin">
                      <img src="./images/homepage/4.svg" alt="View Analytics" />
                    </figure>
                    <h2 className="hiw-title">View analytics</h2>
                    <h3 className="hiw-subtitle">
                      Grab IP address and other analytic data after the user
                      clicks on your short link.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="columns is-centered">
                <div className="column">
                  <div
                    style={{
                      maxWidth: "640px",
                      maxHeight: "360px",
                      margin: "auto",
                    }}
                  >
                    <div className="embed-container" id="youtube-video">
                      <img
                        onClick={() => {
                          document.getElementById("youtube-video").innerHTML =
                            "<iframe src='https://player.vimeo.com/video/489052974?autoplay=1' style='position:absolute;top:0;left:0;width:100%;height:100%;' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
                        }}
                        style={{ marginTop: "9.4%", cursor: "pointer" }}
                        alt="Grabify IP Logger video"
                        src="./images/yt_thumb.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-justify-content-space-around">
                <div data-fuse="21820773827" className="ad_container"></div>

                <div data-fuse="21820773071" className="ad_container"></div>

                <div data-fuse="21820906291" className="ad_container"></div>
              </div>
            </div>
          </section>
          <section className="section has-gradient-bg to-bottom-left">
            <div className="container has-text-white">
              <h2 className="section-title has-text-centered">About</h2>
              <p>
                <i>
                  Grabify IP logger will help you find and track the IP address
                  of any person with just three simple steps:
                </i>
              </p>
              <ol>
                <li>
                  Enter any URL that you want Grabify to shorten and track.
                </li>
                <li>
                  Share the shortened link with another user. Have them click on
                  the link.
                </li>
                <li>
                  Grab IP address and other analytical data via the tracking
                  page associated to the Grabify link.
                </li>
              </ol>
              <br />
              <p>
                Grabify IP Logger URL & Shortener provides you with some of the
                most advanced and detailed statistical data and metadata for all
                clicks on your links. Your IP Logger link can access information
                about user’s IP address, location tracker (country, city) and so
                on. You can view the
                <Link href="/faq/features">full list of features here</Link>.
              </p>
              <p>
                <br />
              </p>
              <p>
                The Grabify IP Logger & Tracker tool is designed to be as
                user-friendly as possible, and to provide the most detailed and
                advanced analytic information on every click.
              </p>
              <p>
                For any assistance or queries, feel free to reach out to our
                friendly support team via the links below:
              </p>
              <ul>
                <li>
                  <Link
                    href="https://twitter.com/GrabifyDOTlink"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i> Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/GrabifyLogger/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-twitter"></i> Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <div className="columns is-justify-content-space-around">
                <div data-fuse="21820773068"></div>
              </div>
            </div>
          </section>
          <section className="section has-margin-bottom" id="features">
            <div className="container">
              <h2 className="section-title has-text-centered">Features</h2>
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
                  <p>
                    {featureTitle} {/*"{{ feature.title }}"*/}
                  </p>
                </div>
                <div className="message-body">
                  {featureDescription}
                  {/*"{{ feature.body }}"*/}
                </div>
              </article>
              <small>* This is with Smart Logger enabled</small>
              <br />
              <div className="has-text-centered mt-3">
                <Link
                  className="button is-primary is-rounded"
                  href="/faq/features"
                >
                  View the complete list of features
                </Link>
              </div>
            </div>
          </section>
          {/* <Script src="./js/homepage.js?id=d4d981a71e85c497452f47db17a013c8" async defer strategy="beforeInteractive" /> */}
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
