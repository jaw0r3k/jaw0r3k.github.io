
document.getElementById("style").onclick = () => {
    theme = window.localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
    if(theme === "dark"){   
        window.localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark')
    } else {
        window.localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark')
    }
}
