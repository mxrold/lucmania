const FetchData = async (firstParam, secondParam, thirdParam = 'es-MX') => {
  try {
    const URL = `https://api.themoviedb.org/3${firstParam}?api_key=9f9133c73447f1c78b793864d3afdda5${secondParam}&language=${thirdParam}`
    const response = await fetch(URL)
    const responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error)
  }
}

export default FetchData
