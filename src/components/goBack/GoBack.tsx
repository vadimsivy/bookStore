import {useNavigate} from "react-router-dom"

import Icon from "../icon/Icon"

import styles from "./GoBack.module.scss"

const GoBack = () => {
  const navigate = useNavigate()

  const handleBackClick = () => navigate(-1)



  return (
    <button className={styles.button} onClick={handleBackClick}>
      <Icon
        name={'arrowLeft'}
        width={48}
        height={48}
      />
    </button>
  )
}

export default GoBack