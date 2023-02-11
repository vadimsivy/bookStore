import useAppDispatch from "./useAppDispatch"
import useAppSelector from "./useAppSelector"


import {IUser, logout} from "../store/slices/booksUser"

interface IUseSession extends IUser {
  logout: () => void

}

const useUser = (): IUseSession => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.booksUserReducer)


  return {
    ...user,
    logout: () => dispatch(logout())
  }
}

export default useUser