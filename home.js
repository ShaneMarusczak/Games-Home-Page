"use strict";
(() => {
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function setDarkMode() {
		document.getElementsByTagName("html")[0].classList.add("darkBackground");
		document.getElementById("githubicon").classList.add("lightBackground");
		setCookie("darkMode", "Y", 1);

	}

	function removeDarkMode() {
		document.getElementsByTagName("html")[0].classList.remove("darkBackground");
		document.getElementById("githubicon").classList.remove("lightBackground");
		setCookie("darkMode", "N", 1);

	}

	(() => {
		document.getElementById("battleshipWins").innerText = "Battleship Wins: " + Number(getCookie("playerwinsBattleship"));
		document.getElementById("spaceInvadersWins").innerText = "Space Invaders Wins: " + Number(getCookie("playerWinsSpace"));
		if (getCookie("darkMode") === "Y") {
			setDarkMode();
		} else {
			removeDarkMode();
		}
		document.getElementById("darkMode").addEventListener("click", () => {
			if (getCookie("darkMode") === "N") {
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
			sleep(1000).then(() => document.getElementById("githubicon").classList.remove("downBounce"));
		});
	})();
})();
