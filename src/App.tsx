import {BrowserRouter, Routes, Route} from "react-router-dom"

import {ThemeProvider} from "./components/context/ThemeContext";
import {Provider} from "react-redux"
import {store} from "./store"

import Home from './pages/Home'
import Page404 from './pages/Page404'
import Header from "./components/header/Header"
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"

import "./styles/reset.scss"
import "./styles/global.scss"

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
        <Provider store={store}>
          <Header/>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'*'} element={<Page404/>}/>
          </Routes>
        </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
