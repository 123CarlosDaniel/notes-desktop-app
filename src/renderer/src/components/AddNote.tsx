import { addNote } from '@renderer/features/noteReducer'
import { useFormData } from '@renderer/hooks/useFormData'
import React, { MouseEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddNote(): React.JSX.Element {
  const {data, handleChange} = useFormData({title: "", description: ""})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFormSubmit: MouseEventHandler<HTMLButtonElement>= (e) => {
    e.preventDefault()
    dispatch(addNote({...data}))
    navigate("/")
  }
  return (
    <>
      <h2 className="text-xl font-semibold text-center text-[#b8fff7]">Create a new note</h2>
      <div className="mx-auto mt-10 w-30">
        <form className="flex flex-col items-center gap-8">
          <div className="text-lg form-container gap-y-6 gap-x-4">
            <label className="px-2 text-md text-start sm:text-end" htmlFor="title">
              Title
            </label>
            <input
              className="px-2 py-1 border-2 border-transparent rounded-lg outline-none bg-slate-800 text-slate-100 focus-within:border-emerald-400"
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <label className="px-2 text-md text-start sm:text-end" htmlFor="description">
              Description
            </label>
            <textarea
              className="px-2 py-1 border-2 border-transparent rounded-lg outline-none resize-none text-slate-100 bg-slate-800 focus:border-emerald-400"
              id="description"
              rows={6}
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <button
            className="block px-3 py-1 mx-auto text-lg bg-blue-500 rounded-lg w-max"
            onClick={handleFormSubmit}
          >
            Save Note
          </button>
        </form>
      </div>
    </>
  )
}

export default AddNote
