import React from 'react';
import headerimg from '../../assets/img/imgHdye.png'
import faceB from '../../assets/img/facebook.png'


const Footer = () => {
    return (
        <div className=" mt-[120px] text-white">
            <div className=" flex justify-center gap-[160px]">
                <img src={headerimg} alt="" width={150}/>

                <div className="">
                    <p>ABOUT</p>
                    <p>SERVICES</p>
                    <p>TECHNOLOGIES</p>
                    <p>HOW TO</p>
                    <p>JOIN HYDRA</p>
                </div>

                <div className="">
                    <p>F.A.Q</p>
                    <p>SITEMAP</p>
                    <p>TECHNOLOGIES</p>
                    <p>CONDITIONS</p>
                    <p>JLICENSES</p>
                </div>

                <div className="">

                    <h1>SOCIALIZE WITH HYDRA</h1>

                    <div className="flex gap-[15px] mt-[30px]">
                        <img src={faceB} alt="" />
                        <img src={faceB} alt="" />
                        <img src={faceB} alt="" />
                        <img src={faceB} alt="" />
                        <img src={faceB} alt="" />
                        <img src={faceB} alt="" />
                    </div>

                    <button className=' font-semibold text-[15px] mt-[40px] pr-[40px] pl-[40px] bg-[#C0B7E8] rounded-[30px] p-[14px] text-black'
                    >BUILD YOUR WORLD</button>
                </div>

            </div>
            <div className=" border-white w-[1150px] border-b-2 mt-[40px] ml-[200px]"></div>

            <h1 className=' text-center m-[40px] text-[20px] font-bold'
            >2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h1>
        </div>
    );
};

export default Footer;