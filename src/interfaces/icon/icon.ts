import {ReactNode} from "react";

interface IIcon {
  name: string
  className?: string
  strokeWidth?: number
  onClick?: () => void
}
interface IIcons {
  [key: string]: ReactNode
}
export type {
  IIcon,
  IIcons,
}