
"use client";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";



const SignInPage = () => {
    const { login, user } = useAuth();

    const handleLogin = () => {
        // Perform your auth logic here, then call login()
        const fakeToken = "abc-123-token";
        const user = { name: "Double D", email: "double_d@sayit.com" };
        login(fakeToken, user);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4">Sign In</h1>
                <p className="text-gray-600 mb-6">Welcome back! Please sign in to continue.</p>
                <form action="" className=" p-6 space-y-4 w-80">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="amos@sayit.com"
                            className="border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            className="border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <Button
                        onClick={handleLogin}
                        label="Sign In"
                        className="bg-sky-700 hover:bg-sky-800 w-full text-white font-semibold py-2 px-4 rounded transition-colors"
                    />
                </form>
                <p className="text-gray-600">Don&apos;t have an account? <Link href="/signup" className="text-sky-500 hover:underline">Sign up</Link></p>
            </div>
            
        </div>
    );
}

export default SignInPage;