import { useAppSelector } from '@renderer/hooks/useAppSelector'
import React from 'react'
import NoteElement from './NoteElement'
function Notes(): React.JSX.Element {
  const notes = useAppSelector((state) => state.notes)

  return (
    <div className='flex flex-col mt-4'>
      {
        notes.map((note) => (
          <NoteElement key={note.id} note={note}/>
        ))
      }     
    </div>
  )
}

export default Notes
