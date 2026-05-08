import React, { useState } from 'react'
import API from '../services/api'
import PizzaLogin from '../assets/Login.png'
import Pizza from '../assets/pizza.png'
import DefaultButton from '../component/Buttons/DefaultButton'
import DefaultInput from '../component/Form/DefaultInput'
import useForm from '../hooks/useForm'
import Toast from '../component/Toast/Toast'


const RequestLink = () => {
    const { values, handleChange } = useForm({ email: '' });
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState(false);

    const handleRequestLink = async (e) => {
        e.preventDefault()

        if (!values.email) {
            setToast({ success: false, message: "Email is required" });
            return
        }

        setLoading(true)

        try {
            const res = await API.post('/auth/request-authlink', {
                email: values.email
            })

            // alert(res.data.message)
            setToast({ success: true, message: res.data.message });
        } catch (err) {
            console.log(err)
            const message = err.response?.data?.error?.message || 'Something went wrong';
            setToast({ success: false, message });
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="">
            <div className="xl:flex min-h-screen hidden">
                {toast && (
                    <div className="fixed top-8 right-8 z-50">
                        <Toast
                            success={toast.success}
                            message={toast.message}
                            onClose={() => setToast(null)}
                        />
                    </div>
                )}

                <div className="w-full relative flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-50 px-4 py-20">
                    <div className="w-full max-w-md backdrop-blur-xl bg-white/80 border border-orange-100 shadow-2xl rounded-3xl p-8">

                        <div className="flex items-center justify-center mb-6">
                            <img src={Pizza} alt="" className="h-10 w-auto" />
                            <h1 className="ml-3 text-orange-500 font-extrabold text-2xl tracking-tight">
                                My Restaurant
                            </h1>
                        </div>

                        <h2 className="text-center text-gray-800 text-lg font-semibold mb-2">
                            Sign in to continue
                        </h2>

                        <p className="text-center text-gray-500 text-sm mb-8">
                            Enter your email and we’ll send you a secure login link
                        </p>


                        <form method="post" onSubmit={handleRequestLink} className="space-y-5">
                            <DefaultInput
                                label={"Email Address"}
                                placeholder={"username@example.com"}
                                onChange={handleChange}
                                value={values.email}
                                name={'email'}
                                type='email'

                            />

                            <DefaultButton
                                type='submit'
                                label={loading ? 'Sending...' : 'Send Login Link 🚀'}
                            />
                        </form>


                        <p className="text-center text-xs text-gray-400 mt-6">
                            Secure • Fast • No Password Needed
                        </p>
                    </div>
                </div>


                <div className="w-full relative max-h-screen hidden md:block">
                    <img
                        src={PizzaLogin}
                        alt="login"
                        className="w-full h-full object-cover"
                    />


                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-orange-900/60 flex items-center justify-center">
                        <div className="text-center text-white px-6 max-w-lg">

                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                Welcome Back 🍕
                            </h1>

                            <p className="text-base md:text-lg text-white/80 mb-8">
                                Experience delicious moments with seamless access.
                                Your favorite meals are just a click away.
                            </p>


                            <div className="flex justify-center gap-4 text-sm">
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                    ⚡ Fast Login
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                    🔐 Secure
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                    🍽️ Premium
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* mobile view */}
            <div className="xl:hidden block relative overflow-hidden min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
                {toast && (
                    <div className="fixed top-8 right-8 z-50">
                        <Toast
                            success={toast.success}
                            message={toast.message}
                            onClose={() => setToast(null)}
                        />
                    </div>
                )}

                <div className="absolute top-[-140px] left-[-100px] w-80 h-80 bg-yellow-200 rounded-full opacity-60"></div>
                <div className="absolute bottom-[-140px] right-[-100px] w-80 h-80 bg-orange-300 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 left-[-120px] w-72 h-72 bg-amber-200 rounded-full opacity-50"></div>
                <div className="absolute top-20 right-[-80px] w-64 h-64 bg-yellow-300 rounded-full opacity-60"></div>

                <div className="absolute inset-0 opacity-10 
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),
        linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-[size:40px_40px]">
                </div>

                <div className="p-4 min-h-screen relative z-10 flex items-center justify-center">

                    <div className="w-full max-w-3xl bg-white/75 backdrop-blur-2xl border border-white/50 shadow-[0_25px_80px_rgba(0,0,0,0.18)] rounded-3xl p-8">

                        <div className="flex items-center justify-center mb-6">
                            <div className="p-2 bg-orange-100 rounded-2xl">
                                <img src={Pizza} alt="" className="h-10 w-auto" />
                            </div>
                            <h1 className="ml-3 text-orange-500 font-extrabold text-2xl tracking-tight">
                                My Restaurant
                            </h1>
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-gray-900 text-xl font-bold">
                                Welcome back
                            </h2>
                            <p className="text-gray-500 text-sm mt-2">
                                Enter your email to receive a secure login link instantly
                            </p>
                        </div>

                        <form method="post" onSubmit={handleRequestLink} className="space-y-5">

                            <div className="relative">
                                <DefaultInput
                                    label={"Email Address"}
                                    placeholder={"username@example.com"}
                                    onChange={handleChange}
                                    value={values.email}
                                    name={'email'}
                                    type='email'
                                />
                            </div>

                            <DefaultButton
                                type='submit'
                                label={loading ? 'Sending secure link...' : 'Send Login Link 🚀'}
                            />

                        </form>

                        <div className="mt-6 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                            <p className="text-xs text-gray-400">
                                Secure • Passwordless • Instant Access
                            </p>
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default RequestLink