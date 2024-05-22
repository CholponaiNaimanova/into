import React from 'react';

const LogIn = () => {
    return (
        <div id="">
                <div className=" flex justify-center mt-[100px] text-white text-center">

                    <div className=" bg-[#211E2E] w-[1100px] h-[800px] rounded-[50px] text-center">

                        <h1 className=' mt-[60px] text-[35px] font-semibold'
                        >JOIN HYDRA</h1>
                        <p className=' mt-[30px] font-thin text-[35px]'
                        >Let’s Build Your VR Experience</p>

                        <div className="">

                            <div className=" flex justify-center gap-[15px] m-[30px]">
                                <input className=' bg-transparent border-[2px] border-white rounded-[30px] p-[13px] pr-[250px] placeholder:text-white'
                                 type="text" placeholder='First Name'/>
                                <input className=' bg-transparent border-[2px] border-white rounded-[30px] p-[13px] pr-[250px] placeholder:text-white'
                                 type="text" placeholder='Last Name' />
                            </div>

                            <div className=" flex justify-center gap-[15px] m-[30px]">
                                <input className=' bg-transparent border-[2px] border-white rounded-[30px] p-[13px] pr-[250px] placeholder:text-white'
                                 type="email" placeholder='Email'/>
                                <input className=' bg-transparent border-[2px] border-white rounded-[30px] p-[13px] pr-[250px] placeholder:text-white'
                                 type="number" placeholder='Phone Number' />
                            </div>

                        </div>

                        <input type='text' placeholder='Subject' className='flex ml-[90px] bg-transparent border-[2px] border-white rounded-[30px] p-[13px] pr-[720px] placeholder:text-white'/>

                        <input type='text' placeholder='Tell Us Something...' className=' mt-[30px] flex ml-[90px] bg-transparent border-[2px] border-white rounded-[30px] pb-[150px] p-[13px] pr-[720px] placeholder:text-white'/>


                        <button className='font-bold mt-[40px] pr-[40px] pl-[40px] bg-[#C0B7E8] rounded-[30px] p-[14px] text-black'
                        >SEND TO HYDRA</button>

                     </div>

                </div>
        </div>
    );
};

export default LogIn;