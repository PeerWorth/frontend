'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/className';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-6 flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-[5px] w-full grow overflow-hidden rounded-full bg-neutral-50'>
      <SliderPrimitive.Range className='absolute h-full bg-primary-500' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block h-7 w-7 rounded-full border-[1px] border-neutral-50 bg-neutral-0 ring-offset-neutral-50 transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 slider-thumb-shadow' />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
