import Link from "next/link"

const Contact = () => {
    return(
        <div className="px-20 mt-24">
            <div className="grid grid-cols-2 gap-20 md:gap-0 sm:flex sm:justify-evenly text-4xl text-white text-center">
                <Link href="/">
                    <ion-icon name="logo-instagram"></ion-icon>
                </Link>
                <Link href="/">
                    <ion-icon name="logo-twitter"></ion-icon>
                </Link>
                <Link href="/">
                    <ion-icon name="logo-facebook"></ion-icon>
                </Link>
                <Link href="/">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default Contact