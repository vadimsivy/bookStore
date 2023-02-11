import Layout from "../components/layout/Layout"
import GoBack from "../components/goBack/GoBack"
import Footer from "../components/footer/Footer"

import styles from "../styles/pages/authorizationPage/Authorization.module.scss"
import styles2 from "../styles/pages/profilePage/profile.module.scss"
import useUser from "../hooks/useUser"
import useAppSelector from "../hooks/useAppSelector"
import {useState} from "react"
import {setUser} from "../store/slices/booksUser"
import useAppDispatch from "../hooks/useAppDispatch"

const Profile = () => {
  const {id} = useUser()
  const dispatch = useAppDispatch()

  const users = useAppSelector((state) => state.booksUsersReducer.users)

  const user = users.find((user) => user.id === id)

  const [username, setUsername] = useState(user?.username)
  const [email, setEmail] = useState(user?.email)
  const [password, setPassword] = useState(user?.password)

  const handleSave = () => {
    dispatch(
      //@ts-ignore
      setUser({...user, username, email, password})
    )
  }

  return (
    <Layout title={'Profile'}>
      <GoBack/>
      <div className={styles2.list}>
        <h1>Account</h1>
        <h2>Profile</h2>
      </div>
      <div className={styles2.profile__NameEmail}>
        <label className={styles.form__subscribe__label}>Name
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type={'text'}
            placeholder={'Your name'}
            autoCorrect={'off'}
            className={styles.form__subscribe__label__input}
          />
        </label>
        <label className={styles.form__subscribe__label}>Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={'email'}
            placeholder={'Your email'}
            autoCorrect={'off'}
            className={styles.form__subscribe__label__input}
          />
        </label>
      </div>
      <div className={styles2.profile__boxPassword}>
        <div className={styles2.profile__newPassword}>
          <label className={styles.form__subscribe__label}>Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={'password'}
            placeholder={'Your password'}
            autoCorrect={'off'}
            className={styles.form__subscribe__label__input}
          />
        </label>
          <label className={styles.form__subscribe__label}>New Password
            <input
              type={'password'}
              placeholder={'New Password'}
              autoCorrect={'off'}
              className={styles.form__subscribe__label__input}
            />
          </label>
        </div>
        <div className={styles2.profile__confirmPassword}>
          <label className={styles.form__subscribe__label}>Confirm New Password
            <input
              type={'password'}
              placeholder={'Confirm New Password'}
              autoCorrect={'off'}
              className={styles.form__subscribe__label__input}
            />
          </label>
        </div>
      </div>
      <hr/>
      <div className={styles2.boxButtons}>
        <button onClick={handleSave} className={styles2.container__saveChanges}>Save Changes</button>
        <button className={styles2.container__cancel}>Cancel</button>
      </div>
      <Footer/>
    </Layout>

  )
}

export default Profile