import Image from 'next/image'
import image from "@/images/third_section-img.webp"

const ImageComponent = () => {
  return (
    <div className='relative h-65 w-full rounded-2xl overflow-hidden'>
        <Image src={image} alt="" fill />
    </div>
  )
}

export default ImageComponent