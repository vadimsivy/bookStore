

import styles from "./subscribe.module.scss"

const SubscribeNewsLetter = () => {
  return (
    <div className={styles.container}>
      <h1>Subscribe to Newsletter</h1>

      <p className={styles.sub_title}>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </p>

      <form className={styles.form__subscribe}>
        <label className={styles.form__subscribe__label}>
          <input
            type={'email'}
            placeholder={'Your email'}
            autoCorrect={'off'}
            className={styles.form__subscribe__label__input}
          />
        </label>

        <button className={styles.form__subscribe__button}>subscribe</button>
      </form>
    </div>
  )
}

export default SubscribeNewsLetter