import {useContext} from "react";
import {ThemeContext} from "../components/context/ThemeContext";

const useTheme = () => {
  return useContext(ThemeContext)
}
export default useTheme