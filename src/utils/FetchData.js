const FetchData = async (firstParam, secondParam) => {
    try {
        const URL = `https://api.themoviedb.org/3${firstParam}?api_key=${secondParam}&language=es-MX`
        const response = await fetch(URL)
        const responseJson = await response.json()
        return responseJson
    } catch (error) {
        console.error(error)
    }
}

export default FetchData