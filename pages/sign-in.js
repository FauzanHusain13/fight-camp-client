import Link from "next/link"

const Signin = () => {
    return (
        <div class="flex justify-center items-center">
            <div class="bg-white shadow-md rounded-lg px-10 py-8 w-96">
                <h2 class="text-3xl mb-4 text-center font-semibold">Sign In</h2>
                <form>
                    <div class="mb-6">
                        <label for="email" class="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                        <input type="email" id="email" class="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email address"/>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-gray-700 text-sm font-medium mb-2">Password:</label>
                        <input type="password" id="password" class="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" placeholder="Enter your password"/>
                    </div>
                    <div class="flex justify-between items-center mb-6">
                        <button type="submit" class="bg-red-500 hover:bg-red-600 transition duration-400 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Sign In</button>
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