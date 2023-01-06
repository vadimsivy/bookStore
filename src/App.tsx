import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Header from "./components/header/Header";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import "./styles/reset.scss"
import "./styles/global.scss"
const App = () => {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
