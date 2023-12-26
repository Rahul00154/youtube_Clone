import React from 'react'
import Button from '../Button/Button'

const ButtonList = () => {
  const lists = [
    'All',
    'Live',
    'Music',
    'Gaming',
    'News',
    'Podcast',
    'Thoughts',
    'Commedy Club',
    'Gadgets',
    'Asian Music',
  ]

  return (
    <div>
      {lists.map((item) => (
        <Button
          key={Math.random()}
          name={item}
        />
      ))}
      {/* <Button name={'All'} /> */}
    </div>
  )
}

export default ButtonList
