import { ServiceProcessType } from '@/types/links'
import Image from 'next/image'
import React from 'react'

const ServiceProcessItemComp = ({title,description,imgUrl}:ServiceProcessType) => {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      {/* Şəkil konteyneri */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Mətn konteyneri */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServiceProcessItemComp