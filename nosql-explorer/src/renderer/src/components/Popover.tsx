import  { useState } from 'react'

const Popover = ({ content, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopover = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block">
      <div onClick={togglePopover}>{children}</div>
      {isOpen && (
        <div className="absolute z-10 w-48 mt-2 bg-white shadow-lg rounded-lg">
          <div className="py-2 px-4">{content}</div>
        </div>
      )}
    </div>
  )
}

export default Popover
