import FormatStrings from "../../utils/FormatStrings"

const DetailInformation = ({ dataDetails, path, dataCertification }) => {
    const formatRuntime = (minutes) => {
        const minutesToHours = (minutes / 60).toFixed(2)
        const hours = Math.trunc(minutesToHours)
        const restMinutes = Math.abs(hours - minutesToHours).toFixed(2)

        if(restMinutes > 0.01) {
            const resto = Math.round(restMinutes * 60)
            return `${hours}h ${resto}min`
        }
        return `${hours}h 00min`
    }

    const iteratorArray = data => data.map(item => item.name + ' - ')

    return (
        <>
            <h2 className="text-3xl font-semibold md:text-4xl text-gray-200">
                {path === '/tv' ? dataDetails.name : dataDetails.title}
            </h2>
            <div className="flex items-center mt-2 md:mt-1 text-lg text-gray-300">
                {
                    dataCertification.length === 0 || dataCertification === undefined
                    ? null
                    : <>
                        <p className="px-0.5 border-2 border-gray-700 rounded-sm">
                            {path === '/tv' ? dataCertification.rating : dataCertification.release_dates[0].certification}
                        </p>
                        <span className="w-1 h-1 mx-4 bg-gray-700 rounded-full"></span>
                    </>
                }
                {
                    dataDetails === undefined || dataDetails.first_air_date === null || dataDetails.last_air_date === null
                    ? null
                    : <p>
                        {path === '/tv' ? 
                        FormatStrings(dataDetails.first_air_date, '', 4) + 
                        ' - ' + FormatStrings(dataDetails.last_air_date, '', 4) : FormatStrings(dataDetails.release_date, '', 4)}
                    </p>  
                }
                {
                    dataDetails.runtime === null || path === '/tv'
                    ? null
                    : <> 
                        <span className="w-1 h-1 mx-4 bg-gray-600 rounded-full"></span>
                        <p>
                            {formatRuntime(dataDetails.runtime)}
                        </p>
                    </>
                }
            </div>
            <div>
                {
                    path === '/tv'
                    ?  <div className="flex mt-3 md:mt-2">
                        <p className="mr-4 text-md text-blue-300 text-opacity-80">
                            Temporadas: 
                            <span className="text-md text-gray-300"> {dataDetails.number_of_seasons}</span>
                        </p>
                        <p className="text-md text-blue-300 text-opacity-80">
                            Capítulos: 
                            <span className="text-md text-gray-300"> {dataDetails.number_of_episodes}</span>
                        </p>
                    </div>
                    : null
                }
                { 
                    dataDetails.genres === undefined
                    ? null
                    : <div className="mt-3 md:mt-2">
                        <p className="text-md text-blue-300 text-opacity-80">
                            Género: 
                            <span className="text-md text-gray-300"> {iteratorArray(dataDetails.genres)}</span>
                        </p>
                    </div>
                }
                {
                    dataDetails.original_title  === '' || dataDetails.original_name === ''
                    ? null 
                    : <div className="mt-3 md:mt-2">
                        <p className="text-md text-blue-300 text-opacity-80">
                            Título original: 
                            <span className="text-md text-gray-300"> {path === '/tv' ? dataDetails.original_name : dataDetails.original_title}</span>
                        </p>
                    </div>
                }
                {
                    dataDetails.spoken_languages === undefined
                    ? null
                    : <div className="mt-3 md:mt-2">
                        <p className="text-md text-blue-300 text-opacity-80">
                            Idioma original: 
                            <span className="text-md text-gray-300"> {iteratorArray(dataDetails.spoken_languages)}</span>
                        </p>
                    </div>
                }
                {
                    path === '/tv' && dataDetails.created_by !== undefined
                    ? <div className="mt-3 md:mt-2">
                        <p className="text-md text-blue-300 text-opacity-80">
                            Creado por: 
                            <span className="text-md text-gray-300"> {iteratorArray(dataDetails.created_by)}</span>
                        </p>
                    </div>
                    : null
                }
            </div>
        </>
    )
}

export default DetailInformation
