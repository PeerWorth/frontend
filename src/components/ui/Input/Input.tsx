import { cva } from 'class-variance-authority';
import * as React from 'react';
import { InputHTMLAttributes, Ref } from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  ref?: Ref<HTMLInputElement>;
}

const helperTextVariant = cva('!text-caption-1', {
  variants: {
    error: {
      true: 'text-alert',
      false: 'text-neutral-500',
    },
  },
  defaultVariants: {
    error: false,
  },
});

const Input = ({
  className,
  type,
  label,
  helperText,
  error,
  ...props
}: InputProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label className='text-label-1 font-semibold text-neutral-700'>
          {label}
        </label>
      )}
      <div className='relative'>
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-xl border bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-300 disabled:cursor-not-allowed disabled:bg-neutral-25 disabled:text-neutral-300',
            error
              ? 'border-alert focus:outline-alert'
              : 'border-neutral-100 focus:outline-primary-500',
            className
          )}
          {...props}
        />
      </div>
      {helperText && (
        <p className={cn(helperTextVariant({ error }))}>{helperText}</p>
      )}
    </div>
  );
};

Input.displayName = 'Input';

export { Input };
