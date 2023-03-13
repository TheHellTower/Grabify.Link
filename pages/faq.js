import Head from "next/head";
import { Inter } from "@next/font/google";

import Link from "next/link";
import Script from "next/script";

import { useState, useEffect } from "react";

export default function FAQ() {
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
          content="FAQ - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="FAQ - Grabify IP Logger &amp; URL Shortener"
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
          content="FAQ - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/faq" />
        <title>FAQ - Grabify IP Logger &amp; URL Shortener</title>
        <link rel="canonical" href="https://grabify.xyz/faq" />
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
              <h2 className="title is-2 has-text-white">
                Frequently Asked Questions
              </h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                Need a quick bit of help? We probably have the answer for you
                here!
              </h3>
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="white" points="0,100 100,0 100,100"></polygon>
            </svg>
          </section>
          <section className="section container">
            <p>
              <strong>Q: Help! No logs are showing</strong>
            </p>
            <p>
              A: Have you tried refreshing the page? If there are still no logs,
              then the link has not been accessed.
            </p>
            <br />
            <p>
              <strong>Q: The location is wrong</strong>
            </p>
            <p>
              A: The location is only an estimate as stated on the page. You can
              only get so accurate based off of an IP address. To learn more
              about this, click{" "}
              <Link
                target="_blank"
                href="https://www.iplocation.net/geolocation-accuracy"
              >
                HERE
              </Link>{" "}
              or{" "}
              <Link
                target="_blank"
                href="https://whatismyipaddress.com/geolocation-accuracy"
              >
                HERE
              </Link>
            </p>
            <br />
            <p>
              <strong>Q: What can Grabify log?</strong>
            </p>
            <p>
              A: You can find the full list of features that Grabify can log{" "}
              <Link href="/faq/features">HERE</Link>
            </p>
            <br />
            <p name="SmartLogger">
              <strong>Q: What is "Smart Logger"?</strong>
            </p>
            <p>
              A: "Smart Logger" is a new state of the art logging technology
              that allows the user to also log items such as: battery level, if
              the device is charging, screen orientation, device orientation and
              a lot more that are to come.
            </p>
            <p>
              You can see all the data that Grabify can log{" "}
              <Link href="/faq/features">HERE</Link>
            </p>
            <br />
            <p>
              <strong>Q: Why might I see a redirect page?</strong>
            </p>
            <p>
              A: There are only two reasons why you might see a redirect page
              when clicking on a Grabify link. Users in the EU will see the
              redirect page as a result of the GDPR. If you send a link to
              someone outside of the EU, they will <b>not</b> see the redirect
              page.
              <br />
              For users outside of the EU, the redirect page is a result of the
              Smart Logger tool. Turning off Smart Logger will remove the
              redirect page, however you will not get the additional information
              that Smart Logger provides.
            </p>
            <br />
            <p>
              <strong>Q: Why are some of the values are not showing?</strong>
            </p>
            <p>
              A: This is because the device that clicked the link does not
              support these items. There is nothing that we can currently do
              about this. You will just have to wait for the device and or
              browser to update to support these items.
            </p>
            <br />
            <p>
              <strong>Q: How long do links last?</strong>
            </p>
            <p>A: Forever. Links never expire</p>
            <br />
            <p>
              <strong>Q: What are bots?</strong>
            </p>
            <p>
              A: Bots will often show up if you post a link on a social network.
              Bots are programs/websites that access a link in order to get
              metadata about it such as: Name of site, Images, description and
              so on.. If you see one of these in your logs, that will be why.
            </p>
            <br />
            <p>
              <strong>Q: What is the default timezone?</strong>
            </p>
            <p>
              A: The default timezone is UTC. But this can be changed when you
              login to your account and go to the profile page.
            </p>
            <br />
            <p>
              <strong>Q: What is a VPN, Proxy or Tor Exit Node?</strong>
            </p>
            <p>
              A: VPN's, Proxy's and Tor Exit Node's protect the users original
              IP. This means the IP of the user is hidden.
            </p>
            <br />
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
