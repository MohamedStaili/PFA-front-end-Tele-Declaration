import Logo from "../../assets/logo_onicl.png";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useLogin, useMe} from "../../api/auth/auth.queries.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import useAuthStore from "../../stores/authStore.js";


const Login = () => {
    const navaigation = useNavigate();
    const LoginMutation = useLogin();
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {email: "", password: ""};
    const authStore = useAuthStore();
    const meQuery = useMe();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            email: Yup
                .string()
                .required("Email is required")
                .email("this is email not valid"),
            password: Yup
                .string()
                .min(8, "8 lettres minimum")
                .required("Password is required")
        }),
        onSubmit: async (values, {resetForm, setStatus}) => {
            setIsLoading(true);
            formik.setStatus(null);
            LoginMutation.mutate(values, {
                onSuccess: async () => {
                    //const user = authStore.user;
                    const data = await meQuery.refetch();
                    const user = data.data;
                    console.log(user);
                    if(user!==null) {
                        const rolePrincipal = user.roles[0];
                        console.log(rolePrincipal);
                        if (rolePrincipal === "ROLE_Importateur") {
                            navaigation('/importateur');
                        }
                        if (rolePrincipal === "ROLE_Admin") {
                            navaigation('/admin');
                        }
                    }
                },
                onError: (err) => {
                    console.log(err.response.data);
                    setStatus(err.response.data);
                    //resetForm();
                },
                onSettled: () => {
                    setIsLoading(false);
                }
            });
        }
    })
    const getFieldMeta = (name) => ({
        touched: formik.touched[name],
        error: formik.errors[name],
    });

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center px-6 py-12 lg:px-8 bg-gray-50 dark:bg-gray-900">
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
                <form className="mt-10 space-y-6" onSubmit={formik.handleSubmit}>
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            type="email"
                            required
                            className={`mt-2 w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         border border-gray-300 dark:border-gray-700
                         px-3 py-2 placeholder-gray-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                            ${
                                getFieldMeta("email").error && getFieldMeta("email").touched
                                    ? "border-red-500"
                                    : "border-gray-300 dark:border-gray-600"
                            }
                            `}
                        />
                        {getFieldMeta("email").error && getFieldMeta("email").touched && (
                            <p className="text-red-500 text-sm mt-1">{getFieldMeta("email").error}</p>)}
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

                            name="password"
                            id="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            required
                            className={`mt-2 w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         border border-gray-300 dark:border-gray-700
                         px-3 py-2 placeholder-gray-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                                ${
                                getFieldMeta("password").error && getFieldMeta("password").touched
                                    ? "border-red-500"
                                    : "border-gray-300 dark:border-gray-600"
                            }
                            `
                            }
                        />
                        {getFieldMeta("password").error && getFieldMeta("password").touched && (
                            <p className="text-red-500 text-sm mt-1">{getFieldMeta("password").error}</p>)}
                    </div>

                    {/* Bouton */}
                    <button
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                        className={`w-full rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2
                        ${
                            formik.isValid && formik.dirty
                                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                                : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                        }
                        `}
                    >
                        {isLoading ?
                            (<div className="flex items-center justify-center gap-2">
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 animate-spin"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591
                                               50 100.591C22.3858 100.591 0 78.2051
                                               0 50.5908C0 22.9766 22.3858 0.59082
                                               50 0.59082C77.6142 0.59082 100 22.9766
                                               100 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038
            97.8624 35.9116 97.0079 33.5539..."
                                            fill="currentFill"
                                        />
                                    </svg>
                                    Loading...
                                </div>
                            ) : (
                                "Sign In")
                        }
                    </button>
                </form>
                {formik.status && <div className="text-red-500">{formik.status}</div>}
            </div>
        </div>
    )
}

export default Login