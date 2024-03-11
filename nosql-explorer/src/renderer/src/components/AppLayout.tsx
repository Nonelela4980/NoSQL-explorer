import ReactJson from "@microlink/react-json-view"
import NoSelected from "./NoSelected"
import Sidebar from "./Sidebar"
import Toolbar from "./Toolbar"
const my_important_json = [
  {
    id: 1,
    username: 'john_doe',
    email: 'john.doe@example.com',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    profile_picture: 'https://example.com/profile_picture.jpg',
    is_active: true,
    friends: ['user1', 'user2', 'user3'],
    preferences: {
      theme: 'dark',
      language: 'en'
    }
  },
  {
    id: 2,
    username: 'jane_smith',
    email: 'jane.smith@example.com',
    age: 25,
    address: {
      street: '456 Elm St',
      city: 'Smallville',
      state: 'NY',
      zip: '54321'
    },
    profile_picture: 'https://example.com/profile_picture.jpg',
    is_active: false,
    friends: ['user1', 'user3', 'user4'],
    preferences: {
      theme: 'light',
      language: 'en'
    }
  }
  // Add more users as needed
]

function AppLayout() {
  return (
    <div className="h-full w-full flex">
      <div className="h-full bg-[#25252514] w-[300px]">
        <Sidebar />
      </div>
      <div className="h-full w-full flex flex-col overflow-scroll">
        <Toolbar />
        {/* <NoSelected/> */}
        <div>
          <ReactJson src={my_important_json}  />
        </div>
      </div>
    </div>
  )
}

export default AppLayout