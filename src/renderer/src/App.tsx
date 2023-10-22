import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import SideBar from './components/SideBar'

function App(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

  const handleClick = (): void => {
    if (currentPath === "/") {
      navigate('/add-note')
    } else {
      navigate('/')
    }
  }
  return (
    <>
      <div className="flex">
        <div className="w-[12rem] h-screen shrink-0 p-2 bg-slate-800">
          <SideBar></SideBar>
        </div>
        <div className="p-2 h-screen w-full">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="addNoteContainer">
        <button className="addNoteBtn px-2 py-1 rounded-full border-green-700 border-2 hover:bg-green-700 hover:border-transparent" onClick={handleClick}>
          {currentPath === "/" ? "Add Note": "Home"}
        </button>
      </div>
    </>
  )
}

export default App
