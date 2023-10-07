export function getCurrentTheme() {
    const theme = localStorage.getItem('theme')
    return theme || 'light'
}

export function setCurrentTheme(theme) {
    localStorage.setItem('theme', theme)
}