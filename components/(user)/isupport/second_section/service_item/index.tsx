import { ServisPropsType } from '@/types/links'
import Image from 'next/image'
import React from 'react'



const ServiceItemComponent = ({id,title,description,imgUrl}: ServisPropsType) => {
  return (
    <div>
      <div className='relative w-6 h-6'>
        <Image src={imgUrl} fill alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServiceItemComponent