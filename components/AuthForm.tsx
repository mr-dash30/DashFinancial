"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,

} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import CustomForm from "./CustomForm";
import { AuthFormSchema } from "@/lib/utils";
import {useRouter}  from 'next/navigation';

import { getLoggedInUser, signIn, signUp } from "@/lib/action/user.actions";





const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    
    const formSchema = AuthFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setLoading(true);

        try{
            if (type === "sign-in") {
                console.log(values);
            
                const response = await signIn({email : values.email, password: values.password});
                
                if(response)  router.push('/');
            }

            else {
                // Sign up logic
                console.log(values);
                const newUser = await signUp(values);
                setUser(newUser);
             
            }
        }
        catch(e){
            console.error(e);
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/" className="cursor-pointer flex items-center gap-1 ">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                    />
                    <h2 className=" text-26 font-ibm-plex-serif font-bold text-black-1">
                        Dash
                    </h2>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {user
                            ? "Link account"
                            : type === "sign-in"
                                ? "Sign-in to your account"
                                : "Create an account"}
                        <p className="text-14 font-normal text-gray-500">
                            {user
                                ? "Link your bank account to get started"
                                : type === "sign-in"
                                    ? "Enter your details below"
                                    : "Enter your details below"}
                        </p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-5">plaidlink</div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {
                                type == "sign-up" && (
                                    <>
                                        <div className="flex  gap-4">
                                            <CustomForm control={form.control} name="firstName" placeholder="ex: Dash" label="First Name" type="text" />
                                            <CustomForm control={form.control} name="lastName" placeholder="ex: Doe" label="Last Name" type="text" />
                                        </div>
                                        <CustomForm control={form.control} name='address' placeholder='ex: 123 Main Street' label='Address' type='text' />
                                        <div className="flex  gap-4">
                                            <CustomForm control={form.control} name='city' placeholder='ex: New York' label='City' type='text' />
                                            <CustomForm control={form.control} name='country' placeholder='ex: USA' label='Country' type='text' />
                                        </div>
                                        <div className="flex  gap-4">
                                            <CustomForm control={form.control} name='state' placeholder='ex: New York' label='State' type='text' />
                                            <CustomForm control={form.control} name='postalCode' placeholder='ex: 12345' label='Postal Code' type='text' />
                                        </div>
                                        <div className="flex  gap-4">
                                            <CustomForm control={form.control} name='dateOfBirth' placeholder='ex: 01/01/2000' label='Date of Birth' type='text' />
                                            <CustomForm control={form.control} name='ssn' placeholder='ex: 123-45-6789' label='SSN' type='text' />
                                        </div>
                                    </>
                                )
                            }

                            <CustomForm control={form.control} name="email" placeholder="Enter your email" label="Email" type="email" />
                            <CustomForm control={form.control} name="password" placeholder="Enter your password" label="Password" type="password" />
                            <div className="flex flex-col  gap-4 justify-end">
                                <Button type="submit" className="form-btn " disabled={loading}>
                                    {loading ? (
                                        <>
                                            <Loader2 size={20} className="loader animate-spin" />
                                            &nbsp; Loading...
                                        </>
                                    ) : type === "sign-in" ? (
                                        "Sign in"
                                    ) : (
                                        "Create account"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <footer className="flex  justify-center gap-5">
                        <p className="text-14 font-normal text-gray-500">
                            {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="form-link">

                            {type === "sign-in" ? "Create an account" : "Sign in"}

                        </Link>
                    </footer>
                </>
            )}
        </section>
    );
};

export default AuthForm;
