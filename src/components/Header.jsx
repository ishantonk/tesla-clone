import React from 'react';
import { VscChromeClose } from 'react-icons/vsc'

const Header = () => {
    const openSidebar = () => {
        let sideBar = document.getElementById("sideBar");
        sideBar.classList.remove("translate-x-80");
        sideBar.classList.remove("opacity-0");
        sideBar.classList.add("opacity-100");
        sideBar.classList.add("translate-x-0");
    } 

    const closeSidebar = () => {
        let sideBar = document.getElementById("sideBar");
        sideBar.classList.remove("translate-x-0");
        sideBar.classList.remove("opacity-100");
        sideBar.classList.add("opacity-0");
        sideBar.classList.add("translate-x-80");
    }

    return (
        <div className='fixed w-screen z-10 backdrop-blur-md'>
            <div className='flex justify-between px-8 py-2 font-semibold uppercase text-xs'>
                <div className='py-2'>
                    <img src="/images/logo.svg" alt="logo" />
                </div>
                <div className='lg:flex md:flex hidden'>
                    <p className='flex rounded-xl m-1 py-2 px-3 mx-2'><a href="#">Model S</a></p>
                    <p className='flex rounded-xl m-1 py-2 px-3 mx-2'><a href="#">Model 3</a></p>
                    <p className='flex rounded-xl m-1 py-2 px-3 mx-2'><a href="#">Model X</a></p>
                    <p className='flex rounded-xl m-1 py-2 px-3 mx-2'><a href="#">Model Y</a></p>
                    <p className='flex rounded-xl m-1 py-2 px-3 mx-2'><a href="#">Solar Panels</a></p>
                    <p className='flex rounded-xl m-1 py-2 px-3 mx-2'><a href="#">Solar Roof</a></p>
                </div>
                <div className='flex'>
                    <p className='m-1 py-2 px-3 mx-2 lg:flex md:flex hidden'><a href="#">Shop</a></p>
                    <p className='m-1 py-2 px-3 mx-2 lg:flex md:flex hidden'><a href="#">Account</a></p>
                    <button onClick={openSidebar} className='font-medium text-xs uppercase'>Menu</button>
                </div>
                <div id='sideBar' className='bg-white absolute h-screen top-0 right-0 w-80 opacity-0 translate-x-80 transition-all duration-500'>
                    <div className='flex flex-col text-sm font-medium text-gray-600 p-1 my-4 mx-6'>
                        <div className='flex flex-row-reverse'>
                            <VscChromeClose onClick={closeSidebar} className='flex rounded-3xl p-2.5 hover:bg-gray-100' size={40} />
                        </div>
                        <li className='lg:hidden md:hidden flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Model S</a></li>
                        <li className='lg:hidden md:hidden flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Model 3</a></li>
                        <li className='lg:hidden md:hidden flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Model X</a></li>
                        <li className='lg:hidden md:hidden flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Model Y</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Used Inventory</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Trade-in</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Test Drive</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Insurance</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Powerwall</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Commercial Energy</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Utilities</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Charging</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Find Us</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Support</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Investor Relations</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Shop</a></li>
                        <li className='flex rounded-xl m-1 py-2 px-3 hover:bg-gray-100'><a href="#">Account</a></li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;