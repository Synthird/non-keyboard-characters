const htmlPage = document.querySelector(":root");
const checkbox = document.getElementById("toggle-theme");

function setTheme(themeName) {
	htmlPage.style.colorScheme = themeName;
}

checkbox.addEventListener("click", () => {
	if (checkbox.checked) {
		setTheme("dark");
	} else {
		setTheme("light");
	}
});