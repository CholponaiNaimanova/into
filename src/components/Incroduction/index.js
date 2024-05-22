import React from 'react';
import right from '../../assets/img/right.png'
import ngr from '../../assets/img/ngr.png'
import { animated } from '@react-spring/web'

const Incroduction = () => {
    return (
        <div id="">
            <div className="">
                <div className=" text-white mt-[70px]">

                    <div className=" flex justify-center gap-[100px] items-center ">

                        <div className="text-[40px] font-semibold">
                            <h1>INTRODUCTION</h1>
                            <h2 className='font-thin text-[40px] flex items-center gap-4'
                            >TO HYDRA VR <img src={right} alt="" />
                            </h2>
                        </div>

                        <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat <br />
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo <br />
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare  <br />
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                        
                    </div>

                    <div className=" mt-[60px]">
                        <div className=" flex justify-center gap-[170px]">
                            <img src={ngr} alt="" />

                            <div className="">
                                <h1 className="text-[40px] font-semibold"
                                >ABOUT</h1>
                                <h4 className='font-thin text-[40px]'
                                >HYDRA VR</h4>

                                <p className='font-thin'>
                                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus <br />
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida <br />
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. <br />
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet <br />
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam <br />
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet <br />
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha <br />
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi  <br />
n tempor.
                                </p>

                            </div>

                        </div>
                    </div>

                    

                </div>
            </div>
        </div>
    );
};

export default Incroduction;