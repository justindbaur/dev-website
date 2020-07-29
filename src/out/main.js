var themeSwitcher = document.querySelector("#themeSwitcher");
themeSwitcher.addEventListener("click", toggleTheme);
startup();
function startup() {
    var themeKey = "theme";
    var curTheme = localStorage.getItem(themeKey);
    if (curTheme == "light") {
        console.log("Theme is light, ew!");
        document.body.classList.replace("theme-dark", "theme-light");
    }
    else if (curTheme == "dark") {
        console.log("Theme is dark, right on!");
        document.body.classList.add("theme-dark", "theme-dark");
    }
    else {
        console.log("Oh, it's your first time here!");
        localStorage.setItem(themeKey, "dark");
    }
}
function toggleTheme() {
    console.log("Hello from toggleTheme");
}
//# sourceMappingURL=main.js.map