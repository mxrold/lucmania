import DefaultCastImage from '../../assets/static/default-cast-image.jpg'

const DetailCast = ({ cast }) => {
  return (
    <>
      {
                cast === undefined
                  ? null
                  : <div className='w-full md:mx-4 mt-8'>
                    <h3 className='text-xl font-semibold text-gray-200'>Elenco principal</h3>
                    <div className='mt-4 scroll-x'>
                      {
                            cast.cast === undefined
                              ? null
                              : cast.cast.slice(0, 12).map(item => (
                                <article className='relative scroll-x-card mr-4 md:mr-6 mb-4'>
                                  <figure className='w-20 md:w-24 h-max'>
                                    <img
                                      className='w-20 h-32 md:w-24 md:h-36 bg-contain rounded-md'
                                      src={item.profile_path === null
                                        ? DefaultCastImage
                                        : `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.profile_path}`}
                                      alt={`Imagen de ${item.original_name}`}
                                      title={`Imagen de ${item.original_name}`}
                                    />
                                    <figcaption className='px-1 text-sm font-medium text-gray-400'>{item.original_name}</figcaption>
                                  </figure>
                                </article>
                              ))
                        }
                    </div>
                    </div>
            }
    </>
  )
}

export default DetailCast
