const htmlPage = document.getElementsByTagName("html")[0];
const checkbox = document.getElementById("toggle-theme");
const tip = document.getElementById("tip");

const darkModeBorderColour = tip.style.borderColor;
const lightModeBorderColour = "rgb(133, 133, 133)";

checkbox.addEventListener("click", () => {
	if (checkbox.checked) {
		document.getElementsByTagName("html")[0].style.colorScheme = "dark";
		tip.style.borderColor = darkModeBorderColour;
	} else {
		document.getElementsByTagName("html")[0].style.colorScheme = "light";
		tip.style.borderColor = lightModeBorderColour;
	}
});