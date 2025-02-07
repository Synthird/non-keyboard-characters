const htmlPage = document.getElementsByTagName("html")[0];
const checkbox = document.getElementById("toggle-theme");
const tip = document.getElementById("tip");

const darkModeBorderColour = tip.style.borderColor;
const lightModeBorderColour = "rgb(133, 133, 133)";

function setTheme(themeName, borderColour) {
	document.getElementsByTagName("html")[0].style.colorScheme = themeName;
	tip.style.borderColor = borderColour;
}

checkbox.addEventListener("click", () => {
	if (checkbox.checked) {
		setTheme("dark", darkModeBorderColour);
	} else {
		setTheme("light", lightModeBorderColour);
	}
});