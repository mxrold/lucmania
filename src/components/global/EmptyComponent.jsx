import React from 'react'
import TextParagraph from './TextParagraph'
import Titleh2 from './Titleh2'
import LinkButton from './LinkButton'

const EmptyComponent = ({ title, text, pathText }) => {
  return (
    <div className='flex flex-col justify-center items-center h-full text-center'>
      <Titleh2 title={title} />
      <TextParagraph text={text} />
      <LinkButton pathText={pathText} />
    </div>
  )
}

export default EmptyComponent
