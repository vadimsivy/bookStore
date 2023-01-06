import {ReactNode} from "react";

interface IProps {
  children?: ReactNode
}

interface IState {
  hasError: boolean
}

export type {
  IProps,
  IState,
}