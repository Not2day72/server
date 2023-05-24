import { useState } from 'react'
import Clock from './Clock';
import './App.css'

const reactLogo = "react.svg"
const viteLogo = "vite.svg"
const djangoLogo = "django.svg"

const reactLogoPath = `/frontend/static/${reactLogo}`
const viteLogoPath = `/frontend/static/${viteLogo}`
const djangoLogoPath = `/frontend/static/${djangoLogo}`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogoPath} className="logo" alt="Vite logo"  />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogoPath} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.djangoproject.com/download/" target="_blank">
          <img src={djangoLogoPath} className="logo django" alt="Django logo" />
        </a>
      </div>
      <div />
      <h1>Vite + React + Django = ❤️</h1>
      <Clock />
      <p className="read-the-docs">
        Click on the Vite, React and Django logos to learn more
      </p>
    </>
  )
}

export default App
