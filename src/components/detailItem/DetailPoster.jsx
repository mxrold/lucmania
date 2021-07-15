import DefaultImage from '../../assets/static/default-poster-image.jpg'

const DetailPoster = ({ poster, title }) => {
  return (
    <img
      className='w-32 h-48 md:w-full md:h-72 mx-auto md:mx-0 bg-contain object-fill rounded-md' src={poster === null || poster === undefined
        ? DefaultImage
        : `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`}
      alt={`Imagen de portada de ${title}`}
      title={`Imagen de portada de ${title}`}
    />
  )
}

export default DetailPoster
