import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import  './ProtpolioTab.css'
const ProtfolioTab = () => {
    return (
        
        <div className='mb-12  '>
            <Tabs>
                <TabList className="flex justify-center gap-10 font-semibold items-center mb-7 pt-5 ">
                    <Tab className='hover:text-pink-400 cursor-pointer hover:underline'>ALL</Tab>
                    <Tab className='hover:text-pink-400 cursor-pointer hover:underline'>HAIR</Tab>
                    <Tab className='hover:text-pink-400 cursor-pointer hover:underline'>MAKEUP</Tab>
                    <Tab className='hover:text-pink-400 cursor-pointer hover:underline'>MANICURE & PEDICURE</Tab>
                    <Tab className='hover:text-pink-400 cursor-pointer hover:underline'>HAIR REMOVAL</Tab>
                </TabList>

                <TabPanel>
                   <div className='max-w-screen-xl mx-auto'>
                    <div className='flex gap-10'>
                            <div className="relative">
                                <img
                                    className='h-[650px]'
                                    src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/gallery-1-570x570.jpg"
                                    alt=""
                                />
                                <div className="absolute p-5 text-red-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                                        <div className='border-2 border-gray-300 h-full rounded-xl'>
                                        <div className='flex justify-center items-center mt-[300px]'>
                                            <button  className="buttonDesign">Explore More</button>
                                       </div>
                                        </div>
                                </div>
                            </div>

                     <div className='grid grid-cols-2 gap-4'>
                                <div className='relative'>
                                    <img className='w-[340px]' src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/gallery-2-570x570.jpg" alt="" />
                                    <div className="absolute p-5 text-red-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                                        <div className='border-2 border-gray-300 h-full rounded-xl'>
                                            <div className='flex justify-center items-center mt-32'>
                                                <button className="btn">Explore More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <img className='w-[340px]' src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/gallery-3-570x570.jpg" alt="" />
                                    <div className="absolute p-5 text-red-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                                        <div className='border-2 border-gray-300 h-full rounded-xl'>
                                            <div className='flex justify-center items-center mt-32'>
                                                <button className="btn">Explore More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <img className='w-[340px]' src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/gallery-4-570x570.jpg" alt="" />
                                    <div className="absolute p-5 text-red-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                                        <div className='border-2 border-gray-300 h-full rounded-xl'>
                                            <div className='flex justify-center items-center mt-32'>
                                                <button className="btn">Explore More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <img className='w-[340px]' src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/gallery-5-570x570.jpg" alt="" />
                                    <div className="absolute p-5 text-red-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                                        <div className='border-2 border-gray-300 h-full rounded-xl'>
                                            <div className='flex justify-center items-center mt-32'>
                                                <button className="btn">Explore More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                     </div>
                    </div>
                   </div>

                </TabPanel>

                <TabPanel>
                    <div className='max-w-screen-xl mx-auto flex gap-2 items-center justify-center'>
                        <div className=''>
                            <a href="#"> <img src="https://i.ibb.co/Tk8D2T2/image.png" alt="" /></a>
                        </div>

                        <div>
                            <img src="https://i.ibb.co/7XYnwxT/image.png" alt="" />
                        </div>

                        <div>
                            <img className='h-[540px]' src="https://i.ibb.co/vPygSwm/image.png" alt="" />
                        </div>
                       
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='max-w-screen-xl mx-auto flex gap-2'>
                        <div>
                            <img src="https://i.ibb.co/fYB1Sks/image.png" alt="" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/cyybY5v/image.png" alt="" />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='max-w-screen-xl mx-auto flex gap-2'>
                        <div>
                            <img src="https://i.ibb.co/VBgHrwD/image.png" alt="" />
                        </div>
                        <div>
                            <img className='h-[540px] w-[360px]' src="https://i.ibb.co/c8Gzcbx/image.png" alt="" />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="">
                    <div className='max-w-screen-xl mx-auto  flex gap-4 items-center justify-center'>
                        <div className=''>
                            <img  className='w-[400px] h-[500px]' src="https://i.ibb.co/P4BhwL5/image.png" alt="" />
                        </div>

                        <div>
                            <img className='h-[500px]  ' src="https://i.ibb.co/dcxLjH0/image.png" alt="" />
                        </div>
                        <div>
                            <img className='h-[500px]' src="https://i.ibb.co/nsH6622/image.png" alt="" />
                        </div>


                    </div>
                    
                    
                </TabPanel>
            </Tabs>


          
        </div>
    );
};

export default ProtfolioTab;