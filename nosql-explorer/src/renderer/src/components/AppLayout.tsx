import NoSelected from "./NoSelected"
import Sidebar from "./Sidebar"

function AppLayout() {
  return (
    <div className="h-full w-full flex">
      <div className="h-full bg-[#25252514] w-[300px]">
        <Sidebar />
      </div>
      <div className="h-full w-full">
        <NoSelected/>
      </div>
    </div>
  )
}

export default AppLayout