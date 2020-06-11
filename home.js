"use strict";
(() => {
	let inDarkMode = false;

	const darkModeToggle = () => {
		if (inDarkMode) {
			document.getElementsByTagName("html")[0].classList.remove("darkBackground");
			document.getElementById("githubicon").classList.remove("lightBackground");
		} else {
			document.getElementsByTagName("html")[0].classList.add("darkBackground");
			document.getElementById("githubicon").classList.add("lightBackground");
		}
		inDarkMode = !inDarkMode;
	};

	(() => {
		document.getElementById("darkMode").addEventListener("click", darkModeToggle);
	})();
})();
