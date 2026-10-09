import FifthSection from '@/sections/(user)/isupport/fifth_section'
import FirstSection from '@/sections/(user)/isupport/first_section'
import SecondSection from '@/sections/(user)/isupport/second_section'
import ServiceLocationsSection from '@/sections/(user)/isupport/service_locations_section'
import ServiceMapSection from '@/sections/(user)/isupport/service_map_section'
import SixthSection from '@/sections/(user)/isupport/sixth_section'
import ThirdSection from '@/sections/(user)/isupport/third_section'
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