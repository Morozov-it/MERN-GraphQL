type Theme = "light" | "dark"

const stylesheets = {
  light: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.min.css",
  dark: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.dark.min.css"
}

const createStylesheetLink = (): HTMLLinkElement => {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.id = "antd-stylesheet"
  document.head.appendChild(link)
  return link
}

const getStylesheetLink = (): HTMLLinkElement =>
  document.head.querySelector("#antd-stylesheet") || createStylesheetLink()

const systemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"

export const getTheme = () => (localStorage.getItem("theme") as Theme) || systemTheme()

export const setTheme = (t: Theme) => {
  localStorage.setItem("theme", t)
  getStylesheetLink().href = stylesheets[t]
}

export const toggleTheme = () => setTheme(getTheme() === "dark" ? "light" : "dark")
