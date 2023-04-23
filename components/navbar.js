import { useState } from "react";

const Navbar = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"Tentang",link:"/about"},
        {name:"Kontak Kami",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 font-[Poppins]'>
            <div className='md:flex items-center justify-between bg-white py-6 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                    text-gray-800'>
                    <span className='text-3xl text-red-600 mr-1 pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                        Chokbulls
                </div>
            
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
    
                <div className={`px-6 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                            <div key={link.name} className='md:ml-10 text-sm md:my-0 my-7'>
                                <a href={link.link} className='hover:text-gray-800 duration-500'>{link.name}</a>
                            </div>
                        ))
                    }
                    <a className='text-white bg-red-600 md:ml-9 text-sm duration-500 px-5 py-2 font-semibold'>Sign in</a>
                </div>
            </div>
      </div>
    )
}

export default Navbar;