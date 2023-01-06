const buildSearchParams = (params: string | string[][] | Record<string, string> | URLSearchParams | undefined) => {
  const searchParams = new URLSearchParams(params)

  searchParams.forEach((value, name) => {
    if (!value) searchParams.delete(name)
  })

  return searchParams.toString()
}

export default buildSearchParams