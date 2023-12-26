import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const { isMenuOpen } = useSelector((state) => state.toggle)

  return (
    isMenuOpen && (
      <div className=" shadow-lg p-5 w-40">
        <ul>
          <li>Home</li>
          <li>Youtube Music</li>
          <li>Subscriptions</li>
        </ul>

        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Live</li>
          <li>Movies</li>
          <li>Games</li>
        </ul>
        <h1 className="font-bold pt-5">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
        </ul>
      </div>
    )
  )
}

export default SideBar
