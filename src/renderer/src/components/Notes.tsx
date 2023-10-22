import { useAppSelector } from '@renderer/hooks/useAppSelector'
import React from 'react'
import Note from './NoteElement'
function Notes(): React.JSX.Element {
  const notes = useAppSelector((state) => state.notes)

  return (
    <div className='mt-4'>
      {
        notes.map((note) => (
          <Note key={note.id} note={note}/>
        ))
      }     
    </div>
  )
}

export default Notes
