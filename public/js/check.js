if (window.location.hash) {
  var hash = window.location.hash.substring(1);
  "ShowBlocker" === hash &&
    ((document.getElementById("ab").style.display = "block"),
    document.body.classList.add("stop-scrolling"));
}
(void 0 !== window.canRunAds && $(".myTestAd").filter(":visible").length) ||
  ("1" !== getCookie("ckstp") &&
    ((document.getElementById("ab").style.display = "block"),
    document.body.classList.add("stop-scrolling")));
for (
  var anchors = document.getElementsByClassName("css12"), i = 0;
  i < anchors.length;
  i++
) {
  var anchor = anchors[i];
  anchor.onclick = function () {
    setCookie("ckstp", "1", 100),
      (document.getElementById("ab").style.display = "none"),
      document.body.classList.remove("stop-scrolling");
  };
}
function setCookie(e, t, o) {
  var n = "";
  if (o) {
    var i = new Date();
    i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3),
      (n = "; expires=" + i.toUTCString());
  }
  document.cookie = e + "=" + (t || "") + n + "; path=/";
}
function getCookie(e) {
  for (
    var t = e + "=", o = document.cookie.split(";"), n = 0;
    n < o.length;
    n++
  ) {
    for (var i = o[n]; " " == i.charAt(0); ) i = i.substring(1, i.length);
    if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
  }
  return null;
}
