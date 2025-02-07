const htmlPage = document.getElementsByTagName("html")[0];
const checkbox = document.getElementById("toggle-theme");
const tip = document.getElementById("tip");

function setTheme(themeName) {
	document.getElementsByTagName("html")[0].style.colorScheme = themeName;
}

checkbox.addEventListener("click", () => {
	if (checkbox.checked) {
		setTheme("dark");
	} else {
		setTheme("light");
	}
});