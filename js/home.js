"use strict";
(() => {
  function setDarkMode() {
    document.getElementsByTagName("html")[0].classList.add("darkBackground");
    document.getElementById("githubicon").classList.add("lightBackground");
    window.setCookie("darkMode", "Y", 1);
  }

  function removeDarkMode() {
    document.getElementsByTagName("html")[0].classList.remove("darkBackground");
    document.getElementById("githubicon").classList.remove("lightBackground");
    window.setCookie("darkMode", "N", 1);
  }

  (() => {
    document.getElementById("battleshipWins").innerText =
      "Battleship Wins: " + Number(window.getCookie("playerwinsBattleship"));
    document.getElementById("spaceInvadersWins").innerText =
      "Space Invaders Wins: " + Number(window.getCookie("playerWinsSpace"));
    document.getElementById("sudokusCompleted").innerText =
      "Sudokus Completed: " +
      Number(window.getCookie("completedSudokuPuzzles"));
    if (window.getCookie("darkMode") === "Y") {
      setDarkMode();
    } else {
      removeDarkMode();
    }
    document.getElementById("darkMode").addEventListener("click", () => {
      if (window.getCookie("darkMode") === "N") {
        setDarkMode();
      } else {
        removeDarkMode();
      }
    });
    document.getElementById("githubicon").addEventListener("mouseover", () => {
      document.getElementById("githubicon").classList.add("upBounce");
      document.getElementById("githubicon").classList.remove("downBounce");
    });
    document.getElementById("githubicon").addEventListener("mouseleave", () => {
      document.getElementById("githubicon").classList.add("downBounce");
      document.getElementById("githubicon").classList.remove("upBounce");
      window
        .sleep(1000)
        .then(() =>
          document.getElementById("githubicon").classList.remove("downBounce")
        );
    });
  })();
})();
