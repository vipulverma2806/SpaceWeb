import React from 'react'
import sat1 from "../assets/sat1.jpg"
const Poster = () => {
  return (
    <div className='z-30 relative top-[-400px] flex justify-center text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-2/3 gap-10 border-r-2 '>
            <div>
                <img src={sat1} alt="" srcset="" />
            </div>
            <div className='border-b-2 pt-3'>
                <p className='text-blue-500 font-light text-2xl'>Our Mission</p>
                <h3>title</h3>
                <p className='text-left pr-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat iusto eveniet saepe, voluptatibus consequatur quasi ad atque optio maiores quas quia non nesciunt libero ea vel dolorem sequi illo accusantium?</p>
            </div>
        </div>
    </div>
  )
}

export default Poster