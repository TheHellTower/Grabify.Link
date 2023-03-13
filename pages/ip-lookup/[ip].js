import Head from "next/head";

import Link from "next/link";
import Script from "next/script";

import { useState, useEffect } from "react";

export async function getServerSideProps(staticProps) {
  const params = staticProps.params;
  const ip = params.ip;
  return {
    props: {
      ip,
    },
  };
}

export default function IPLookupLmao(props) {
  const [ip, setIP] = useState(props.ip);

  useEffect(() => {
    setIP(props.ip);
  }, []);

  const onChange = (e) => {
    setIP(e.target.value);
  };

  const [IPInfo, setIPInfo] = useState("");

  useEffect(() => {
    fetch(`/api/ip-lookup?ip=${ip}`)
      .then((r) => r.json())
      .then((json) => {
        //console.log(json);
        return setIPInfo(json);
      })
      .catch((e) => {
        //console.log(e);
        return setIPInfo("{}");
      });
  }, []);

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
          content="IP Lookup Tool - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="IP Lookup Tool - Grabify IP Logger &amp; URL Shortener"
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
          content="IP Lookup Tool - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/ip-lookup/x" />
        <title>IP Lookup Tool - Grabify IP Logger &amp; URL Shortener</title>
        <link rel="canonical" href="https://grabify.xyz/ip-lookup/x" />
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
              <h2 className="title is-2 has-text-white">IP Lookup Tool</h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                Quickly look up details on specific IP addresses!
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
                Simply enter the IP address (IPv4 or IPv6) that you want to look
                up into the search field and click "Get IP Details". The tool
                will then display information about the owner of the address,
                such as internet service provider (ISP), Country, City, State
                and weather or not the IP is a VPN. To ensure accurate results,
                make sure to enter the correct IP address.
              </p>
            </div>
            {IPInfo === "{}" && (
              <div className="notification is-warning">
                <ul>
                  <li>
                    Sorry could not find any information on the IP address: "
                    {props.ip}". Please check it is correct and try again.
                  </li>
                </ul>
              </div>
            )}
            <div className="field">
              <label className="label">IP Address</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onKeyDown={() => {
                    if (event.keyCode === 13)
                      document.getElementById("lookup").click();
                  }}
                  id="ip"
                  name="ip"
                  placeholder="Please enter an IP address"
                  value={ip}
                  onChange={(event) => onChange(event)}
                  required
                />
              </div>
            </div>
            <br />
            <button
              id="lookup"
              onClick={() =>
                (window.location.href = `/ip-lookup/${
                  document.getElementById("ip").value
                }`)
              }
              className="button is-primary"
            >
              Get IP Details
            </button>
            <br />
            <br />
            <strong>Hide your IP!</strong> -
            <Link href="/hide" target="_blank">
              Click here to <b>hide</b> your IP and stay anonymous online
            </Link>
            .<br />
            <br />
            {IPInfo !== "{}" && IPInfo !== "" && (
              <div className="table-responsive">
                <table className="table table-bordered is-striped is-bordered is-fullwidth">
                  <tbody>
                    <tr>
                      <th>
                        <i className="fa fa-link" aria-hidden="true"></i>{" "}
                        Internet Protocol address (
                        <Link href="https://en.wikipedia.org/wiki/IP_address">
                          IP
                        </Link>
                        )
                      </th>
                      <td>
                        <p>{IPInfo["query"]}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i
                          className="fa-regular fa-circle-question"
                          aria-hidden="true"
                        ></i>{" "}
                        Kind
                      </th>
                      <td>
                        <p>
                          {IPInfo["mobile"]
                            ? "Mobile(Cellular Data)"
                            : "Home(House)"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                        Country
                      </th>
                      <td>
                        <p>{IPInfo["country"]}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-flag" aria-hidden="true"></i> City
                      </th>
                      <td>
                        <p>{IPInfo["city"]}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-flag" aria-hidden="true"></i> State
                      </th>
                      <td>
                        <p>{IPInfo["region"]}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i
                          className="fa-solid fa-shield"
                          aria-hidden="true"
                        ></i>
                        <Link href="https://en.wikipedia.org/wiki/Web_hosting_service">
                          Hosting
                        </Link>
                        /
                        <Link href="https://en.wikipedia.org/wiki/Proxy">
                          Proxy
                        </Link>
                      </th>
                      <td>
                        <p>Hosting: {IPInfo["hosting"] ? "Yes" : "No"}</p>
                        <p>Proxy: {IPInfo["proxy"] ? "Yes" : "No"}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        Internet Provider (
                        <Link href="https://en.wikipedia.org/wiki/Internet_service_provider">
                          ISP
                        </Link>
                        )
                      </th>
                      <td>
                        <p>{IPInfo["isp"]}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i
                          className="fa-solid fa-rotate-right"
                          aria-hidden="true"
                        ></i>
                        Autonomous System (
                        <Link href="https://en.wikipedia.org/wiki/Autonomous_system_(Internet)">
                          AS
                        </Link>
                        )
                      </th>
                      <td>
                        <p>{IPInfo["as"]}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            <br />
            <div className="columns is-justify-content-space-around">
              <div data-fuse="21842489293" className="ad_container_other"></div>
            </div>
            <br />
            <div className="content">
              <h3 className="section-title">
                The Importance of an IP lookup tool
              </h3>
              <p>
                Grabify's IP lookup tool is a useful tool that allows you to find
                information about the owner of an IP address. An IP address is a
                unique numerical label assigned to every device connected to the
                internet. It is used to identify the device and route data to
                and from it.
              </p>
              <p>
                There are many reasons why an IP lookup tool can be important.
                Some of the most common uses include:
              </p>
              <ol>
                <li>
                  Identifying the source of an internet connection: If you are
                  having issues with your internet connection, an IP lookup tool
                  can help you identify the source of the problem. By looking up
                  the IP address of the device causing the issue, you can
                  determine who the owner is and take appropriate action.
                </li>
                <li>
                  Troubleshooting network issues: An IP lookup tool can be
                  useful for troubleshooting network issues. By looking up the
                  IP address of a device, you can determine who the owner is and
                  whether the device is authorized to be on the network.
                </li>
                <li>
                  Verifying the location of a device: An IP lookup tool can also
                  be used to verify the location of a device. By looking up the
                  IP address of a device, you can determine the general
                  geographic location of the device and whether it is where it
                  should be.
                </li>
                <li>
                  Security purposes: An IP lookup tool can be useful for
                  security purposes as well. You can use it to identify
                  unfamiliar devices on your network or to track the source of
                  suspicious activity.
                </li>
              </ol>
              <p>
                In summary, an IP lookup tool is a useful tool that allows you
                to find information about the owner of an IP address. It can be
                used for a variety of purposes, including troubleshooting
                network issues, verifying the location of a device, and
                improving security.
              </p>
              <strong>Hide your IP!</strong> -
              <Link href="/hide" target="_blank">
                Click here to <b>hide</b> your IP and stay anonymous online
              </Link>
              .<br />
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
