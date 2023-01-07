import {useCallback, useRef} from "react"

const useDebounce = () => {
  const timerId = useRef<NodeJS.Timeout | undefined>(undefined)

  return useCallback((cb: () => void, delay: number) => {
    clearTimeout(timerId.current)
    timerId.current = setTimeout(cb ,delay)
  }, [])
}

export default useDebounce