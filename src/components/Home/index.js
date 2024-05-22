import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from '../../assets/img/ten.png'
import img2 from '../../assets/img/neten.png'
import Address from '../Address';

const Home = () => {
    return (
        <>
        <div id="">
            <div className="container">
                <div className=" text-white pt-[70px] flex justify-between">

                    <div className="">
                        <h1 className=' text-[60px] font-semibold'
                        ><span className=' text-[#C0B7E8]'
                        >Dive</span> Into The Depths</h1>
                        <h1 className=' text-[60px] font-semibold'
                        >Of <span className=' text-[#C0B7E8]'
                        >Virtual Reality</span></h1>

                        <p className=' pt-[50px] font-thin'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                           sed do eiusmod tempor incididunt ut labore et dolore <br />  
                           nisl tincidunt eget. Lectus mauris eros in vitae .
                        </p>
                        
                        <div className=" pt-[50px] flex items-center gap-6">
                            <button className='bg-[#8176AF] rounded-[30px] p-[12px]'
                            >BUILD YOUR WORLD</button>
                            <a 
                            className='text-[40px] '
                            >
                            <FaArrowRightLong />
                            </a>
                        </div>
                    </div>

                    <div className="">
                        <img className=' relative'
                         src={img1} alt="" />

                         <img className=' absolute top-[245px] right-[90px]'
                          src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;