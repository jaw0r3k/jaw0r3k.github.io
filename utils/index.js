theme = window.localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
if(theme === "dark"){   
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
