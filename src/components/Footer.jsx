import React from 'react';

const Footer = () => {
    return (
        <div className='lg:mx-48 md:mx-48 mx-32 my-10'>
            <ul className='flex flex-col lg:flex-row md:flex-row text-sm font-semibold text-gray-500 justify-between'>
                <li><p><a href="#" className='flex justify-center my-1'>Tesla © 2022</a></p></li>
                <li><p><a href="#" className='flex justify-center my-1'>Privacy & Legal</a></p></li>
                <li><p><a href="#" className='flex justify-center my-1'>Vehicle Recalls</a></p></li>
                <li><p><a href="#" className='hidden justify-center my-1 lg:flex md:flex'>Contact</a></p></li>
                <li><p><a href="#" className='flex justify-center my-1'>Careers</a></p></li>
                <li><p><a href="#" className='flex justify-center my-1'>News</a></p></li>
                <li><p><a href="#" className='hidden justify-center my-1 lg:flex md:flex'>Engage</a></p></li>
                <li><p><a href="#" className='hidden justify-center my-1 lg:flex md:flex'>Locations</a></p></li>
            </ul>
        </div>
    )
}

export default Footer;