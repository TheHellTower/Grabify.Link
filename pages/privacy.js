import Head from "next/head";
import { Inter } from "@next/font/google";

import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

import { useState, useEffect } from "react";

export default function Privacy() {
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
          content="Privacy - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="Privacy - Grabify IP Logger &amp; URL Shortener"
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
          content="Privacy - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/faq/privacy" />
        <title>Privacy - Grabify IP Logger &amp; URL Shortener</title>
        <link rel="canonical" href="https://grabify.xyz/faq/privacy" />
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
              <h2 className="title is-2 has-text-white">Privacy Policy</h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                Your privacy is very important to us. Find out our procedures
                below.
              </h3>
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="white" points="0,100 100,0 100,100"></polygon>
            </svg>
          </section>
          <section className="section container">
            <style jsx>
              {`
                .legal h1 {
                  margin: 12pt 0 0;
                  text-indent: 0;
                  font-size: 11pt;
                  font-family: "Arial", serif;
                  font-weight: bold;
                  text-transform: none;
                }

                .legal h2 {
                  margin: 12pt 0 0 36pt;
                  text-indent: -36pt;
                  font-size: 11pt;
                  font-family: "Arial", serif;
                  font-weight: normal;
                  text-transform: none;
                }

                .legal h3 {
                  margin: 12pt 0 0 72pt;
                  text-indent: -36pt;
                  font-size: 11pt;
                  font-family: "Arial", serif;
                  font-weight: normal;
                  text-transform: none;
                }

                .legal h4 {
                  margin: 12pt 0 0 108pt;
                  text-indent: -36pt;
                  font-size: 11pt;
                  font-family: "Arial", serif;
                  font-weight: normal;
                  text-transform: none;
                }

                .legal h5 {
                  margin: 12pt 0 0 144pt;
                  text-indent: -36pt;
                  font-size: 11pt;
                  font-family: "Arial", serif;
                  font-weight: normal;
                  text-transform: none;
                }

                .legal h6 {
                  margin: 12pt 0 0;
                  page-break-after: avoid;
                  font-size: 11pt;
                  font-family: "Arial", serif;
                  font-weight: normal;
                  text-decoration: underline;
                  text-transform: none;
                }

                .legal p {
                  margin-right: 0;
                  margin-left: 0;
                  font-size: 12pt;
                  font-family: "Arial", serif;
                }
              `}
            </style>
            <div className="legal">
              <h1>Privacy Policy</h1>
              <p>Last updated: Aug 21, 2021</p>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  1.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                Introduction
              </h1>
              <h2>
                1.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>This
                Privacy Policy applies to how we collect and use your Personal
                Data when you interact with us, visit our Website or use any of
                the Services.
              </h2>
              <h2>
                1.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We
                will use your Personal Data only for the purposes and in the
                manner set forth below and we take steps to ensure the
                processing of your Personal Data is in compliance with the
                Privacy Act. We will also comply with any obligations that we
                have under other applicable law, to the extent that is
                applicable, including the GDPR.
              </h2>
              <h2>
                1.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>By
                visiting our Website or using our Services you agree to our use
                of your Personal Data in accordance with this Privacy Policy (as
                amended from time to time).
              </h2>
              <h2>
                1.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>If you
                do not agree with or are not comfortable with any aspect of this
                Privacy Policy, you should not use our Website or the Services.
              </h2>
              <h2>
                1.5<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>This
                Privacy Policy is updated from time to time; therefore, you
                should review it occasionally. Your continued use of our Website
                or the Services following the changes shall be deemed acceptance
                of the changes.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  2.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                Definitions and Interpretation
              </h1>
              <h2>
                2.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>The
                following terms have the following meanings:
              </h2>
              <h3>
                2.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>&quot;us&quot; or
                &quot;we&quot; refers to jLynx Limited, the owner(s) of our
                Website;
              </h3>
              <h3>
                2.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>&quot;you&quot;
                refers to the user or viewer of our Website;
              </h3>
              <h3>
                2.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>
                <b>“</b>GDPR<b>”</b>refers to the General Data Protection
                Regulation;
              </h3>
              <h3>
                2.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>“Personal Data” is
                any information that can or may be used to identify you and may
                include the information set out in clauses 4.1 and 4.2.
              </h3>
              <h3>
                2.1.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span> “Privacy Act” means
                the Privacy Act 2020;
              </h3>
              <h3>
                2.1.6<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>“Services” refers to
                the services we provide via or through our Website; and
              </h3>
              <h3>
                2.1.7<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>“Website” refers to
                our website, which you use in conjunction with the Services.
              </h3>
              <h2>
                2.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                References to the Privacy Act or other legislation includes any
                subordinate legislation, by-law, regulation, order, statutory
                instrument or determination made under it, any re-enactment of,
                or amendment to it and all legislation passed in substitution
                for that legislation.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  3.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                When does this Privacy Policy apply
              </h1>
              <h2>
                3.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>This
                Privacy Policy applies to Personal Data that we collect, use and
                otherwise process about you. We collect Personal Data from you
                in the following circumstances:
              </h2>
              <h3>
                3.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>When you visit our
                Website;
              </h3>
              <h3>
                3.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>When you request or
                use any of the Services
              </h3>
              <h3>
                3.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>When you register,
                create or update an account with us;
              </h3>
              <h3>
                3.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>When you purchase or
                order products or services from us;
              </h3>
              <h3>
                3.1.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>When you communicate
                with us including when you make any inquiry or complaint;
              </h3>
              <h3>
                3.1.6<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>When you comment or
                submit information in any online form; and
              </h3>
              <h3>
                3.1.7<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Where we are
                permitted to do so under law (including the laws of any foreign
                jurisdiction).
              </h3>
              <h2>
                3.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We
                gather some information automatically through our or third party
                systems we use including by the use of cookies (see below).
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  4.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                Collection
              </h1>
              <h2>
                4.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We may
                collect the following information:
              </h2>
              <h3>
                4.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Contact details,
                including your name, email address, physical and/or postal
                address, telephone number and other contact details;
              </h3>
              <h3>
                4.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Payment information;
              </h3>
              <h3>
                4.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Information that you
                provide when you communicate with us;
              </h3>
              <h3>
                4.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Information that you
                submit including in any forms you fill out on our Website;
              </h3>
              <h3>
                4.1.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Information about the
                location of your device; and
              </h3>
              <h3>
                4.1.6<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Information on the
                Services that you use.
              </h3>
              <h2>
                4.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We may
                also collect a series of general data and information when you
                visit our Website. This general data and information are stored
                in the server log files. The following information may be
                collected:
              </h2>
              <h3>
                4.2.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The browser types and
                versions used,
              </h3>
              <h3>
                4.2.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The operating system
                used by the accessing system;
              </h3>
              <h3>
                4.2.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The website from
                which an accessing system reaches our Website (so-called
                referrers);
              </h3>
              <h3>
                4.2.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The date and time of
                access to our Website;
              </h3>
              <h3>
                4.2.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>An Internet protocol
                address (<b>IP Address</b>);
              </h3>
              <h3>
                4.2.6<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The Internet service
                provider of the accessing system, and
              </h3>
              <h3>
                4.2.7<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Any other similar
                data and information that may be used in the event of attacks on
                our information technology systems.
              </h3>
              <h2>
                4.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We do
                not draw any conclusions about the data subject and cannot
                identify a data subject as an individual.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  5.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                Collection of other information
              </h1>
              <h2>
                5.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Some
                of the Services collect further information about other
                individuals including the following information:
              </h2>
              <h3>
                5.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The browser types and
                versions used;
              </h3>
              <h3>
                5.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The operating system
                used by the accessing system;
              </h3>
              <h3>
                5.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The website from
                which an accessing system reaches our Website (so-called
                referrers);
              </h3>
              <h3>
                5.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Information sent by
                your browser or application;
              </h3>
              <h3>
                5.1.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The date and time of
                the click on the short URL or view of the user’s website or
                social media channel with published IP-informer or IP-counter on
                it;
              </h3>
              <h3>
                5.1.6<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>An IP Address of the
                user that clicked on the short URL or view of the user website
                or social media channel with published IP-informer or IP-counter
                on it;
              </h3>
              <h3>
                5.1.7<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>The Internet service
                provider (<b>ISP</b>) of the user that clicked on the short URL
                or view of the user website or social media channel with
                published IP-informer or IP-counter on it;
              </h3>
              <h3>
                5.1.8<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Information about the
                geographical location of the ISP available from the publically
                available databases, and
              </h3>
              <h3>
                5.1.9<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Time zone and
                language.
              </h3>
              <h2>
                5.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You
                acknowledge and agree that you are responsible for receiving an
                acknowledgment, agreement and clear consent from any person to
                whom you send links using the Services or from whom you receive
                information.
              </h2>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  6.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                What Do We Use Your Personal Data For?
              </h1>
              <h2>
                6.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>The
                main purposes for which we use your Personal Data are:
              </h2>
              <h3>
                6.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To process your
                account;
              </h3>
              <h3>
                6.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To provide the
                Services;
              </h3>
              <h3>
                6.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To develop and
                improve the Services (including service communication, insight,
                research, customer surveys and feedback);
              </h3>
              <h3>
                6.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To analyse and
                evaluate the use of our Services;
              </h3>
              <h3>
                6.1.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To support other
                administrative purposes;
              </h3>
              <h3>
                6.1.6<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To comply with all
                legal and regulatory requirements;
              </h3>
              <h3>
                6.1.7<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Where you have given
                us permission, to contact you from time to time to keep you up
                to date with limited offers, new services, company news and
                other promotions which we consider may be of interest to you;
              </h3>
              <h3>
                6.1.8<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Deliver the content
                of our Website correctly;
              </h3>
              <h3>
                6.1.9<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Optimize the content
                of our Website as well as its advertisement;
              </h3>
              <h3>
                6.1.10<span>&nbsp;&nbsp; </span>Ensure the long-term viability
                of our information technology systems and website technology;
              </h3>
              <h3>
                6.1.11<span>&nbsp;&nbsp; </span>To communicate with you and
                assist with your queries, requests or complaints;
              </h3>
              <h3>
                6.1.12<span>&nbsp;&nbsp; </span>To send you communications that
                we are required by law or which we need to provide;
              </h3>
              <h3>
                6.1.13<span>&nbsp;&nbsp; </span>To verify your identity and
                enable you to access our services in case you forget your
                password or account details;
              </h3>
              <h3>
                6.1.14<span>&nbsp;&nbsp; </span>Where necessary, to enforce any
                legal rights we may have, or to protect the rights, property and
                safety of you, us and others, including to provide law
                enforcement authorities with the information necessary for
                criminal prosecution in case of a cyber-attack;
              </h3>
              <h3>
                6.1.15<span>&nbsp;&nbsp; </span>To provide adverts on our
                Website (see “Other Third Party Providers” below); and
              </h3>
              <h3>
                6.1.16<span>&nbsp;&nbsp; </span>Any other uses to which you
                consent.
              </h3>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  7.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                Entitlement
              </h1>
              <h2>
                7.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>The
                legal basis for this use and other processing will include (as
                relevant):
              </h2>
              <h3>
                7.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>You have provided us
                with your consent to the processing of your Personal Data;
              </h3>
              <h3>
                7.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To enable us to
                perform our obligations under any contract with you and other
                users;
              </h3>
              <h3>
                7.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To enable us to
                comply with any other contractual or legal obligation; and
              </h3>
              <h3>
                7.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span> For our legitimate
                interests provided these are not overridden by your interests
                and fundamental rights and freedoms
              </h3>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  8.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                Sharing Personal Data
              </h1>
              <h2>
                8.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We may
                disclose your Personal Data in the following circumstances:
              </h2>
              <h3>
                8.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>To third parties who
                provide services for us, including auditors and professional
                advisors;
              </h3>
              <h3>
                8.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Where this is
                necessary to enforce our rights against you;
              </h3>
              <h3>
                8.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Governmental and
                regulatory bodies and authorities (including but not limited to
                law enforcement authorities) upon a valid request or as required
                by law including to comply with a court order or a request from
                a regulator or similar legal process or where otherwise
                necessary to comply with a legal obligation or for the
                administration of justice;
              </h3>
              <h3>
                8.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>In the event of a
                merger, acquisition, or any form of sale of some or all of our
                assets to a third party, we may disclose your Personal Data to
                the third parties concerned or their professional advisors; and
              </h3>
              <h3>
                8.1.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Other third parties,
                where it is permitted by law, or where we have your consent.
              </h3>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  9.
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                International transfers
              </h1>
              <h2>
                9.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Due to
                the global nature of our Website, our users may be located
                worldwide and your Personal Data may be transferred to third
                parties located in other countries. These other countries may
                either have different data protection laws than your country of
                residence or they may not have data protection laws. You consent
                to your Personal Data being transferred outside your country of
                residence.
              </h2>
              <h2>
                9.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We
                take reasonable steps to ensure that your Personal Data is
                adequately protected in accordance with the Privacy Act and
                where relevant the GDPR and not shared with third parties
                without your consent.
              </h2>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  10.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Period for which the Personal Data will be stored
              </h1>
              <h2>
                10.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Your Personal Data will
                not be kept for longer than is necessary to fulfil the specific
                purposes outlined in this Privacy Policy and to allow us to
                comply with our legal requirements.
              </h2>
              <h2>
                10.2<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>The criteria we use to
                determine data retention periods includes the following:
              </h2>
              <h3>
                10.2.1<span>&nbsp;&nbsp; </span>
                <b>Retention in case of queries. </b>
              </h3>
              <h3 style={{ textIndent: 0 }}>
                We may retain your Personal Data for a reasonable period after
                you have enquired about Services, in case of follow up queries
                from you.
              </h3>
              <h3>
                10.2.2<span>&nbsp;&nbsp; </span>
                <b>Retention in case of claims</b>
              </h3>
              <h3 style={{ textIndent: 0 }}>
                We may retain your Personal Data for the period in which you
                might legally bring claims against us if and to the extent this
                is relevant.
              </h3>
              <h3>
                10.2.3<span>&nbsp;&nbsp; </span>
                <b>
                  Retention in accordance with legal and regulatory requirements
                </b>
              </h3>
              <h3 style={{ textIndent: 0 }}>
                We may retain your Personal Data after the period of retention
                in the case of queries or claims (above) because of a legal or
                regulatory requirement. Some or all of these criteria may be
                relevant to retention of your Personal Data collected from you
                in connection with our Services.
              </h3>
              <h3>
                10.2.4<span>&nbsp;&nbsp; </span>
                <b>Retention permitted under applicable law</b>
              </h3>
              <h3 style={{ textIndent: 0 }}>
                We may retain your Personal Data where this is necessary to
                provide the Services where the retention is necessary for the
                purposes of pursuing our legitimate interests or where it is
                necessary for public interest purposes.
              </h3>
              <h2>
                10.3<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Although reasonable
                efforts will be taken, it may not always be possible to
                completely remove or delete all of your Personal Data from our
                databases because of back-ups and other technical reasons. Where
                this is the case, we will take steps to ensure that your
                Personal Data is suppressed in order to render it unusable
              </h2>
              <h2>
                10.4<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Information such as IP
                Address, browser, operating system, HTTP Referrer and user
                agent, collected for your shorten URLs, counters and informers,
                designed for you to be able to collect statistics about visitors
                for your website, blogs or other resources on the internet, will
                be removed from the database after 1 year from the date of
                collection.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  11.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Cookie Usage
              </h1>
              <h2>
                11.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>There are instances
                where we may use cookies when you visit our Website or use the
                Services.
              </h2>
              <h2>
                11.2<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Cookies are files that
                are downloaded to your computer automatically.
              </h2>
              <h2>
                11.3<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Cookies provide
                information about how visitors use our Website and Services and
                are used to help us improve our Website and the Services.
              </h2>
              <h2>
                11.4<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Any information
                collected not contain any Personal Data which directly
                identifies you as an individual.
              </h2>
              <h2>
                11.5<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Your browser has the
                ability to decline cookies. This is done by setting your browser
                options to decline all cookies. If you do decline cookies, you
                may not be able to access some aspects of our Website or the
                Services.
              </h2>
              <h2>
                11.6<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Our advertisers may
                download cookies to which we have no control. If used, these
                cookies are downloaded by clicking on an advertisement found on
                our Website.
              </h2>
              <h2>
                11.7<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Please click
                <b>here</b> to learn more about the cookies that we use and how
                they are used them.
              </h2>
              <h2>
                11.8<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Please also see clause
                12 and 13.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  12.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Google
              </h1>
              <h2>
                12.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Google's advertising
                requirements can be summed up by Google's Advertising
                Principles. They are put in place to provide a positive
                experience for users.
                <b>
                  https://support.google.com/adwordspolicy/answer/1316548?hl=en
                </b>
              </h2>
              <h2>
                12.2<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>We use Google AdSense
                Advertising on our Website.
              </h2>
              <h2>
                12.3<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Google, as a
                third-party vendor, uses cookies to serve ads on our site.
                Google's use of the DART cookie enables it to serve
                advertisements to our users based on previous visits to our site
                and other sites on the Internet. You may opt-out of the use of
                the DART cookie by visiting the Google Ad and Content Network
                privacy policy.
              </h2>
              <h2>
                12.4<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>We have implemented the
                following:
              </h2>
              <h3>
                12.4.1<span>&nbsp;&nbsp; </span>• DoubleClick Platform
                Integration
              </h3>
              <h3 style={{ textIndent: 0 }}>
                We along with third-parties , including Google use first-party
                cookies (such as the Google Analytics cookies and third-party
                cookies (such as the DoubleClick cookie) or other third-party
                identifiers together to compile data regarding user interactions
                with ad impressions and other ad service functions as they
                relate to our Website.
              </h3>
              <h3>
                12.4.2<span>&nbsp;&nbsp; </span>Opting out:
              </h3>
              <h3 style={{ textIndent: 0 }}>
                You can set preferences for how Google advertises to you using
                the Google Ad Settings page. Alternatively, you can opt out by
                visiting the Network Advertising initiative opt out page or
                permanently using the Google Analytics Opt Out Browser add on.
              </h3>
              <h2>
                12.5<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>We use Google Analytics
                that may collect Personal Data. Please read carefully Google
                services privacy policy by the link:
                <b>
                  <a href="https://policies.google.com/technologies/partner-sites">
                    https://policies.google.com/technologies/partner-sites
                  </a>
                </b>
                &nbsp;.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  13.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                California Consumer Privacy Act (“CCPA”)
              </h1>
              <h2>
                13.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Under CCPA, Californian
                residents have the right to declare their preferences on the
                sale of data for advertising and marketing purposes. If you wish
                to change your preferences, click this link to launch our
                preference portal:
                <div style={{ display: "inline" }} data-fuse-privacy-tool></div>
              </h2>
              <h2>
                13.2<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Californian residents
                also have the right to access and/or delete collected data about
                them. If you wish to invoke either right, please see this link.
                We use a third-party to provide monetisation technologies for
                our site. You can review their privacy and cookie policy
                <a href="https://publift.com/privacy-policy/">here</a>.
              </h2>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  14.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Other Third Party Providers
              </h1>
              <h2>
                14.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>We use the following
                third party providers who will or may use your Personal Data to
                provide their services:
              </h2>
              <h3>
                14.1.1<span>&nbsp;&nbsp; </span>Buysellads.com;
              </h3>
              <h3>
                14.1.2<span>&nbsp;&nbsp; </span>Tawk.to;
              </h3>
              <h3>
                14.1.3<span>&nbsp;&nbsp; </span>Google for the purposes
                described in clause 12; and
              </h3>
              <h3>
                14.1.4<span>&nbsp;&nbsp; </span>Other third party providers that
                provide services to us from time to time.
              </h3>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  15.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Your Rights
              </h1>
              <h2>
                15.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>You may have various
                rights under data privacy laws in your country. These may
                include (as relevant):
              </h2>
              <h3>
                15.1.1<span>&nbsp;&nbsp; </span>The right to request access to
                or a copy of the Personal Data we hold about you;
              </h3>
              <h3>
                15.1.2<span>&nbsp;&nbsp; </span>The right to rectification
                including the right to require us to correct inaccurate Personal
                Data;
              </h3>
              <h3>
                15.1.3<span>&nbsp;&nbsp; </span>The right to request that we
                erase your Personal Data in specific circumstances:
              </h3>
              <h4>
                (a)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Where
                the Personal Data are no longer necessary in relation to the
                purpose for which it was originally collected/processed;
              </h4>
              <h4>
                (b)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Where,
                in circumstances where we process Personal Data by virtue of
                your consent, you withdraw consent and there is no other ground
                for the processing; or
              </h4>
              <h4>
                (c)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Where, in circumstances where processing Personal Data is
                necessary for our legitimate interests, you object to us
                processing your information and there are no legitimate grounds
                for processing; or
              </h4>
              <h4>
                (d)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Where
                Personal Data are processed for direct marketing;
              </h4>
              <h3>
                15.1.4<span>&nbsp;&nbsp; </span>The right to request restriction
                of processing concerning you or to object to processing of your
                Personal Data in certain circumstances;
              </h3>
              <h3>
                15.1.5<span>&nbsp;&nbsp; </span>The right to data portability
                including to obtain Personal Data in a commonly used machine
                readable format where our processing of it is based on your
                consent and the processing is carried out by automated means;
              </h3>
              <h3>
                15.1.6<span>&nbsp;&nbsp; </span>The right, where we process your
                Personal Data for our legitimate interests, to object to the
                processing unless there are compelling legitimate grounds for
                the processing;
              </h3>
              <h3>
                15.1.7<span>&nbsp;&nbsp; </span>The right to withdraw your
                consent to the processing of your Personal Data;
              </h3>
              <h3>
                15.1.8<span>&nbsp;&nbsp; </span>The right to object to the
                processing of Personal Data for marketing;
              </h3>
              <h3>
                15.1.9<span>&nbsp;&nbsp; </span>The right not to be subject to
                automated decision making including profiling (if any) that has
                a legal or significant effect on you as an individual; and
              </h3>
              <h3>
                15.1.10
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                The right to any details of any persons to whom we disclose your
                Personal Data (unless we are prohibited from providing such
                information pursuant to applicable law).
              </h3>
              <h2>
                15.2<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>To make any request
                under this clause you should:
              </h2>
              <h3>
                15.2.1<span>&nbsp;&nbsp; </span>Contact us via the details
                provided in the Contact section of this Privacy Policy; or
              </h3>
              <h3>
                15.2.2<span>&nbsp;&nbsp; </span>Complete the online form on our
                Website.
              </h3>
              <h2>
                15.3<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>You can require that we
                cease the use of your Personal Data for marketing purposes by:
              </h2>
              <h3>
                15.3.1<span>&nbsp;&nbsp; </span>Using the unsubscribe feature in
                any message that we send to you; or
                <a name="MyCursorPosition"></a>
              </h3>
              <h3>
                15.3.2<span>&nbsp;&nbsp; </span>Logging in to your account and
                updating the appropriate preferences (if available) for that
                account;
              </h3>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  16.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Security
              </h1>
              <h2>
                16.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>We endeavour to use
                appropriate technical and physical security measures to protect
                your Personal Data from accidental or unlawful destruction,
                loss, alteration, unauthorised disclosure of, or access. These
                measures include: storing Personal Data in a private database
                which is accessed via an internal control panel protected with
                the username, password and IP Address of our authorised users;
                storing hashed information as opposed to passwords and using
                secure cloud storage on Azure for database backups. Our service
                providers are also selected carefully and required to use
                appropriate protective measures.
              </h2>
              <h2>
                16.2<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>As effective as modern
                security practices are, no physical or electronic security
                system is entirely secure. The transmission of information via
                the internet is not completely secure. Although we will do our
                best to protect your Personal Data and any other information
                that you provide, we cannot guarantee its security and any
                transmission is at your own risk.
              </h2>
              <h2>
                16.3<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Once we receive your
                Personal Data, we will use appropriate security measures to seek
                to prevent unauthorised access.
              </h2>
              <h2>
                16.4<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>In the event that there
                is an interception or unauthorised access to your Personal Data,
                we will not be liable or responsible for any resulting misuse of
                your Personal Data.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  17.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Third Party Links
              </h1>
              <h2>
                17.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Our Website may contain
                links to third party websites. These websites may or may not
                have privacy policies similar to our own. You should check any
                relevant privacy policies or statements before providing your
                Personal Data to any third party. We have no responsibility for
                Personal Data provided to third parties or for the policies or
                practices of third parties. You access any third party websites
                at your own risk.
              </h2>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  18.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Your Right to Lodge a Complaint with a Supervisory Authority
              </h1>
              <h2>
                18.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Without prejudice to
                any other administrative or judicial remedy you might have if
                you have any concerns or complaints about the manner in which
                your Personal Data has been collected, managed or processed by
                us, please contact us.
              </h2>
              <h2>
                18.2<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>We will endeavour to
                resolve any complaint to your satisfaction. However, if you are
                unhappy with our response, you may contact the Privacy
                Commissioner who may investigate your complaint further. Further
                information about the application of the Privacy Act can be
                found at the website of the Privacy Commissioner at
                www.privacy.org.nz.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  19.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Contacting Us
              </h1>
              <h2>
                19.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>If you want to contact
                us with queries, requests, or comments you may have about our
                Privacy Policy or wish to exercise any of your rights under this
                Privacy Policy please get in touch via the following methods:
              </h2>
              <h3>
                19.1.1<span>&nbsp;&nbsp; </span>Contact form available on our
                Website;
              </h3>
              <h3>
                19.1.2<span>&nbsp;&nbsp; </span>Email:
                <span className="MsoHyperlink">
                  <span style={{ fontFamily: "Arial,sans-serif" }}>
                    <a href="mailto:support@grabify.xyz">support@grabify.xyz</a>
                  </span>
                </span>
                or <a href="mailto:legal@grabify.xyz">legal@grabify.xyz</a>.
              </h3>
              <h3>
                19.1.3<span>&nbsp;&nbsp; </span>Postal address: P.O Box 66 Kumeu
                Auckland 0841 New Zealand
              </h3>
              <br />
              <br />
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
