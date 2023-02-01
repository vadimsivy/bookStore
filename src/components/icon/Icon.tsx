import {IIcon} from "../../interfaces/icon/icon"
import icons from "../../variables/components/icon/index"

const Icon = ({ name, className = '', strokeWidth = 1, onClick, width = 24, height = 24, fill = "none", stroke = "currentColor" }: IIcon) => {
  const icon = icons[name]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      {icon}
    </svg>
  )
}

export default Icon