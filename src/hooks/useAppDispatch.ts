import {useDispatch} from "react-redux"
import {store} from "../store"

type AppDispatch = typeof store.dispatch

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch

export type {
  AppDispatch
}