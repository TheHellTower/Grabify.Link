import Head from "next/head";

import Link from "next/link";
import Script from "next/script";

import { useState, useEffect } from "react";

export default function IPLookup() {
  const [mac, setMAC] = useState("");

  const onChange = (e) => {
    setMAC(e.target.value);
  };

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
          content="MAC Address Lookup - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="MAC Address Lookup - Grabify IP Logger &amp; URL Shortener"
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
          content="MAC Address Lookup - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/mac-lookup" />
        <title>MAC Address Lookup - Grabify IP Logger &amp; URL Shortener</title>
        <link rel="canonical" href="https://grabify.xyz/mac-lookup" />
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
              <h2 className="title is-2 has-text-white">MAC Address Lookup</h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                Quickly look up details on any specific MAC address
              </h3>
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="white" points="0,100 100,0 100,100"></polygon>
            </svg>
          </section>
          <section className="section container">
            <div className="columns is-justify-content-space-around">
              <div data-fuse="21842489293" className="ad_container_other"></div>
            </div>
            <div className="content">
              <p>
                Simply enter the MAC address of the device (00:00:00:00:00:00)
                into the search field and click "Get MAC Address Details". The
                tool will then search its database for information about the
                manufacturer of the device based on the MAC address. If a match
                is found, the manufacturer's name and other relevant information
                will be displayed.
              </p>
            </div>
            <div className="field">
              <label className="label">MAC Address</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onKeyDown={(event) => {
                    if (event.keyCode === 13)
                      document.getElementById("lookup").click();
                  }}
                  id="mac"
                  name="mac"
                  placeholder="Please enter a MAC address"
                  value={mac}
                  onChange={(event) => onChange(event)}
                  required
                />
              </div>
            </div>
            <br />
            <button
              id="lookup"
              onClick={() =>
                (window.location.href = `/mac-lookup/${
                  document.getElementById("mac").value
                }`)
              }
              className="button is-primary"
            >
              Get MAC Address Details
            </button>
            <br />
            <br />
            <div className="content">
              <h3 className="section-title">What is a MAC address?</h3>
              <p>
                A MAC (Media Access Control) address is a unique identifier
                assigned to every device on a network. It is used to identify
                the device on the local network and is often referred to as a
                "physical" or "hardware" address. Each device has its own MAC
                address, which is stored in the device's hardware and cannot be
                changed.
              </p>
              <p>
                The MAC address is made up of a series of numbers and letters
                and is typically written in the format 00:00:00:00:00:00. It is
                used by the network to identify the device and route data to and
                from the device. The MAC address is also used to filter traffic
                and ensure that only authorized devices can access the network.
              </p>
              <p>
                While the MAC address is important for communication on the
                local network, it is not used for long-distance communication.
                For that, a device's IP (Internet Protocol) address is used. The
                IP address is a unique identifier assigned to a device on the
                internet and is used to route data between devices on the global
                network.
              </p>
              <p>
                In summary, a MAC address is a unique identifier assigned to a
                device on a network and is used to identify and communicate with
                the device on the local network. It is an essential component of
                networking and helps ensure that data is delivered to the
                correct device.
              </p>
              <h3 className="section-title">
                How can I get a MAC address from Grabify or a website visitor?
              </h3>
              <p>
                It is generally not possible to obtain the MAC (Media Access
                Control) address of a visitor to your website. The MAC address
                is a unique identifier assigned to a device's network adapter
                and is used to identify the device on the local network. It is
                not broadcast beyond the local network and is not included in
                the data sent to Grabify or any other website.
              </p>
              <p>
                However, there are a few workarounds that may allow you to
                obtain the MAC address of a visitor under certain circumstances.
                These methods generally involve running code on the visitor's
                device through their browser, such as an Active-X control for
                Internet Explorer or an XPCOM component for Mozilla Firefox.
                However, these approaches require user intervention and may not
                be reliable or universal.
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
