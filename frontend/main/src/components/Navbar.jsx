import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link, Outlet} from 'react-router-dom';


//  bg-[#1d1f23]/70 backdrop-blur-sm

export const NavigationBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
    return (
        <div className="sticky top-0 border-r-gray-90 bg-[#1d1f23]/70 backdrop-blur-sm z-20">
            <div className='container flex justify-between items-center h-20 mx-auto px-4 text-white '>
                <h1 className='w-full text-2xl font-bold text-[#b8b9fa]'>DOAKAN</h1>
                <ul className='hidden md:flex'>
                    <li className='p-5'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-5'>
                        <Link to="/donasi">Donasi</Link>
                    </li>
                    <li className='p-5'>
                        <Link to="/tutorial">Tutorial</Link>
                    </li>
                    <li className='p-5'>
                        <Link to="/aboutus">About</Link>
                    </li>
                    <li className='px-5'>
                        <Link to='/login'>
                            <button class="px-9 py-2 text-white bg-[#595bc9] rounded-full baseline hover:bg-[#b8b9fa] ease-in-out duration-300 text-sm">
                                Log In
                            </button>
                        </Link>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                </div>
                <div className="mt-5">
                <ul className={nav ? 'fixed left-0 top-0 h-full ease-in-out duration-500 mt-20' : 'ease-in-out duration-500 fixed hidden'}>
                    <li className='w-screen p-4 bg-[#1d1f23]/70 backdrop-blur-sm text-center'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='w-screen p-4 bg-[#1d1f23]/70 backdrop-blur-sm text-center'>
                        <Link to="/donasi">Donasi</Link>
                    </li>
                    <li className='w-screen p-4 bg-[#1d1f23]/70 backdrop-blur-sm text-center'>
                        <Link to="/tutorial">Tutorial</Link>
                    </li>
                    <li className='w-screen p-4 bg-[#1d1f23]/70 backdrop-blur-sm text-center'>
                        <Link to="/aboutus">About</Link>
                    </li>
                </ul>
                </div>
            </div>
            {/* <Outlet /> */}
        </div>

    );
}