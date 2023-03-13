import Head from "next/head";
import { Inter } from "@next/font/google";

import Link from "next/link";
import Script from "next/script";

import { useState, useEffect } from "react";

export default function SpeedTest() {
  const [hasMounted, setHasMounted] = useState(true);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
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
          content="Internet Speed Test - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="Internet Speed Test - Grabify IP Logger &amp; URL Shortener"
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
          content="Internet Speed Test - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/speedtest" />
        <title>
          Internet Speed Test - Grabify IP Logger &amp; URL Shortener
        </title>
        <link rel="canonical" href="https://grabify.xyz/speedtest" />
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
                        '<div className="iframe_container" color: rgb(44, 62, 80);"><iframe id="iframe_Id" className="frame" src="/adblockcheck/instructions?textColor=rgba(0,0,0,1)&btnColor=23,188,156,1&btnTextColor=255,255,255,1&textBgColor=255,255,255,1" referrerpolicy="no-referrer" height="420" width="100%" allowtransparency="true"></iframe></div>')
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
            <div className="hero-body container has-text-centered">
              <h2 className="title is-2 has-text-white">Internet Speed Test</h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                Ever wondered what your internet speed is? Wonder no further!
              </h3>
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="white" points="0,100 100,0 100,100"></polygon>
            </svg>
          </section>
          <section className="section container">
            <h3 className="section-title">
              Tips to get an accurate test result:
            </h3>
            <div className="columns">
              <div className="column">
                <div className="card speedtest-card">
                  <div className="card-content">
                    <p className="title is-4">One at a time.</p>
                    <div className="content">
                      Make sure nobody else is online and disconnect all other
                      devices other than the computer or device you’re
                      conducting the test with.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card speedtest-card">
                  <div className="card-content">
                    <p className="title is-4">Stand next to your router.</p>
                    <div className="content">
                      Make sure you are standing close to your router before you
                      begin. (You may also use an ethernet cable to plug
                      directly into your computer or device.)
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card speedtest-card">
                  <div className="card-content">
                    <p className="title is-4">Restart or close apps.</p>
                    <div className="content">
                      Restart the computer or device you're testing with and
                      close applications. (Such as image editors, video and
                      music streaming apps, etc.)
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card speedtest-card">
                  <div className="card-content">
                    <p className="title is-4">Check out your results.</p>
                    <div className="content">
                      You will quickly receive a number that indicates your
                      broadband speed. The result should be around the
                      advertised speed of your broadband plan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Broken iframes in NextJS ? */}
          <div className="container is-max-widescreen">
            <iframe
              id="speedtest-frame"
              className="speedtest"
              width="100%"
              height="650px"
              frameBorder={"0"}
              src="https://grabify.speedtestcustom.com"
            ></iframe>
          </div>

          <section className="section container">
            <div className="columns is-justify-content-space-around">
              <div data-fuse="21842489293" className="ad_container_other"></div>
            </div>
            <div className="content">
              <h3 className="section-title">Why should I run a speed test?</h3>
              <p>
                You want to ensure you are getting the internet speed you are
                paying for. For instance, if you are on a gigabit connection,
                you want to ensure you are able to reach gigabit speeds (1000
                Mbps). This tool will allow you to check your speed so you can
                see if you are getting what your internet service provider is
                promising you.
              </p>
              <h3 className="section-title">What is a good speed?</h3>
              <p>
                Different connections and cable types (copper, fibre, wireless)
                carry data at different speeds, so a good download speed will
                depend on which of these connections you have at home.
                <br />
                If you’re not sure what type of broadband you have, you can use
                Grabify's internet speed test to find out what connection you’re
                on now and what options might be available at your place. The
                four main options and their average download speeds are:
              </p>
              <h5 className="subtitle is-5">ADSL (1-24 Mbps)</h5>
              <p>
                Traditional copper cabling (like the old phone lines) and enough
                for the basics of internet usage (web browsing and emailing).
                The further away you live from the cabinet or exchange, the
                slower your speed will be.
              </p>
              <h5 className="subtitle is-5">VDSL (15-130 Mbps)</h5>
              <p>
                A mix of copper and fibre, VDSL can be fast enough for
                activities like high-definition streaming. You'll get higher
                speeds if you live within a kilometre of the cabinet or
                exchange.
              </p>
              <h5 className="subtitle is-5">Fibre (300 Mbps and beyond)</h5>
              <p>
                Pure fibre is faster and more reliable than VDSL and comes with
                dedicated capacity for multiple devices to connect at once -
                ideal for families.
              </p>
              <h3 className="section-title">
                What does good internet look like?
              </h3>
              <p>
                Internet speed results are typically broken down into different
                numbers representing upload and download speed and delay or
                latency. This might sound complicated, so if you're looking for
                benchmarks to compare your broadband performance against, here
                are the numbers to look for.
                <br />
                Cisco - an industry leading manufacturer of networking and
                telecommunications hardware - says that for a good quality of
                service:
              </p>
              <ul>
                <li>
                  Ping (or latency shouldn't go over 150 ms or 300 ms for a
                  round trip)
                </li>
                <li>Jitter should remain below 30 ms</li>
                <li>Packet loss should be less than 1%.</li>
              </ul>
              <p>
                Your download and upload speeds should match the rates specified
                by your internet service provider (ISP) for your plan unless
                you're on ADSL or VDSL and live far from a cabinet or exchange.
              </p>
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
