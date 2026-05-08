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
        <div className="md:flex max-h-screen">
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
                            label={ loading ? 'Sending...' : 'Send Login Link 🚀'}
                        />
                    </form>


                    <p className="text-center text-xs text-gray-400 mt-6">
                        Secure • Fast • No Password Needed
                    </p>
                </div>
            </div>


            <div className="w-full relative hidden md:block">
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
    )
}

export default RequestLink