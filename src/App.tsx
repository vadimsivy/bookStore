import {BrowserRouter, Routes, Route} from "react-router-dom"

import {ThemeProvider} from "./components/context/ThemeContext"

import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {persistedStore, store} from "./store"

import Home from './pages/Home'
import Page404 from './pages/Page404'
import Header from "./components/header/Header"
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"

import "./styles/reset.scss"
import "./styles/global.scss"

import SearchPage from "./pages/SearchPage"
import Favorites from "./pages/Favorites"
import BookDescription from "./pages/BookDescription"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={store}>
            <PersistGate persistor={persistedStore}>
              <Header/>
              <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'*'} element={<Page404/>}/>
                <Route path={'/search/:input/:page'} element={<SearchPage/>}/>
                <Route path={'/favorites'} element={<Favorites/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/book-description/:id'} element={<BookDescription/>}/>
              </Routes>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
