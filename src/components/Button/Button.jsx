import React from 'react'

const Button = ({ name }) => {
  return (
    <button className="mt-2 ml-2 bg-gray-200 px-2 py-1 rounded-md">
      {name}
    </button>
  )
}

export default Button
