import Image from 'next/image'
import image from "@/images/third_section-img.webp"

const ImageComponent = () => {
  return (
    <div className='relative h-65 w-190 rounded-2xl overflow-hidden max-[1000px]:w-full  max-[1000px]:h-60 max-[600px]:h-50'>
        <Image src={image} alt="ENERJİ-N MMC, BARS — qaz və su avadanlıqları, ölçmə və texniki servis həlləri" fill sizes="(max-width: 1440px) 50vw, 1440px"/>
    </div>
  )
}

export default ImageComponent