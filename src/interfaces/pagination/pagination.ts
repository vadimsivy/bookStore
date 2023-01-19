interface IPaginationProps {
  currentPage: number
  totalPages: number
  input?: string | undefined
}
interface INextAndPrevPages {
  prevPage: number | undefined
  nextPage: number | undefined
}

export type {
  IPaginationProps,
  INextAndPrevPages,
}