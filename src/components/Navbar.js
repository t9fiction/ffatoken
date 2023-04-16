import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white w-full'>
        <div className='flex flex-row justify-between px-[100px] h-[112px] py-[41px] items-center flex-1'>
        <div>Logo</div>
        <div>
            <ul className='flex flex-row space-x-[48px]  flex-1'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>MISSION</li>
                <li>TOKENOMICS</li>
                <li>TEAM</li>
                <li>DOCS</li>
                <li>CONTACT US</li>
            </ul>
        </div>
        <div>Button</div>
        </div>
    </div>
  )
}

export default Navbar