const Signup = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg px-10 py-8 w-96">
                <h2 className="text-3xl mb-4 text-center font-semibold">Sign Up</h2>
                <form>
                    <div className="mb-6">
                        <label for="username" className="block text-gray-700 text-sm font-medium mb-2">Username:</label>
                        <input type="username" id="username" className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" placeholder="Enter your username"/>
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                        <input type="email" id="email" className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email address"/>
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block text-gray-700 text-sm font-medium mb-2">Create Your Password:</label>
                        <input type="password" id="password" className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" placeholder="Enter your password"/>
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block text-gray-700 text-sm font-medium mb-2">Confirm Your Password:</label>
                        <input type="password" id="password" className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500" placeholder="Enter your password"/>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <button type="submit" className="bg-red-500 hover:bg-red-600 transition duration-400 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup