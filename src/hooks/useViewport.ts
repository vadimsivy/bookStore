import {useEffect, useState} from "react"

import viewport, {IViewport} from "../helpers/viewPort"

const useViewport = (): IViewport => {
  const [isViewport, setIsViewport] = useState(viewport)

  useEffect(() => {
    const callback = () => setIsViewport(viewport)

    window.addEventListener('resize', callback)

    return () => window.removeEventListener('resize', callback)
  }, [])

  return isViewport
}

export default useViewport