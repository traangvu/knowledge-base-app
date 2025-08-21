import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({ className, ...props }: InputProps) {
    return (
        <input
        className={cn(
            "w-full rounded-xl border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",
            className
        )}
        {...props}
        />
    );
}
