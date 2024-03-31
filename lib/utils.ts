import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function variant(base: string, variants: {[key: string]: any}) {
   return function builder(props: {[key: string]: any}) {
    const classes: string[] = []
    Object.entries(props).forEach(([key, value]) => {
      if (!(key in variants)) {
        return console.warn("not found", key)   
      }
      classes.push(variants[key][value])
    })

    return cn(base, ...classes)
   }
}
