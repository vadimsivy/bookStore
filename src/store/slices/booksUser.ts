import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface IUser {
  id: number
  username: string
  email: string
  loggedIn: boolean
}





const initialState: IUser = {
  id: 0,
  username: '',
  email: '',
  loggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IUser, action: PayloadAction<IUser>) => {
      return {
        ...state,
        ...action.payload
      }
    },
    logout: (state: IUser) => {
      state.id = 0
      state.username = ''
      state.email = ''
      state.loggedIn = false
    },
  },
})

export default userSlice.reducer
export const {setUser, logout} = userSlice.actions