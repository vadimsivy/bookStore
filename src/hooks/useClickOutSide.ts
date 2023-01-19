import {MutableRefObject, useCallback} from 'react'

const useClickOutside = (ref: MutableRefObject<HTMLElement | null>) => {
  return useCallback((callback: () => void) => {
    const handler = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
        document.removeEventListener('click', handler)
      }
    }

    document.addEventListener('click', handler)
  }, [ref])
}

export default useClickOutside