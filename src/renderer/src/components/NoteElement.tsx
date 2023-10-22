import { Note } from "@renderer/features/noteReducer"
import React from "react"

function NoteElement({note}: {note: Note}): React.JSX.Element {
  return (
    <div>{note.title}</div>
  )
}

export default NoteElement