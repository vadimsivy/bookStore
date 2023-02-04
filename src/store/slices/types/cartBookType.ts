interface IBookCart {
  isbn13: string
  image: string
  title: string
  authors: string
  publisher: string
  price: string
  count: number
}
interface ICartSliceInitialState {
  cart: IBookCart[]
}
export type {
  IBookCart,
  ICartSliceInitialState,
}