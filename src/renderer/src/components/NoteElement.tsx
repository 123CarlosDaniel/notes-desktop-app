import { Note } from '@renderer/features/noteReducer'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoteElement({ note }: { note: Note }): React.JSX.Element {
  const navigate = useNavigate()
  return (
    <div
      className="p-3 border-b-2 border-blue-500 hover:bg-blue-500 hover:border-transparent"
      onClick={() => {
        navigate(`/${note.id}`)
      }}
    >
      {note.title}
    </div>
  )
}

export default NoteElement
