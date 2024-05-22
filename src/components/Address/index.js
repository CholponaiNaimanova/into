import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";


const Address = () => {
    return (
        <div id="">
            <div className="">
                <div className=" mt-[100px] flex justify-center text-white bg-[#3A3456] w-[1200px] h-[150px] rounded-[80px] ml-[150px]">
                    
<div className=" flex items-center gap-[90px]">

<div className="">

<div className=" flex items-center gap-2">
    <a 
    className=' text-[70px]'
    >
    <IoLocationOutline />
    </a> 
    <div className="">
        <h2>Pay Us a Visit</h2>
        <p className='font-thin'
        >Union St, Seattle, WA 98101, United States</p>
    </div>
</div>
</div>

<div className="">

<div className=" flex items-center gap-2">
    <a 
    className=' text-[70px]'
    >
    <LuPhoneCall />
    </a>
    <div className="">
        <h2>Give Us a Call</h2>
        <p className='font-thin'
        >(110) 1111-1010</p>
    </div>
</div>
</div>

<div className="">

<div className=" flex items-center gap-2">
    <a 
    className=' text-[70px]'
    >
    <HiOutlineMail />
    </a>
    <div className="">
        <h2>Send Us a Message</h2>
        <p className='font-thin'
        >Contact@HydraVTech.com</p>
    </div>
</div>
</div>
</div>

                </div>
            </div>
        </div>
    );
};

export default Address;