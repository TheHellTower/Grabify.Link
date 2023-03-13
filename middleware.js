import { NextResponse } from "next/server";

export async function middleware(req) {
  //
  const response = NextResponse.next({
    req,
  });
  response.headers.set("X-Powered-By", "TheHellTower");
  if (
    req.nextUrl.pathname.startsWith("/profile") ||
    req.nextUrl.pathname.startsWith("/logs") ||
    (req.nextUrl.pathname.startsWith("/api/user") &&
      !req.nextUrl.pathname.includes("logs"))
  ) {
    if (req.cookies.get("next-auth.session-token") === undefined) {
      response.headers.set("Refresh", `0; url=/auth/login`);
    }
  }

  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (req.cookies.get("next-auth.session-token") !== undefined) {
      response.headers.set("Refresh", `0; url=/profile`);
    }
  }

  return response;
}
