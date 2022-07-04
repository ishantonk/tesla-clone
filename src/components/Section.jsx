import React from 'react';
import { FiChevronDown } from 'react-icons/fi'
import { Fade } from 'react-reveal';

const Section = ({ title, description, leftBtnTxt, rightBtnTxt, background }) => {
    return (
        <div style={{backgroundImage: `url("/images/${background}")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
    }} className={'bg-center h-screen w-full'}>
            <div className='flex flex-col justify-between mx-auto h-screen'>
                <Fade bottom>
                    <div className='flex flex-col mx-auto mt-48'>
                        <h1 className='flex mx-auto text-4xl font-semibold'>{title}</h1>
                        <p className='flex mx-auto font-semibold'>{description}</p>
                    </div>
                </Fade>
                <div className='mx-auto'>
                    <Fade bottom>
                        <div className='flex flex-col md:flex-row lg:flex-row mx-auto'>
                            <button className='my-2 mx-5 p-2 w-72 backdrop-blur-md bg-gray-900 text-white rounded-3xl text-sm font-semibold uppercase opacity-60'>{leftBtnTxt}</button>
                            {rightBtnTxt? 
                            <button className='my-2 mx-5 p-2 w-72 backdrop-blur-md bg-white text-black rounded-3xl text-sm font-semibold uppercase opacity-60'>{rightBtnTxt}</button>
                            : ""
                            }
                        </div>
                    </Fade>
                    <FiChevronDown size={30} color='white' className='mx-auto mt-10 animate-bounce' />
                </div>
            </div>
        </div>
    )
}

export default Section;