import AppLayout from "./components/AppLayout"

function App() {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="w-full h-full">
      <AppLayout/>
    </div>
  )
}

export default App
