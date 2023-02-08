import Layout from "../components/layout/Layout"
import GoBack from "../components/goBack/GoBack"
import Footer from "../components/footer/Footer"

import styles from "../styles/pages/authorizationPage/Authorization.module.scss"
import styles2 from "../styles/pages/profilePage/profile.module.scss"

const Profile = () => {
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
      </div>
      <div className={styles2.profile__boxPassword}>
        <div className={styles2.profile__newPassword}>
          <label className={styles.form__subscribe__label}>Password
          <input
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
        <button className={styles2.container__saveChanges}>Save Changes</button>
        <button className={styles2.container__cancel}>Cancel</button>
      </div>
      <Footer/>
    </Layout>

  )
}

export default Profile