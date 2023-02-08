import {Tab, TabList, TabPanel, Tabs} from "react-tabs"

import Layout from "../components/layout/Layout"

import styles from "../styles/pages/authorizationPage/Authorization.module.scss"
import Footer from "../components/footer/Footer"
import {useState} from "react";

const Authorization = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')
  const [confirm,setConfirm] = useState('')

  return (
    <Layout title={'Authorization'}>
         <Tabs className={styles.wrapper}>
          <TabList className={styles.container}>
            <Tab className={styles.container__tab}>Sign In</Tab>
            <Tab className={styles.container__tab}>Sign Up</Tab>
          </TabList>


          <TabPanel className={styles.container__desc}>
            <label className={styles.form__subscribe__label}>
              Email

              <input
                type={'email'}
                placeholder={'Your email'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>

            <label className={styles.form__subscribe__label}>Password
              <input
                type={'password'}
                placeholder={'Your password'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <button>Forgot password ?</button>
            <button className={styles.container__signIn}>Sign In</button>
          </TabPanel>
          <TabPanel className={styles.container__desc}>



            <label className={styles.form__subscribe__label}>Name
              <input
                type={'text'}
                placeholder={'Your name'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <label className={styles.form__subscribe__label}>Email
              <input
                type={'email'}
                placeholder={'Your email'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <label className={styles.form__subscribe__label}>Password
              <input
                type={'password'}
                placeholder={'Your password'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <label className={styles.form__subscribe__label}>Confirm password
              <input
                type={'password'}
                placeholder={'Confirm your password'}
                autoCorrect={'off'}
                className={styles.form__subscribe__label__input}
              />
            </label>
            <button className={styles.container__signIn}>Sign Up</button>
          </TabPanel>
        </Tabs>
      <Footer/>
    </Layout>
  )
}

export default Authorization