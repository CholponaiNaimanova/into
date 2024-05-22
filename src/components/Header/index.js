import React from 'react';
import headerimg from '../../assets/img/imgHdye.png'
import headerimg2 from '../../assets/img/hydra.png'

const Header = () => {
    return (
        <div id="">
            <div className="container">

                <div className=" pt-[40px] flex items-center justify-between text-white">

                  
                        <img src={headerimg} alt=""  />
                        <img className=' absolute left-[220px]'
                        src={headerimg2} alt=""/>
               

                        <div className=" flex gap-8 ">
                            <a href="#">ABOUT</a>
                            <a href="#">SERVICES</a>
                            <a href="#">TECHNOLOGIES</a>
                            <a href="#">HOW TO</a>
                        </div>

                    <div className=" flex gap-[30px]">
                        <button className=' border-white border-[2px] rounded-[30px] p-[14px]'
                        >CONTACT US</button>
                        <button className=' bg-[#C0B7E8] rounded-[30px] p-[14px]'
                        >JOIN HYDRA</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;