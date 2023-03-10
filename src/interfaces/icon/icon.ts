import {ReactNode} from "react";

interface IIcon {
  name: string
  className?: string
  strokeWidth?: number
  onClick?: () => void
  width?: number
  height?: number
  fill?: string
  stroke?: string
}
interface IIcons {
  [key: string]: ReactNode
}
export type {
  IIcon,
  IIcons,
}