
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export const iframeHeight = "600px"

export const containerClassName =
    "w-full h-screen flex items-center justify-center px-4"

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {


        try {
            if (!email || !password) {
                console.log("email, password");
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: "Please Select all required feilds",
                })
                return
            }
            if (password.length <= 5) {

                toast({
                    title: "Oops Error!",
                    description: "password should have more than 5 characters",
                })
                return
            }

            const response = await axios.post('http://localhost:3000/api/v1/signup', { email, password })
            console.log(response?.data);
            toast({
                title: "Signup Success!",
                description: "you can now login to use app"
            })
            navigate('/login')
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: error?.message || "Uh oh! Something went wrong.",
                    description: error?.response?.data?.message || `please try again after sometime`,
                })
                console.log(error);
            } else {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: `please try again after sometime`,
                })
                console.log(error);
            }
        }
    }
    return (
        <Card className="mx-auto md:mt-[100px] max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl mx-auto">Sign Up</CardTitle>
                <CardDescription>
                    Enter your email below to create  your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            {/* <a href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </a> */}
                        </div>
                        <Input id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} type="password" required />
                    </div>
                    <Button type="submit" onClick={handleSubmit} className="w-full">
                        Sign up
                    </Button>

                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login " className="underline">Login</Link>

                </div>
            </CardContent>
        </Card>
    )
}