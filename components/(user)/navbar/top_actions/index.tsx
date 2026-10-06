import { ChevronDown } from 'lucide-react'
import ActionIcons from '../action_icons'

const TopActions = () => {
  return (
    <div className="flex items-center gap-10 ">
        <div>
          <button className="flex items-center gap-2 cursor-pointer text-sm tracking-wide">Azərbaycan dili <ChevronDown className="size-4" /></button>
        </div>
        
      {/* Navbarin user elaqe iconalari */}
        <ActionIcons/>
    </div>
  )
}

export default TopActions