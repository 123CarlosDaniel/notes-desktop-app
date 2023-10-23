import { Note, updateNote } from '@renderer/features/noteReducer'
import { useFormData } from '@renderer/hooks/useFormData'
import React, { RefObject, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

function Description(): React.JSX.Element {
  const inputRef = useRef() as RefObject<HTMLInputElement>
  const note = useLoaderData() as Note
  const dispatch = useDispatch()
  const { data, setData, handleChange } = useFormData(note)

  useEffect(() => {    
    if (inputRef.current) {
      inputRef.current.focus()
    }
    setData({...note})
  }, [note])

  const handleUpdateBtn = () => {
    dispatch(updateNote(data))
  }
  return (
    <>
    <div className="flex flex-col px-3 py-2 tracking-wide gap-y-4">
      <input
        ref={inputRef}
        name='title'
        className="font-semibold text-center text-green-400 outline-none bg-inherit"
        onChange={handleChange}
      
        value={data.title}
      />
      <textarea className='outline-none bg-inherit' name='description' value={data.description} onChange={handleChange}></textarea>
    </div>
    <div className='absolute flex bottom-8 left-4 gap-x-4'>
      <button onClick={handleUpdateBtn} className='px-2 py-1 bg-blue-400 rounded-full outline-transparent outline outline-2 hover:bg-inherit hover:outline-blue-400'>Update</button>
      <button className='px-2 py-1 bg-red-400 rounded-full outline-transparent outline outline-2 hover:bg-inherit hover:outline-red-400'>Delete</button>
    </div>
    </>
  )
}

export default Description
