import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import Button from './Button'
import Input from './Input'
import Logo from './Logo'


const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
        const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
    const [error, setError] = useState("")

    const handleSignup = async (data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
            const userData = await authService.getCurrentUser()
            if (userData) {
                    dispatch(authLogin(userData))
                    navigate('/')
            }
            }
        } catch (error) {
            setError(error.message || 'Unable to create your account')
        }
    }

  return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex justify-center">
                    <Logo width="120px" />
                </div>

                <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">Create an account</h1>
                <p className="mb-6 text-center text-sm text-gray-600">Start sharing your stories today.</p>

                <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
                    <Input
                        label="Name"
                        type="text"
                        placeholder="Enter your name"
                        autoComplete="name"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email format',
                            },
                        })}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Create a password"
                        autoComplete="new-password"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 8, message: 'Password must be at least 8 characters' },
                        })}
                    />
                    {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? 'Creating account...' : 'Sign Up'}
                    </Button>
                </form>

                <p className="mt-5 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
  )
}

export default Signup