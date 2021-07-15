import { useHistory } from 'react-router-dom'
import Button from '../global/Button'

const MainInformationButtons = () => {
  const history = useHistory()

  const dataButton = [
    {
      title: 'Películas',
      key: 'movie'
    },
    {
      title: 'Series',
      key: 'tv'
    }
  ]

  const handleGetGenders = (genre) => {
    history.push(`/${genre}`)
  }

  return (
    <div className='flex flex-col sm:flex-row sm:justify-around sm:w-3/4 lg:w-2/4 mx-auto mt-12'>
      {
                dataButton.map(data =>
                  <Button
                    text={data.title}
                    key={data.key}
                    onClick={() => handleGetGenders(data.key)}
                    width='w-full sm:w-5/12  sm:max-w-xs'
                  />
                )
            }
    </div>
  )
}

export default MainInformationButtons
