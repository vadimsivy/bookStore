import {Tab, TabList, TabPanel, Tabs} from "react-tabs"
import {FormEvent, useEffect, useState} from "react"

import Layout from "../components/layout/Layout"

import styles from "../styles/pages/authorizationPage/Authorization.module.scss"
import Footer from "../components/footer/Footer"
import useAppDispatch from "../hooks/useAppDispatch"
import useAppSelector from "../hooks/useAppSelector"
import {addUser, editUser} from "../store/slices/booksUsers"
import {useNavigate} from "react-router-dom"
import {setUser} from "../store/slices/booksUser";

const Authorization = () => {

  const dispatch = useAppDispatch()

  const users = useAppSelector(state => state.booksUsersReducer.users)

  const [warning,setWarning] = useState('')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const [username,setUsername] = useState('')
  const [signUpEmail,setSignUpEmail] = useState('')
  const [signUpPassword,setSignUpPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [successRegister, setSuccessRegister] = useState(false)
  const navigate = useNavigate()

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()

    const user = users.find(
      (user) => user.email === email
    )

    if (!user) {
      setWarning('User not found')
      return
    }

    if (user.password !== password) {
      setWarning('Incorrect password')
      return
    }

    navigate('/')

    dispatch(
      setUser({
        ...user,
        loggedIn: true,
      })
    )

  }

  const handleSubmitFormSignUp = (e: FormEvent) => {
    e.preventDefault()

    const user = users.find(
      (user) => user.email === email
    )

    if (user) {
      setWarning('There is already a user with this email')
      return
    }

    if (signUpPassword !== confirmPassword) {
      setWarning('Passwords must be the same')
      return
    }

    dispatch(
      addUser({
        username,
        password,
        email,
      })
    )

    setWarning('Success register')
    setSuccessRegister(true)
  }

  useEffect(() => {
    setWarning('')
  },[email,password,username,signUpEmail,signUpPassword,confirmPassword])

  return (
    <Layout title={'Authorization'}>
         <Tabs className={styles.wrapper}>
          <TabList className={styles.container}>
            <Tab className={styles.container__tab}>Sign In</Tab>
            <Tab className={styles.container__tab}>Sign Up</Tab>
          </TabList>


            {Boolean(warning) && <p>{warning}</p>}
          <TabPanel className={styles.container__desc}>
            <label className={styles.form__subscribe__label}>
              Email

              <input
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                type={'email'}
                placeholder={'Your email'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>

            <label className={styles.form__subscribe__label}>Password
              <input
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                type={'password'}
                placeholder={'Your password'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <button>Forgot password ?</button>
            <button onClick={handleSubmitForm} className={styles.container__signIn}>Sign In</button>
          </TabPanel>
          <TabPanel className={styles.container__desc}>



            <label className={styles.form__subscribe__label}>Name
              <input
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                type={'text'}
                placeholder={'Your name'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <label className={styles.form__subscribe__label}>Email
              <input
                value={signUpEmail}
                onChange={(e) => {setSignUpEmail(e.target.value)}}
                type={'email'}
                placeholder={'Your email'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <label className={styles.form__subscribe__label}>Password
              <input
                value={signUpPassword}
                onChange={(e) => {setSignUpPassword(e.target.value)}}
                type={'password'}
                placeholder={'Your password'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <label className={styles.form__subscribe__label}>Confirm password
              <input
                value={confirmPassword}
                onChange={(e) => {setConfirmPassword(e.target.value)}}
                type={'password'}
                placeholder={'Confirm your password'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <button onClick={handleSubmitFormSignUp} className={styles.container__signIn}>Sign Up</button>
          </TabPanel>
        </Tabs>
      <Footer/>
    </Layout>
  )
}

export default Authorization