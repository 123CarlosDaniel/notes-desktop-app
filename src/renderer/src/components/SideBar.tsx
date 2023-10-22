import React from "react"
import Notes from "./Notes"

function SideBar(): React.JSX.Element {
  return (
    <div className="w-full">
        <h2 className="text-md text-center font-semibold text-[#b8fff7]">My personal Notes</h2>
        <Notes></Notes>
    </div>
  )
}

export default SideBar