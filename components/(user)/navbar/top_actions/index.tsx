import { Heart, Phone, User, ChevronDown } from 'lucide-react'

const TopActions = () => {
  return (
    <div className="flex items-center gap-10 ">
        <div>
          <button className="flex items-center gap-2 cursor-pointer">Azərbaycan dili <ChevronDown className="size-4" /></button>
        </div>
        <div className="flex items-center gap-4">
            <button><Phone className="size-4 cursor-pointer" /></button>
            <button><User className="size-4 cursor-pointer" /></button>
            <button><Heart className="size-4 cursor-pointer" /></button>
        </div>
    </div>
  )
}

export default TopActions