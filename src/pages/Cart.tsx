import useAppSelector from "../hooks/useAppSelector"
import Layout from "../components/layout/Layout"
import GoBack from "../components/goBack/GoBack"
import {decreaseCountCart, increaseCountCart, removeCart} from "../store/slices/booksCartSlice"
import useAppDispatch from "../hooks/useAppDispatch"
import styles2 from "../components/books/book/Book.module.scss"
import styles from "../styles/pages/cartPage/cartPage.module.scss"
import Icon from "../components/icon/Icon"
import Footer from "../components/footer/Footer";

const Cart = () => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.booksCartReducer.cart)

  const countPrice = cart.reduce(
    (acc, curr) => acc + (curr.count * Number(curr.price.replace('$', ''))), 0
  )
  const vat = countPrice * 0.14
  const total = vat + countPrice
  return (
    <Layout title={'Cart'}>
      <GoBack/>
      <h1>Your Cart</h1>
      {cart.map((cart) =>
        <>
        <div key={cart.isbn13} className={styles.container}>
          <div className={styles.container__image}>
            <img
              src={cart.image}
              alt={cart.title}
            />
          </div>
          <div className={styles.container__desc}>
            <h1>{cart.title}</h1>
            <div className={styles2.favorite__gap}>by {cart.authors},<span>{cart.publisher}</span></div>
            <div className={styles.container__desc__count}>
              <button onClick={() => dispatch(decreaseCountCart(cart.isbn13))}>
                <Icon name={'minus'}/>
              </button>
              {cart.count}
              <button onClick={() => dispatch(increaseCountCart(cart.isbn13))}>
              <Icon name={'plus'}/>
              </button>

            </div>
          </div>

          <div className={styles.container__price}>{cart.price}</div>
          <div onClick={() => dispatch(removeCart(cart.isbn13))}>
            <Icon name={'cancel'}
                  strokeWidth={1.5}
            />
          </div>
        </div>
        <hr/>

        </>
      )}
          <div className={styles.floatRight}>
          <div className={styles.priceBox}>
            <div className={styles.priceBox__flex}>Sum total <span>${countPrice.toFixed(2)}</span></div>
            <div className={styles.priceBox__flex}>VAT <span>$ {vat.toFixed(2)}</span></div>
            <div className={styles.priceBox__flex_last}>TOTAL: <span>$ {total.toFixed(2)}</span></div>
            <button className={styles.buttonCheckOut}>Check Out</button>
          </div>

          </div>

          <Footer/>
    </Layout>
  )
}
export default Cart