import Link from "next/link"

const Contact = () => {
    return(
        <div className="px-20 mt-24 pb-20 md:pb-0">
            <div className="gap-20 md:gap-0 flex justify-evenly text-2xl sm:text-3xl md:text-4xl text-white text-center">
                <Link href="/" className="hover:text-[#e43f94] text-white transition duration-400">
                    <ion-icon name="logo-instagram"></ion-icon>
                </Link>
                <Link href="/" className="hover:text-[#4295f5] text-white transition duration-400">
                    <ion-icon name="logo-twitter"></ion-icon>
                </Link>
                <Link href="/" className="hover:text-[#325af9] text-white transition duration-400">
                    <ion-icon name="logo-facebook"></ion-icon>
                </Link>
                <Link href="/" className="hover:text-[#25c94e] text-white transition duration-400">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default Contact