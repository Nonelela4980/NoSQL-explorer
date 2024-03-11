import { FaSearch } from "react-icons/fa";
import KeyItem from "./KeyItem";

function Sidebar() {
  return (
    <div className="w-full h-full">
      <div className="border-b border-gray-300 h-[60px]">
        <div className="p-3">
          <div className="flex gap-4 bg-[#e8e5e4] rounded-md items-center p-2">
            <FaSearch color="#C0CADA" size={'20px'} className="cursor-pointer" />
            <input
              type="text"
              className="text-[#0B0E3A] outline-none w-full bg-transparent"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 p-2 text-[#C0CADA]">
        <span className="uppercase text-sm">Keys (8410 scanned)</span>
      </div>
      <div className="h-[90%] flex flex-col gap-1 overflow-scroll">
        <KeyItem isActive={true} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
        <KeyItem isActive={false} />
      </div>
    </div>
  )
}
export default Sidebar