import { useEffect, useState } from "react"
import Link from "next/link"
import Cookies from "js-cookie"

const Profile = () => {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const token = Cookies.get("token")
        if(token) {
            setIsLogin(true)
        }
    }, [])

    if(isLogin) {
        return(
            <Link className="text-3xl text-white hover:text-[#bdbdbd] duration-500" href="/account"><ion-icon name="person-circle-outline"></ion-icon></Link>
        )
    }
    return(
        <Link href="/sign-in" className='text-white bg-[#F05454] hover:bg-[#de3333] text-sm duration-500 px-5 py-2 font-semibold rounded-sm cursor-pointer'>Sign in</Link>
    )
}

export default Profile