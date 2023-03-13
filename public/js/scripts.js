document.addEventListener("DOMContentLoaded", () => {
  const o = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  o.length > 0 &&
    o.forEach((o) => {
      o.addEventListener("click", () => {
        const t = o.dataset.target,
          e = document.getElementById(t);
        o.classList.toggle("is-active"), e.classList.toggle("is-active");
      });
    });
});
rootEl = document.documentElement;
function openModal(o) {
  var t = document.getElementById(o);
  rootEl.classList.add("is-clipped"), t.classList.add("is-active");
}
function closeModals() {
  rootEl.classList.remove("is-clipped"),
    $(".modal").removeClass("is-active"),
    $(".dropdown").removeClass("is-active");
}
function validateSubmit(o, t, e = !1) {
  event.preventDefault();
  const l = document.querySelector(t);
  return (
    !!l.reportValidity() &&
    ($(o).html("Loading...").prop("disabled", !0),
    e ? grecaptcha.execute() : l.submit(),
    !0)
  );
}
function formatNumber(o) {
  (x = (o += "").split(".")),
    (x1 = x[0]),
    (x2 = x.length > 1 ? "." + x[1] : "");
  for (var t = /(\d+)(\d{3})/; t.test(x1); ) x1 = x1.replace(t, "$1,$2");
  return x1 + x2;
}
document.addEventListener("keydown", function (o) {
  27 === (o || window.event).keyCode && closeModals();
}),
  $(document).on("click", '[data-toggle="modal"]', function (o) {
    openModal($(this).attr("data-target"));
  }),
  $(document).on(
    "click",
    ".modal-background, .modal-close, .modal-card-head .delete, .close-btn-modal, .modal-card-foot .button-close",
    function (o) {
      closeModals();
    }
  ),
  $(document).on("click", ".dropdown:not(.is-hoverable)", function (o) {
    o.stopPropagation(),
      $(this).hasClass("is-active")
        ? $(".dropdown").removeClass("is-active")
        : ($(".dropdown").removeClass("is-active"),
          $(this).addClass("is-active"));
  }),
  $(function () {
    $(".is-top-scrollbar").scroll(function () {
      $(".is-bottom-scrollbar").scrollLeft($(".is-top-scrollbar").scrollLeft());
    }),
      $(".is-bottom-scrollbar").scroll(function () {
        $(".is-top-scrollbar").scrollLeft(
          $(".is-bottom-scrollbar").scrollLeft()
        );
      });
  }),
  $(window).on("load", function (o) {
    $(".is-top-scrollbar div").width($(".is-bottom-scrollbar table").width());
  });
