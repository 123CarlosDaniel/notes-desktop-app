import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import SideBar from './components/SideBar'

function App(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

  const handleClick = (): void => {
    if (currentPath === "/add-note") {
      navigate(-1)
    } else {
      navigate('/add-note')
    }
  }
  return (
    <>
      <div className="flex">
        <div className="w-[12rem] h-screen shrink-0 bg-slate-800">
          <SideBar></SideBar>
        </div>
        <div className="relative w-full h-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="addNoteContainer">
        <button className="px-2 py-1 border-2 border-green-700 rounded-full addNoteBtn hover:bg-green-700 hover:border-transparent" onClick={handleClick}>
          {currentPath === "/add-note" ? "Home": "Add Note"}
        </button>
      </div>
    </>
  )
}

export default App
