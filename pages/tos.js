import Head from "next/head";
import { Inter } from "@next/font/google";

import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

import { useState, useEffect } from "react";

export default function ToS() {
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
          content="Terms of Service - Grabify IP Logger &amp; URL Shortener"
        />
        <meta
          property="og:title"
          content="Terms of Service - Grabify IP Logger &amp; URL Shortener"
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
          content="Terms of Service - Grabify IP Logger URL Shortener - Log and Track IP addresses"
        />
        <meta property="og:url" content="https://grabify.xyz/faq/tos" />
        <title>Terms of Service - Grabify IP Logger &amp; URL Shortener</title>
        <link rel="canonical" href="https://grabify.xyz/faq/tos" />
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
              <h2 className="title is-2 has-text-white">Terms of Service</h2>
              <h3 className="subtitle is-5 has-text-white-ter">
                Discover Grabify's terms of service so you are in the know on how
                we operate.
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
              <h1>Terms of Service (Terms)</h1>
              <p>Last updated: Aug 21, 2021</p>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  1.
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Definitions and Interpretation
              </h1>
              <h2>
                1.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>In these
                Terms:
              </h2>
              <h3>
                1.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>&quot;We” or “Us” or
                like terms refers to jLynx Limited, the provider of the
                Services;
              </h3>
              <h3>
                1.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>&quot;you&quot;
                refers to the user or viewer of our Website and /or the user of
                the Services;
              </h3>
              <h3>
                1.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>&quot;Content&quot;
                means all information, links to websites or content published on
                any websites, data, text, software, music, sound, photographs,
                graphics, video, messages or other materials;
              </h3>
              <h3>
                1.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>“Privacy Policy”
                means our privacy policy in force from time to time;
              </h3>
              <h3>
                1.1.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>“Services” means the
                services we provide to you as set out in clause 3 and such other
                services provided by us from time to time;
              </h3>
              <h3>
                1.1.6<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>“Website” means our
                website under which we provide the Services;
              </h3>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  2.
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Applicability
              </h1>
              <h2>
                2.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>These Terms
                apply to the provision of Services. By using or requesting
                Services from us you agree to be bound by these Terms.
              </h2>
              <h2>
                2.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>These Terms
                may be amended from time to time with or without notice to you.
                Your continued use of the Website and / or the Services
                following such amendment constitutes acceptance of the terms as
                amended.
              </h2>
              <h2>
                2.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Each of our
                Services may be subject to specific terms, rules or guidelines
                which shall be incorporated by reference into these Terms.
              </h2>
              <h2>
                2.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Our use of
                your personal data is governed by our <b>Privacy Policy</b>. You
                agree to be bound by our <b>Privacy Policy</b> with regard to
                any information that you provide to us.
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
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Service Description
              </h1>
              <h2>
                3.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We provide
                various Services, including the Services set out below which
                contain the features and limitations set out in this clause:
              </h2>
              <h3>
                3.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>
                <b>URL shortener</b>- a function which creates a short form URL
                or web page address from a longer existing URL or web page
                address together with the tracking, in real-time, the clicks, IP
                addresses and referrers on any shortened URL for further
                statistical analysis.
              </h3>
              <h4>
                (a)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>URL
                shortener is not content hosted by us.
              </h4>
              <h4>
                (b)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>There is
                some content which URL shortener will not redirect
              </h4>
              <h4>
                (c)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We
                check the shortened links for prohibited content including
                phishing or adult content, however, we do not guarantee that all
                prohibited content is blocked
              </h4>
              <h4>
                (d)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You can
                share the link to our Privacy Policy and these Terms on your
                media or social channel to ensure that your users or visitors
                are fully aware about the use of data.
              </h4>
              <h3>
                3.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>
                <b>IP-Lookup</b>- allows information to be obtained about the IP
                address available from different databases available publicly
                and published in the Internet.
              </h3>
              <h4>
                (a)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We are not
                responsible for the accuracy of the information in provided with
                IP-Lookup.
              </h4>
              <h3>
                3.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>
                <b>URL Expander</b>- allows to check the URL for redirects
                (hidden URLs to which the link can redirect) and the IP address
                hosting each of the redirecting links.
              </h3>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  4.
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Registration and Account Security
              </h1>
              <h2>
                4.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You agree to
                provide current, accurate and complete information when you
                register to use the Services.
              </h2>
              <h2>
                4.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Your account
                is not transferrable.
              </h2>
              <h2>
                4.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You are
                responsible for maintaining the confidentiality of any logins,
                user IDs, passwords and account, and are fully responsible for
                all activities that occur under your password or account.
              </h2>
              <h2>
                4.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You shall
                immediately notify us of any unauthorized use of your password
                or account or any other breach of security.
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
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Warranties
              </h1>
              <h2>
                5.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You warrant
                and represent that:
              </h2>
              <h3>
                5.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>You are of legal age
                to form a binding contract (are at least 18 years old) and are
                not a person barred from receiving services under the laws of
                any applicable jurisdiction.
              </h3>
              <h3>
                5.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>You will obtain all
                authorisation required by law, including any consent required
                from the visitors of your website and any consent required from
                any person from whom you collect information (including personal
                information) using the Services.
              </h3>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  6.
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                User Conduct
              </h1>
              <h2 style={{ pageBreakAfter: "avoid" }}>
                6.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You agree to
                not use the Services to:
              </h2>
              <h3>
                6.1.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Undertake any
                unlawful purpose or do any act or thing which in any way
                constitutes or encourages conduct that would constitute a
                criminal offence.
              </h3>
              <h3>
                6.1.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Link to, upload,
                post, email, transmit or otherwise make available any Content
                that:
              </h3>
              <h4>
                (a)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Is adult in
                nature, unlawful, harmful, threatening, abusive, harassing,
                tortious, defamatory, vulgar, obscene, libellous, hurtful, which
                is invasive of another’s privacy, hateful, or racially,
                ethnically or otherwise objectionable;
              </h4>
              <h4>
                (b)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Infringes
                any patent, trademark, trade secret, copyright or other
                proprietary rights of any party;
              </h4>
              <h4>
                (c)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Contains software viruses or any other computer code, files or
                programs designed to interrupt, destroy or limit the
                functionality of any computer software or hardware or
                telecommunications equipment;
              </h4>
              <h4>
                (d)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You do not
                have a right to make available under any law or under
                contractual or fiduciary relationships (such as inside
                information, proprietary and confidential information learned or
                disclosed as part of employment relationships or under
                nondisclosure agreements);
              </h4>
              <h4>
                (e)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Constitutes
                unsolicited or unauthorized advertising, promotional materials,
                &quot;junk mail,&quot; &quot;spam,&quot; &quot;chain
                letters,&quot; &quot;pyramid schemes,&quot; or any other form of
                solicitation, except in those areas (such as shopping rooms)
                that are designated for such purpose (please read our complete
                Spam Policy);
              </h4>
              <h4>
                (f)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Interfere with or disrupt the Services or servers or networks
                connected to the Services, or disobey any requirements,
                procedures, policies or regulations of networks connected to the
                Services; or
              </h4>
              <h4>
                (g)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Intentionally or unintentionally violate any applicable local,
                state, national or international law and any regulations having
                the force of law;
              </h4>
              <h3>
                6.1.3<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Impersonate any
                person or entity or falsely state or otherwise misrepresent your
                affiliation with a person or entity;
              </h3>
              <h3>
                6.1.4<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Forge headers or
                otherwise manipulate identifiers in order to disguise the origin
                of any Content transmitted through the Services;
              </h3>
              <h3>
                6.1.5<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Disrupt the normal
                flow of dialogue, cause a screen to &quot;scroll&quot; faster
                than other users of the Services are able to type, or otherwise
                act in a manner that negatively affects other users&quot;
                ability to engage in real time exchanges;
              </h3>
              <h3>
                6.1.6<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Create &quot;redirect
                loops&quot; with other URL Shortener services;
              </h3>
              <h3>
                6.1.7<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Create spam with URL
                Shortener links anywhere, including forums / chat / comments /
                blogs; or
              </h3>
              <h3>
                6.1.8<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>Otherwise use the
                Website and the Services in a manner deemed inappropriate by us.
              </h3>
              <h2>
                6.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You agree to
                keep the information required to access statistics confidential.
              </h2>
              <h2>
                6.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You will not
                collect or store personal information associated with any user
                or other person, including IP address, location and information
                about the device, or location with the Services without
                obtaining their prior consent.
              </h2>
              <h2>
                6.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You
                understand that the technical processing and transmission of the
                Services, including your Content, including URLs shortened with
                the URL Shortener service , may involve (a) transmissions over
                various networks; and (b) changes to conform and adapt to
                technical requirements of connecting networks or devices.
              </h2>
              <h2>
                6.5<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You
                understand that the Services and software embodied within the
                Services may include security components that permit digital
                materials to be protected, and use of these materials is subject
                to usage rules set by us and/or content providers who provide
                content to the Services. You may not attempt to override or
                circumvent any of the usage rules embedded into the Services.
                Any unauthorized reproduction, publication, further distribution
                or public exhibition of the materials provided on the Services,
                in whole or in part, is strictly prohibited.
              </h2>
              <h2>
                6.6<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You
                acknowledge that any information you post or share on the third
                party sites (including social media sites such) may become
                publicly available. You understand and accept that use of the
                Services may involve special risks associated with other persons
                knowing your location. You should only share such information
                with those that you trust. You are solely responsible for the
                consequences of sharing or publishing your location information
                with others and/or making such information publicly available.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  7.
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Intellectual Property
              </h1>
              <h2>
                7.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Copyright in
                the Website and all software, materials, data and information
                relating to the Services vests in us and may not be copied,
                reproduced or distributed by any means or in any manner without
                our prior written consent.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  8.
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Content
              </h1>
              <h2>
                8.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>You are
                solely responsible for all Content that you, or anyone using
                your account, upload, post, email, transmit or otherwise make
                available using the Services.
              </h2>
              <h2>
                8.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We do not
                control any Content posted via the Services and, as such, we do
                not guarantee the accuracy, integrity or quality of such
                Content. You understand that by using the Services, you may be
                exposed to Content that is offensive, indecent or objectionable.
                Under no circumstances will we be liable in any way for any
                Content, including, but not limited to, for any errors or
                omissions in any Content, or for any loss or damage of any kind
                incurred as a result of the use of any Content posted, emailed,
                redirected to, transmitted or otherwise made available via the
                Services.
              </h2>
              <h2>
                8.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We do not
                claim ownership of Content you submit or make available for
                inclusion on <a name="MyCursorPosition"></a>the Services.
                However, with respect to Content you submit or make available
                for inclusion on publicly accessible areas of the Services, you
                grant to us the following world-wide, royalty free and
                non-exclusive license(s), as applicable:
              </h2>
              <h3>
                8.3.1<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>With respect to
                photos, graphics, audio or video you submit or make available ,
                the licence to use, distribute, reproduce, modify, adapt,
                publicly perform and publicly display such Content on the
                Service solely for the purpose for which such Content was
                submitted or made available. This licence exists only for as
                long as you elect to continue to include such Content on the
                Service and will terminate at the time you remove or we remove
                such Content from the Service.
              </h3>
              <h3>
                8.3.2<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>With respect to
                Content other than photos, graphics, audio or video, the
                perpetual, irrevocable and fully sublicensable license to use,
                distribute, reproduce, modify, adapt, publish, translate,
                publicly perform and publicly display such Content (in whole or
                in part) and to incorporate such Content into other works in any
                format or medium now known or later developed.
              </h3>
              <h2>
                8.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                &quot;Publicly accessible&quot; areas of the Services are those
                areas of the Website that are intended by us to be available to
                the general public.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  9.
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Service URLs
              </h1>
              <h2>
                9.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>We reserve
                the right to remove clicks or visitor records and statistics for
                URLs associated with your account if the number of clicks or
                visitor records exceeds the maximum number defined by us in a
                period of time defined by us.
              </h2>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  10.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Third Party Materials and Links
              </h1>
              <h2>
                10.1<span>&nbsp;&nbsp;&nbsp;</span>You understand and agree that
                the Website and the Services may include content, information
                and advertisements provided by third parties as well as links to
                websites provided by third parties (<b>Third Party Content</b>).
              </h2>
              <h2>
                10.2<span>&nbsp;&nbsp;&nbsp;</span>We are not responsible for
                the content or suitability of Third Party Content and we do not
                endorse, recommend or accept responsibility for Third Party
                Content.
              </h2>
              <h2>
                10.3<span>&nbsp;&nbsp;&nbsp;</span>You access any third party
                websites at your own risk.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  11.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Indemnity
              </h1>
              <h2>
                11.1<span>&nbsp;&nbsp;&nbsp;</span>You agree to indemnify and
                hold us, and our subsidiaries, affiliates, officers, agents,
                co-branders or other partners, and employees, harmless from any
                claim or demand, including reasonable attorneys’ fees, made by
                any third party due to or arising out of:
              </h2>
              <h3>
                11.1.1<span>&nbsp;&nbsp; </span>Content you submit,
              </h3>
              <h3>
                11.1.2<span>&nbsp;&nbsp; </span>Your use of the Services;
              </h3>
              <h3>
                11.1.3<span>&nbsp;&nbsp; </span>Your failure to comply with
                these Terms or the Privacy Policy;
              </h3>
              <h3>
                11.1.4<span>&nbsp;&nbsp; </span>Your breach of any data
                protection law and regulation, or
              </h3>
              <h3>
                11.1.5<span>&nbsp;&nbsp; </span>Your violation of any rights of
                another person.
              </h3>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  12.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                No resale of Services
              </h1>
              <h2>
                12.1<span>&nbsp;&nbsp;&nbsp;</span>You agree not to reproduce,
                duplicate, copy, sell, trade, resell or exploit for any
                commercial purposes, any portion of the Services (including your
                ID), use of the Services, or access to the Services.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  13.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Modification of Services
              </h1>
              <h2>
                13.1<span>&nbsp;&nbsp;&nbsp;</span>We reserve the right at any
                time and from time to time to modify or discontinue, temporarily
                or permanently, the Services (or any part thereof) with or
                without notice. You agree that we shall not be liable to you or
                to any third party for any modification, suspension or
                discontinuance of the Services.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  14.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Termination
              </h1>
              <h2>
                14.1<span>&nbsp;&nbsp;&nbsp;</span>We may without prior notice,
                immediately terminate your account and use of the Services for
                any reason, including but not be limited to,
              </h2>
              <h3>
                14.1.1<span>&nbsp;&nbsp; </span>Breaches or violations of these
                Terms or other incorporated agreements or guidelines;
              </h3>
              <h3>
                14.1.2<span>&nbsp;&nbsp; </span>Requests by law enforcement or
                other government agencies;
              </h3>
              <h3>
                14.1.3<span>&nbsp;&nbsp; </span>Discontinuance or material
                modification to the Services (or any part thereof),
              </h3>
              <h3>
                14.1.4<span>&nbsp;&nbsp; </span>Unexpected technical or security
                issues or problems, and
              </h3>
              <h3>
                14.1.5<span>&nbsp;&nbsp; </span>Extended periods of inactivity.
              </h3>
              <h2>
                14.2<span>&nbsp;&nbsp;&nbsp;</span>Termination of your account
                includes:
              </h2>
              <h3>
                14.2.1<span>&nbsp;&nbsp; </span>Removal of access to all
                offerings within the Services, including but not limited to our
                technical support and feedback messaging system,
              </h3>
              <h3>
                14.2.2<span>&nbsp;&nbsp; </span>Deletion of your password and
                all related information, files and content associated with or
                inside your account (or any part thereof); and
              </h3>
              <h3>
                14.2.3<span>&nbsp;&nbsp; </span>Barring further use of the
                Services.
              </h3>
              <h2>
                14.3<span>&nbsp;&nbsp;&nbsp;</span>We shall not be liable to you
                or any third-party for any termination of your account or the
                Services.
              </h2>
              <h2>
                14.4<span>&nbsp;&nbsp;&nbsp;</span>We will terminate your
                account following your written request.
              </h2>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  15.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Disclaimer of Warranties
              </h1>
              <h2>
                15.1<span>&nbsp;&nbsp;&nbsp;</span>You expressly understand and
                agree that:
              </h2>
              <h3>
                15.1.1<span>&nbsp;&nbsp; </span>Your use of the Services is at
                your sole risk,
              </h3>
              <h3>
                15.1.2<span>&nbsp;&nbsp; </span>The Services are provided on an
                &quot;as is&quot; and &quot;as available&quot; basis.
              </h3>
              <h3>
                15.1.3<span>&nbsp;&nbsp; </span>We expressly disclaim all
                warranties, conditions or assurances of any kind, whether
                express or implied, including, but not limited to the implied
                warranties of merchantability, fitness for a particular purpose.
              </h3>
              <h3>
                15.1.4<span>&nbsp;&nbsp; </span>Without limiting clause 15.1.3
                we make no warranty that
              </h3>
              <h4>
                (a)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>The Services
                will meet your expectations or requirements,
              </h4>
              <h4>
                (b)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> The
                Services will be uninterrupted, timely, secure, or error-free,
              </h4>
              <h4>
                (c)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>The
                results that may be obtained from the use of the Services will
                be accurate or reliable,
              </h4>
              <h4>
                (d)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>The quality,
                accuracy, reliability or effectiveness of any information or
                Content obtained by you through the Services, and
              </h4>
              <h4>
                (e)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Any errors
                in the software will be corrected.
              </h4>
              <h3>
                15.1.5<span>&nbsp;&nbsp; </span>Any material downloaded or
                otherwise obtained through the use of the Services is done at
                your own discretion and risk and that you will be solely
                responsible for any damage to your computer system or loss of
                data that results from the download of any such material.
              </h3>
              <h3>
                15.1.6<span>&nbsp;&nbsp; </span>No advice or information,
                whether oral or written, obtained by you from us or through or
                from the Services shall create any warranty not expressly stated
                in these Terms.
              </h3>
              <h1
                style={{
                  marginLeft: 0,
                  textIndent: 0,
                  pageBreakAfter: "avoid",
                }}
              >
                <span style={{ fontWeight: "normal" }}>
                  16.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Limitation of Liability
              </h1>
              <h2>
                16.1<span>&nbsp;&nbsp;&nbsp;</span>You expressly understand and
                agree that we shall not be liable to you for any direct,
                indirect, incidental, special, consequential or exemplary
                damages, including but not limited to, damages for loss of
                profits, goodwill, use, data or other intangible losses (even if
                we have been advised of the possibility of such damages),
                resulting from the use of the Website or the use of the
                Services.
              </h2>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  17.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                General
              </h1>
              <h2>
                17.1<span>&nbsp;&nbsp;&nbsp;</span>We do not waive any right,
                power or remedy if we fail to exercise or delay in exercising
                the right, power or remedy. A single or partial exercise of a
                right, power or remedy does not prevent another or further
                exercise of that or another right, power or remedy.
              </h2>
              <h2>
                17.2<span>&nbsp;&nbsp;&nbsp;</span>These Terms
                <span lang="EN-US">
                  constitute the entire agreement between us and supersede all
                  previous agreements, understandings and negotiations (whether
                  written oral or both) in relation to the Services.
                </span>
              </h2>
              <h2>
                17.3<span>&nbsp;&nbsp;&nbsp;</span>You agree to execute such
                further documents and do all acts, matters or things reasonably
                required to give effect to the provisions and intent of these
                Terms.
              </h2>
              <h2>
                17.4<span>&nbsp;&nbsp;&nbsp;</span>If any of these Terms is or
                becomes invalid, void, illegal or unenforceable, to the extent
                permitted by law, the validity, existence, legality and
                enforceability of the remaining Terms will not be affected,
                prejudiced or impaired.
              </h2>
              <h2>
                17.5<span>&nbsp;&nbsp;&nbsp;</span>No amendment of these Terms
                is effective without our written agreement.
              </h2>
              <h2>
                17.6<span>&nbsp;&nbsp;&nbsp;</span>You must not assign, novate
                or otherwise transfer any of your rights or obligations in
                connection with the Services or under these Terms without our
                prior written consent.
              </h2>
              <h2>
                17.7<span>&nbsp;&nbsp;&nbsp;</span>The provision of the Services
                and these Terms are governed by and construed in accordance with
                the laws of New Zealand and you submit to the non exclusive
                jurisdiction of the New Zealand Courts.
              </h2>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  18.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Contact Information
              </h1>
              <h2>
                18.1<span>&nbsp;&nbsp;&nbsp;</span>If you have any questions
                regarding any of these Terms please contact us using the contact
                form available on the Website or email
                <a href="mailto:support@grabify.xyz">support@grabify.xyz</a>.
              </h2>
              <h1 style={{ marginLeft: 0, textIndent: 0 }}>
                <span style={{ fontWeight: "normal" }}>
                  19.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
                Violations
              </h1>
              <h2>
                19.1<span>&nbsp;&nbsp;&nbsp;</span>Please report any violations
                of these Terms please contact us using the contact form
                available on the Website or email
                <a href="mailto:abuse@grabify.xyz">abuse@grabify.xyz</a>.
              </h2>
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
