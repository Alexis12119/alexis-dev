import { cn } from "@/utils/cn";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const inputClasses =
  "w-full px-4 py-3 text-sm border border-border bg-white text-foreground placeholder:text-muted focus:outline-none focus:border-foreground focus:ring-1 focus:ring-foreground hover:border-foreground transition-colors";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FormInput({ label, className, ...props }: FormInputProps) {
  return (
    <div>
      <label htmlFor={props.id} className="sr-only">
        {label}
      </label>
      <input className={cn(inputClasses, className)} {...props} />
    </div>
  );
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function FormTextarea({ label, className, ...props }: FormTextareaProps) {
  return (
    <div className="flex-1">
      <label htmlFor={props.id} className="sr-only">
        {label}
      </label>
      <textarea className={cn(inputClasses, "resize-none h-full", className)} {...props} />
    </div>
  );
}
