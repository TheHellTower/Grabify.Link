import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function Nav() {
  const handleVerification = async () => {
    //
  };
  const { status } = useSession();

  const logoutHandler = () => {
    signOut();
  };

  return (
    <nav
      className="navbar is-fixed-top is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <img src="https://grabify.link/images/grabify.svg" width="112" height="28" fetchpriority="high" alt="Grabify IP Logger"/>
        </Link>
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
            {status === "authenticated" && (
              <Link className="navbar-item" href="/logs">
                My Logs
              </Link>
            )}
            {status === "authenticated" && (
              <Link className="navbar-item" href="/profile">
                My Profile
              </Link>
            )}
            <Link className="navbar-item" href="/blog">
              Blog
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">Tools</p>
              <div className="navbar-dropdown">
                <Link className="navbar-item" href="/ip-lookup">
                  IP Lookup
                </Link>
                <Link className="navbar-item" href="/image">
                  Invisible Image Logger
                </Link>
                <Link className="navbar-item" href="/expander">
                  Link Expander
                </Link>
                <Link className="navbar-item" href="/speedtest">
                  Speed Test
                </Link>
                <Link className="navbar-item" href="/mac-lookup">
                  MAC Address Lookup
                </Link>
                <Link className="navbar-item" href="/hide">
                  VPN
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {status === "unauthenticated" && (
                  <Link className="button is-primary" href="/auth/register">
                    <strong>Register</strong>
                  </Link>
                )}
                {status === "unauthenticated" && (
                  <Link className="button is-light" href="/auth/login">
                    Log in
                  </Link>
                )}
                {status === "authenticated" && (
                  <button className="button is-light" onClick={logoutHandler}>
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
