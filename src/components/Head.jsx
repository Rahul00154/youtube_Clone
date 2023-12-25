import React from 'react'

const Head = () => {
  return (
    <div className="flex justify-between">
      <div className="flex ">
        <img
          className="h-8"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hamburgerMenu"
        />

        <img
          className="h-8"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube-logo"
        />
      </div>
      <div>
        <input
          type="text"
          className="py-1 border border-gray-400 w-80 rounded-tl-full rounded-bl-full mt-1"
        />
        <button className=" bg-gray-400 rounded-tr-full rounded-br-full text-white ml-1 p-1">
          Search
        </button>
      </div>
      <div>
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="userIcon"
        />
      </div>
    </div>
  )
}

export default Head
