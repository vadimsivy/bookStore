export interface IViewport {
  mobile: boolean
  tablet: boolean
  laptop: boolean
}


const viewport = (): IViewport => ({
  mobile: matchMedia('(max-width: 468px)').matches,
  tablet: matchMedia('(min-width: 469px) and (max-width: 768px)').matches,
  laptop: matchMedia('(min-width: 769px)').matches,
})
export default viewport