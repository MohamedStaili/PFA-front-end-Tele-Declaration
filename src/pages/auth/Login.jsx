import Logo from "../../assets/logo_onicl.png";
import useAuthStore from "../../stores/authStore.js";
const Login = () => {
    const {setToken, setUser} = useAuthStore();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-sm">
                {/* Logo */}
                <img
                    className="mx-auto h-10 w-auto"
                    src={Logo}
                    alt="Your Company"
                />

                {/* Titre */}
                <h2 className="mt-10 text-center text-2xl font-bold text-gray-900 dark:text-white">
                    Sign in to your account
                </h2>

                {/* Formulaire */}
                <form className="mt-10 space-y-6">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email address
                        </label>
                        <input
                            type="email"
                            required
                            className="mt-2 w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         border border-gray-300 dark:border-gray-700
                         px-3 py-2 placeholder-gray-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>
                            <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            required
                            className="mt-2 w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         border border-gray-300 dark:border-gray-700
                         px-3 py-2 placeholder-gray-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Bouton */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login