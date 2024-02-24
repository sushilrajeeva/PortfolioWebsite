
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/index'
import './index.css'

function App() {

  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
      
  )
}

export default App
