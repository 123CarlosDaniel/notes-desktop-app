import React from 'react'

function EmptyList(): React.JSX.Element {
  return (
    <div className="flex flex-col justify-center h-full space-y-4 text-center">
      <h1 className="text-2xl font-bold">Oops! <br /> There is no info to show</h1>
      <p className="text-lg font-semibold text-green-400">Select a note or create a new one</p>
    </div>
  )
}

export default EmptyList
