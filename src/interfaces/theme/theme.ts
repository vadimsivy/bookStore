import {ReactNode} from "react";

interface IThemeContext {
  theme: string
  handleTheme: () => void
}

interface IThemeProvider {
  children: ReactNode
}

export type {
  IThemeContext,
  IThemeProvider,
}