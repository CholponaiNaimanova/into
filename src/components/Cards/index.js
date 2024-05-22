import React from 'react';
import img from '../../assets/img/tenImg.png'
import girl from '../../assets/img/girlOne.png'
import two from '../../assets/img/two.png'
import three from '../../assets/img/three.png'
import five from '../../assets/img/five.png'
import imgR from '../../assets/img/imgradius.png'
import right from '../../assets/img/right.png'
import img1 from '../../assets/img/1.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Cards = () => {
    return (
        <div id="">
            <div className="">
                <div className=" text-white flex justify-center flex-col gap-[20px] mt-[60px]">


                    <div className="text-white flex justify-center gap-[20px]">
                    <div className=" bg-[#433D60] w-[300px] h-[500px] rounded-[50px] relative">
                        <img  className=' ml-[40px] m-[34px]'
                        src={img} alt="" />
                        <img className=' absolute top-[46px] left-[54px]'
                         src={girl} alt="" />

                         <div className="">
                         <h1 
                         className=' text-center text-[30px]'
                         >SIMULATION</h1>
                         <p
                         className=' text-[13px] m-[20px]'
                         >Vitae sapien pellentesque habitant morbi <br />
                          nunc. Viverra aliquet  porttitor rhoncus <br />
                          libero justo laoreet sit amet vitae.</p>

                          <button className=' text-black bg-[#C0B7E8] rounded-[30px] p-[14px] ml-[90px]'
                          >TRY IT NOW</button>
                         </div>
                    </div>

                    <div className=" bg-[#433D60] w-[300px] h-[500px] rounded-[50px] relative">
                        <img  className=' ml-[40px] m-[34px]'
                        src={img} alt="" />
                        <img className=' absolute top-[46px] left-[54px]'
                         src={two} alt="" />

                         <div className="">
                         <h1 
                         className=' text-center text-[30px]'
                         >SIMULATION</h1>
                         <p
                         className=' text-[13px] m-[20px]'
                         >Vitae sapien pellentesque habitant morbi <br />
                          nunc. Viverra aliquet  porttitor rhoncus <br />
                          libero justo laoreet sit amet vitae.</p>

                          <button className=' text-black bg-[#C0B7E8] rounded-[30px] p-[14px] ml-[90px]'
                          >TRY IT NOW</button>
                         </div>
                    </div>

                    <div className=" bg-[#433D60] w-[300px] h-[500px] rounded-[50px] relative">
                        <img  className=' ml-[40px] m-[34px]'
                        src={img} alt="" />
                        <img className=' absolute top-[46px] left-[54px]'
                         src={three} alt="" />

                         <div className="">
                         <h1 
                         className=' text-center text-[30px]'
                         >SIMULATION</h1>
                         <p
                         className=' text-[13px] m-[20px]'
                         >Vitae sapien pellentesque habitant morbi <br />
                          nunc. Viverra aliquet  porttitor rhoncus <br />
                          libero justo laoreet sit amet vitae.</p>

                          <button className=' text-black bg-[#C0B7E8] rounded-[30px] p-[14px] ml-[90px]'
                          >TRY IT NOW</button>
                         </div>
                    </div>

                    <div className=" bg-[#433D60] w-[300px] h-[500px] rounded-[50px] relative">
                        <img  className=' ml-[40px] m-[34px]'
                        src={img} alt="" />
                        <img className=' absolute top-[46px] left-[54px]'
                         src={five} alt="" />

                         <div className="">
                         <h1 
                         className=' text-center text-[30px]'
                         >SIMULATION</h1>
                         <p
                         className=' text-[13px] m-[20px]'
                         >Vitae sapien pellentesque habitant morbi <br />
                          nunc. Viverra aliquet  porttitor rhoncus <br />
                          libero justo laoreet sit amet vitae.</p>

                          <button className=' text-black bg-[#C0B7E8] rounded-[30px] p-[14px] ml-[90px]'
                          >TRY IT NOW</button>
                         </div>
                    </div>
                    </div>

                    <div className=" flex justify-center mt-[70px]">
                        <img src={imgR} alt="" />
                    </div>

                    <div className=" flex justify-center gap-[100px] items-center mt-[70px] ">

<div className="text-[40px] font-semibold">
    <h1>HOW WE BUILD</h1>
    <h2 className='font-thin text-[40px] flex items-center gap-4'
    >WITH HYDRA VR?<img src={right} alt="" />
    </h2>
</div>

<p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat <br />
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo <br />
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare  <br />
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>

                   </div>


                   <div className=" mt-[90px] flex justify-center gap-[120px]">

                    <div className=" relative">
                        <img 
                        src={img1} alt="" />
                        <div className=" absolute top-[20px] left-[20px]
                         bg-[#C0B7E8] w-[160px] h-[160px] rounded-[50%]">
                            <h1 className='font-bold text-[80px] ml-[35px] mt-[16px]'
                            >01</h1>
                        </div>

                        <h3  className=' flex justify-center gap-[10px] text-[25px] font-bold mt-[20px]'
                        >
                        <FaArrowRightLong />
                        3D Conception <br />
                        & Design</h3>
                    </div>

                    <div className=" relative">
                        <img 
                        src={img1} alt="" />
                        <div className=" absolute top-[20px] left-[20px]
                         bg-[#C0B7E8] w-[160px] h-[160px] rounded-[50%]">
                            <h1 className='font-bold text-[80px] ml-[35px] mt-[16px]'
                            >02</h1>
                        </div>

                        <h3  className=' flex justify-center gap-[10px] text-[25px] font-bold mt-[20px]'
                        >
                        <FaArrowRightLong />
                        Interaction <br />
                        Design</h3>
                    </div>

                    <div className=" relative">
                        <img 
                        src={img1} alt="" />
                        <div className=" absolute top-[20px] left-[20px]
                         bg-[#C0B7E8] w-[160px] h-[160px] rounded-[50%]">
                            <h1 className='font-bold text-[80px] ml-[35px] mt-[16px]'
                            >03</h1>
                        </div>

                        <h3  className=' flex justify-center gap-[10px] text-[25px] font-bold mt-[20px]'
                        >
                        <FaArrowRightLong />
                        VR World <br />
                        User Testing</h3>
                    </div>

                    <div className=" relative">
                        <img 
                        src={img1} alt="" />
                        <div className=" absolute top-[20px] left-[20px]
                         bg-[#C0B7E8] w-[160px] h-[160px] rounded-[50%]">
                            <h1 className='font-bold text-[80px] ml-[35px] mt-[16px]'
                            >04</h1>
                        </div>

                        <h3  className=' flex justify-center gap-[10px] text-[25px] font-bold mt-[20px]'
                        >
                        <FaArrowRightLong />
                        Hydra VR <br />
                        Deploy</h3>
                    </div>

                   </div>

                   
                </div>
            </div>
        </div>
    );
};

export default Cards;