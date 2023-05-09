import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie";

import { setLogin } from "../service/auth";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const onSubmit = async() => {
        const data = {
            email,
            password
        }

        if(!email || !password) {
            toast.error("Email dan Password wajib diisi!")
        } else {
            const response = await setLogin(data)
            if(response.error) {
                toast.error(response.message)
            } else {
                toast.success("Login Berhasil! Refresh dahulu")
                const { token } = response.data
                const tokenBase64 = btoa(token)
                Cookies.set("token", tokenBase64, { expires: 7 })
                router.push("/")
            }
        }
    }
    return (
        <div class="flex justify-center items-center">
            <div class="bg-white shadow-md rounded-lg px-10 py-8 w-96">
                <h2 class="text-3xl mb-4 text-center font-semibold">Sign In</h2>
                <form>
                    <div class="mb-6">
                        <label for="email" class="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                        <input 
                            type="text" 
                            id="email"
                            name="email"
                            class="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" 
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-gray-700 text-sm font-medium mb-2">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            class="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div class="flex justify-between items-center mb-6">
                        <button type="button" onClick={onSubmit} class="bg-red-500 hover:bg-red-600 transition duration-400 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Sign In</button>
                    </div>
                </form>
                <div class="text-center">
                    Don't have an account? <Link href="/sign-up" class="text-blue-500 hover:text-blue-600 text-sm">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin