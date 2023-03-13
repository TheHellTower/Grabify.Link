import Head from "next/head";

import Link from "next/link";
import Script from "next/script";

import { useState, useEffect } from "react";

export default function InvisibleImageLogger(props) {
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
          content="Invisible Image logger - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="Invisible Image logger - Grabify IP Logger &amp; URL Shortener"
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
          content="Invisible Image logger - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/image" />
        <title>
          Invisible Image logger - Grabify IP Logger &amp; URL Shortener
        </title>
        <link rel="canonical" href="https://grabify.xyz/image" />
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
                Invisible Image logger
              </h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                Just like a Grabify link, but invisible!
              </h3>
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="white" points="0,100 100,0 100,100"></polygon>
            </svg>
          </section>
          <section className="section container">
            <p className="subtitle is-5">
              An invisible IP logger otherwise known as a tracking pixel is a
              1x1 pixel image that is placed on your website and loaded when a
              user visits it. It is useful for tracking user behavior and
              conversions. With a tracking pixel, advertisers can acquire data
              for online marketing, web analysis or email marketing. With log
              file analysis, long data evaluation or using appropriate
              analytical tools, this data can be used for different purposes,
              for example retargeting.
            </p>
            {/* <script
              dangerouslySetInnerHTML={{
                __html: `function loadRecaptcha() { var script = document.createElement("script"); script.src = "https://www.google.com/recaptcha/api.js"; if ($('script[src="https://www.google.com/recaptcha/api.js"]').length === 0) { document.head.appendChild(script); } loadRecaptcha();}`,
              }}
            /> */}

            <br />
            <div className="columns is-justify-content-space-around">
              <div data-fuse="21842489293" className="ad_container_other"></div>
            </div>
            <br />
            <br />
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
                    type="hidden"
                    id="linkToShorten"
                    name="linkToShorten"
                    value="https://i.imgur.com/FVldYF4.png"
                  />
                </div>
              </div>
              <input
                type="hidden"
                name="_token"
                value="wedFbKrPYFmHCyRS2RS8pwOfkjNY06NjqvATNYa7"
              />
              <div className="buttons is-centered">
                <button
                  className="button is-primary is-large"
                  type="button"
                  data-toggle="modal"
                  data-target="confirm"
                >
                  Create Invisible Image logger
                </button>
              </div>
              <div id="confirm" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">
                      This action requires your consent
                    </p>
                    <button className="delete" aria-label="close"></button>
                  </header>
                  <section className="modal-card-body">
                    I agree with the{" "}
                    <Link href="/tos" target="_blank">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
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
            <div className="mt-5">
              <p className="title is-5">How do I use it?</p>
              <p>
                There are many ways these can be used. The links may be inserted
                into your message, webpage or blog for statistics collection,
                getting the IP addresses of all the users who opened your
                message, page, blog and so on.
              </p>
              <i>
                An example of using this invisible image logger in HTML:
                <i>
                  <b>&lt;img src="https://grabify.xyz/YOUR_CODE"&gt;</b>
                </i>
              </i>
              <br />
              <i>
                An example of using this invisible image logger in MyBB:
                <i>
                  <b>[img]https://grabify.xyz/YOUR_CODE[/img]</b>
                </i>
              </i>
              <p>
                Just replace "https://grabify.xyz/YOUR_CODE" with your custom
                link that will be generated by clicking the button above.
              </p>
              <br />
              <p className="title is-5">How does it work?</p>
              <p>
                The website admin or sender of an message/email adds the
                tracking pixel using a code in the website’s HTML code or email
                (As shown above). This code contains an external invisible link
                to Grabify. If a user visits the destination website, the HTML
                code is processed by the client – usually the user’s browser.
                The browser follows the link and opens the invisible image. This
                is registered and logged on the tracking page.
                <br />
                In addition, various information about the user is also
                transmitted using this method. You can view all the information
                it can log <Link href="/faq/features">here</Link>.
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
