import { useState } from "react"
import { useRouter } from "next/router"
import { setSignUp } from "../service/auth"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();

    const onSubmit = async () => {
        const data = {
            email,
            username,
            password
        };

        const result = await setSignUp(data);
      
        if (result?.error === 1) {
            toast.error(result.message);
        } else {
            toast.success("Success!");
            router.push("/");
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg px-10 py-8 w-96">
                <h2 className="text-3xl mb-4 text-center font-semibold">Sign Up</h2>
                <form action="">
                    <div className="mb-6">
                        <label for="username" className="block text-gray-700 text-sm font-medium mb-2">Username:</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" 
                            placeholder="Enter your username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email"
                            className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" 
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block text-gray-700 text-sm font-medium mb-2">Create Your Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <button type="button" onClick={onSubmit} className="bg-red-500 hover:bg-red-600 transition duration-400 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup