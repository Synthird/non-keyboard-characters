const htmlPage = document.getElementsByTagName("html")[0];
const checkbox = document.getElementById("toggle-theme");

checkbox.addEventListener("click", () => {
	if (checkbox.checked) {
		document.getElementsByTagName("html")[0].style.colorScheme = "dark";
	} else {
		document.getElementsByTagName("html")[0].style.colorScheme = "light";
	}
});