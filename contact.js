/* Obfuscated contact link: the address is never written in the page HTML.
   It is rebuilt only when someone clicks a [data-mail] link. */
(function () {
  var enc = "bW9jLmFscGVub2lAZW0=";
  function addr() { return atob(enc).split("").reverse().join(""); }
  document.querySelectorAll("[data-mail]").forEach(function (el) {
    el.setAttribute("href", "#");
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var a = addr(), subject = el.getAttribute("data-subject");
      if (!el.nextElementSibling || !el.nextElementSibling.classList.contains("revealed")) {
        var s = document.createElement("span");
        s.className = "revealed"; s.textContent = " " + a;
        el.parentNode.insertBefore(s, el.nextSibling);
      }
      window.location.href = "mailto:" + a + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    });
  });
})();
