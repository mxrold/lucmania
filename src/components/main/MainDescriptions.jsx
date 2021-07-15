import MainDescriptionsItem from './MainDescriptionsItem'

const MainDescriptions = () => {
  const dataItem = [
    {
      title: 'Accede a los detalles',
      data: '¿Te gustó algo y quieres conocer más? Ingresa a cada película o serie para ver su información, puntuaciones de usuarios, resumen, elenco principal y mucho más.'
    },
    {
      title: 'Agrega a favoritos',
      data: 'En cada búsqueda guarda todo el contenido que te guste para nunca perderte lo que quieras ver luego.'
    }
  ]

  return (
    <div className='lg:w-1/3 max-w-2xl mx-auto'>
      {
                dataItem.map(item =>
                  <MainDescriptionsItem title={item.title} data={item.data} />
                )
            }
    </div>
  )
}

export default MainDescriptions
