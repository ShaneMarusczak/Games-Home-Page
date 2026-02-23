"use strict";
(() => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  (() => {
    document.querySelectorAll(".linkBox").forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.classList.add("boxShadow");
      });
    });

    document.querySelectorAll(".linkBox").forEach((item) => {
      item.addEventListener("mouseleave", () => {
        item.classList.remove("boxShadow");
      });
    });

    document.getElementById("githubicon").addEventListener("mouseover", () => {
      document.getElementById("githubicon").classList.add("upBounce");
      document.getElementById("githubicon").classList.remove("downBounce");
    });
    document.getElementById("githubicon").addEventListener("mouseleave", () => {
      document.getElementById("githubicon").classList.add("downBounce");
      document.getElementById("githubicon").classList.remove("upBounce");
      sleep(1000)
        .then(() =>
          document.getElementById("githubicon").classList.remove("downBounce")
        );
    });
  })();
})();
