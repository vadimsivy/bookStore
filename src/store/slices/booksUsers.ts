import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface IUser {
  id: number
  username: string
  password: string
  email: string
}

interface IUserLoggedIn extends IUser{
  loggedIn: boolean
}

interface INewUser {
  username: string
  password: string
  email: string
}

interface IBooksInitialState   {
  users: IUser[]
}

const initialState:IBooksInitialState = {
  users: [],

}

const booksUsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addUser: (state: IBooksInitialState, action: PayloadAction<INewUser>) => {
      state.users = [
        ...state.users,
        {id: state.users.length + 1, ...action.payload},
      ]
    },
    editUser: (state: IBooksInitialState, action: PayloadAction<IUserLoggedIn>) => {
      const users = state.users.filter((user) => user.id !== action.payload.id)

      state.users = [
        ...users,
        action.payload,
      ]
    }
  },
})

export const {addUser, editUser} = booksUsersSlice.actions

export default booksUsersSlice.reducer