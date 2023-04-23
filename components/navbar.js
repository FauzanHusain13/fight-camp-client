import { useState } from "react";

const Navbar = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"Tentang",link:"/about"},
        {name:"Kontak Kami",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
    return (
        <div className='shadow-md w-full mt-[-90px] top-0 left-0 bg-[#121212] font-[Poppins]'>
            <div className='md:flex justify-between py-6 md:px-10 px-7'>
                <div className='text-lg sm:text-2xl font-bold cursor-pointer flex items-center font-[Poppins] 
                    text-white'>
                    <span className='text-2xl sm:text-3xl text-[#F05454] mr-1 pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                        Chokbulls
                </div>
            
                <div onClick={()=>setOpen(!open)} className='text-2xl text-white sm:text-3xl absolute right-8 top-6 my-auto cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
    
                <div className={`px-6 md:flex md:items-center md:pb-0 pb-12 bg-[#121212] absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                            <div key={link.name} className='md:ml-10 text-sm md:my-0 my-7'>
                                <a href={link.link} className='text-white duration-500'>{link.name}</a>
                            </div>
                        ))
                    }
                    <a className='text-white bg-[#F05454] md:ml-9 text-sm duration-500 px-5 py-2 font-semibold rounded-sm cursor-pointer'>Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;