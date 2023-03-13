var db = document.getElementById("delete_button");
var dc = document.getElementById("delete_cancel");
var dc2 = document.getElementById("delete_cancel2");

db.addEventListener("click", (e) => {
  document.getElementById("delete_confirm").classList.add("is-active");
});

dc.addEventListener("click", (e) => {
  document.getElementById("delete_confirm").classList.remove("is-active");
});

dc2.addEventListener("click", (e) => {
  document.getElementById("delete_confirm").classList.remove("is-active");
});
