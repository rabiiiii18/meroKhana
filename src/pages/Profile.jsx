import React from 'react'
import Header from '../component/custom/Header'

const Profile = () => {
  return (
    <div>
         <Header />
      <div
        className="h-[300px] flex flex-col justify-center items-center bg-gray-100"
        style={{
          backgroundImage: "url('/recipe-bg.svg')",
          objectFit: "cover",
        }}
      >
        <h1 className="text-[45px] font-bold">My Account</h1>
       
      </div>
      
    </div>
  )
}

export default Profile
