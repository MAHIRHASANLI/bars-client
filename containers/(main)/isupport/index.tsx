import FifthSection from '@/sections/(main)/isupport/fifth_section'
import FirstSection from '@/sections/(main)/isupport/first_section'
import SecondSection from '@/sections/(main)/isupport/second_section'
import ServiceLocationsSection from '@/sections/(main)/isupport/service_locations_section'
import ServiceMapSection from '@/sections/(main)/isupport/service_map_section'
import SixthSection from '@/sections/(main)/isupport/sixth_section'
import ThirdSection from '@/sections/(main)/isupport/third_section'
import React from 'react'

const IsupportContainer = () => {
  return (
    <main>
        <FirstSection/>
        <SecondSection/>   
        <ThirdSection/> 
        <FifthSection/>
        <SixthSection/>
        <ServiceMapSection/>
        <ServiceLocationsSection/>
    </main>
  )
}

export default IsupportContainer