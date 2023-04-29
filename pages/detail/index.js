import Image from "next/image";
import { useState } from "react";

const Detail = () => {
    return (
        <div className="px-20 mt-[-40px] m-auto">
            <Image className="w-full h-[250px] object-cover" src="/img/gambar-training.jpg" width={500} height={0} />
            <hr className="mt-10" />
            <div className="mt-10 text-white">
                <div className="">
                    <h1 className="text-2xl font-semibold tracking-wide">Muay Thai</h1>
                    <p className="mt-5 text-white/60 text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, enim a aliquet mattis, nisi arcu fermentum tortor, vel fringilla massa mauris ut metus. Curabitur tristique tincidunt justo, vitae auctor turpis lacinia a. Sed fringilla turpis at tortor suscipit, sit amet faucibus elit iaculis. Suspendisse ac eleifend leo.
                    </p>
                </div>
                <form action="/checkout" method="POST" className="mt-20">
                    <h1 className="text-2xl font-semibold">Membership</h1>
                    <div className="grid grid-cols-3 gap-5 mt-8">
                        <label className="">
                            <input className="hidden" type="radio" id="package" name="topup" value=""/>
                            <div className="rounded-md bg-red-200/10 hover:border-2 hover:border-red-600 p-7 cursor-pointer transition-all duration-100">
                                <h1 className="text-2xl font-semibold">Student</h1>
                                <p className="mt-2">250000</p>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Detail;