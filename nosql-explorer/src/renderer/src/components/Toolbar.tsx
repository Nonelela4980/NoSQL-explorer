import { FaInfoCircle, FaCog } from 'react-icons/fa'
import JsonImage from '../assets/images/json.png'
function Toolbar() {
  return (
    <div className="toolbar border-b border-gray-300 h-[62px] p-3 flex justify-between sticky">
      <div className="flex items-center gap-3">
        <FaInfoCircle fontSize={'25px'} />
        <span className="text-xl">sample-xl</span>
      </div>
      <div>
        <button className="border border-gray-300 text-white font-bold  px-4 rounded hover:bg-[#C0CADA]">
          <img src={JsonImage} width={25} />
        </button>
      </div>
    </div>
  )
}
export default Toolbar
