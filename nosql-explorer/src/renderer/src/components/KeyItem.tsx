import KeyImage from '@renderer/assets/images/key.png'

interface KeyItemProps{
    isActive:boolean,

}

function KeyItem({...props}:KeyItemProps) {
  return (
    <div className={` ${props.isActive ? 'border-l-4 border-[#0E1448] bg-[#C0CADA]' : ''}`}>
      <div className="w-full flex items-center gap-2 hover:bg-[#C0CADA] cursor-pointer p-2">
        <img src={KeyImage} className="w-[25px]" />
        <span>sample-xl</span>
      </div>
    </div>
  )
}
export default KeyItem
