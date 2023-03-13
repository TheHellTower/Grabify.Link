import Head from "next/head";

import Link from "next/link";
import Script from "next/script";

import { useState, useEffect } from "react";

export default function IPLookup(props) {
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
          content="Link Expander - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="Link Expander - Grabify IP Logger &amp; URL Shortener"
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
          content="Link Expander - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/expander" />
        <title>Link Expander - Grabify IP Logger &amp; URL Shortener</title>
        <link rel="canonical" href="https://grabify.xyz/expander" />
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
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
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
        <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `alert("NOT IMPLEMENTED"); window.location="/"`,
          }}
          strategy="beforeInteractive"
        />
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
              <h2 className="title is-2 has-text-white">Link Expander</h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                See where shortened links take you to without accessing them.
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
            <form action="" method="post" id="expand-frm">
              <input
                type="hidden"
                name="_token"
                value="wedFbKrPYFmHCyRS2RS8pwOfkjNY06NjqvATNYa7"
              />
              <div className="field">
                <label className="label">URL</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="url"
                    name="url"
                    placeholder="Username or email"
                    required
                  />
                </div>
              </div>
              {/* <div
                className="g-recaptcha"
                data-sitekey="6LeQMRwUAAAAAI9EqC05CqYE7JKXelwL4MhVwAES"
              ></div> */}
              <br />
              <button
                onSubmit={() => {
                  $(this).html("Loading...").prop("disabled", true);
                  document.getElementById("expand-frm").submit();
                }}
                type="submit"
                className="button is-primary"
              >
                Expand
              </button>
            </form>
            <br />
            <div>
              <strong>What is a Link Expander?</strong>
              <p>
                Have you ever wondered: <em>Where does this link go?</em> The
                link expander follows the path of the URL. It will show you the
                full redirection path of URLs, shortened links, or tiny URLs.
                This sort of service is also referred to as a{" "}
                <em>URL expander</em>, <em>link checker</em>,{" "}
                <em>URL checker</em>, <em>redirect checker</em>,{" "}
                <em>link tracker</em>, <em>URL tracker</em>,{" "}
                <em>redirect tracer</em>, <em>link follower</em>,{" "}
                <em>301 redirect checker</em>, <em>redirect tracker</em>,{" "}
                <em>URL tester</em>, and so on.
              </p>
              <br />
              <p>
                When the link expander traces a link, the results display all
                the links that you are being redirected through including php
                redirects, htaccess redirects, NGINX redirects, JavaScript
                redirects and meta-refreshes eventually leading you to the final
                destination. Learn about{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301/">
                  301 redirects here
                </a>
                .
              </p>
              <br />
              <strong>Why use this redirect link checker?</strong>
              <p>
                This redirect trace tool allows lets you troubleshoot links
                issues and perform competitive intelligence in a way that wasn't
                possible before.
              </p>
              <br />
              <strong>Troubleshooting Redirect Issues</strong>
              <p>
                This tool is like a link redirect detective that will follow
                your URLs and help you diagnose complex linking problems. As you
                migrate your website or rename URLs on your website, you need to
                forward that old URL address to a new URL address. It is best to
                test your URLs to ensure they go to the correct places and do
                not encounter an{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404/">
                  HTTP 404 error
                </a>{" "}
                along the way. Keep in mind, if you end up creating redirect
                chains, any error encountered during the redirect process could
                prevent the user from reaching the final destination.
              </p>
              <br />
              <strong>SEO Redirect Chains</strong>
              <p>
                If you are an SEO expert, you are continually looking to
                increase your website’s rankings. Google’s core algorithm is
                based on how websites link to each other. Link influence
                (PageRank) is passed when someone links to your site, but that
                influence has historically been diluted with redirect chains. By
                making your redirects as direct as possible, you are ensuring
                that your website is getting as much PageRank as possible. This,
                like many other SEO topics, is a controversial debate.
                Nevertheless, from a business risk perspective, the more
                redirects involved in the process of getting to your website,
                the more opportunities exists for that chain to become broken,
                thus losing all of the PageRank influence and traffic. If a
                search engine crawls a link that redirects and breaks due to an
                error, the page will eventually lose rankings or be delisted.
              </p>
              <br />
              <strong>Affiliate Link Tracking</strong>
              <p>
                If you are an affiliate marketer, then you likely use short
                links or tiny URLs to mask or shorten your links for social
                media platforms and other websites. If one of your redirects
                break then your affiliate income for that particular URL ceases.
                Grabify Link Expander can help you with check your affiliate
                links to ensure they are redirecting to the correct places.
              </p>
              <br />
              <strong>Tiny URL Expander</strong>
              <p>
                If you want to know where a tiny link goes, then you can also
                use Grabify Link Expander. It will show you exactly where that
                tiny URL goes and the full path of it. This is great to use if
                you are unsure where the link will take you or you want to see
                what affiliates are involved in the redirection process.
              </p>
              <br />
              <strong>Cutting Out Middle-Men Affiliates</strong>
              <p>
                As an affiliate marketer, you want to keep your profit margins
                as high as possible. To do this, you need to cut out all the
                middle-men affiliates. The Grabify Link Expander will show you
                all the affiliates involved in the link redirection process. To
                get the path to the affiliate, look at the final destination.
                The link directly before it would be the real affiliate program.
                Everything else is getting a piece of the affiliate revenue. So,
                trace all your current affiliate programs and make sure you are
                signed up directly with the source, not a sub-affiliate program,
                and you will make more money.
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
