import React from 'react'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FieldPath } from "react-hook-form";
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
import { Control } from 'react-hook-form';
import { AuthFormSchema } from "@/lib/utils";

const formSchema = AuthFormSchema("sign-up");

interface CustomFormProps {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    placeholder: string;
    label: string;
    type: string;
    }

const CustomForm = ({
    control, name, placeholder , label , type

}: CustomFormProps) => {
  return (
    <FormField
              control={control}
              name={name}
              render={({ field }) => (
                <div className="form-item">
                  <FormLabel htmlFor="email" className="form-label">
                    {label}
                  </FormLabel>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Input
                        placeholder={placeholder}
                        id="email"
                        className="input-class "
                        {...field}
                        type={type}
                      />
                    </FormControl>
                  </div>

                  <FormMessage
                    
                    className="form-message mt-2"
                  />
                </div>
              )}
            />
  )
}

export default CustomForm