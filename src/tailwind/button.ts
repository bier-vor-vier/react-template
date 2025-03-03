import {tv} from "tailwind-variants";

const button = tv({
    base: "px-4 py-2 rounded-sm font-medium transition-all duration-200 flex items-center justify-center gap-2",
    variants: {
        theme: {
            light: "bg-gray-200 text-black hover:bg-gray-300",
            dark: "bg-gray-800 text-white hover:bg-gray-700",
        },
        variant: {
            primary: "bg-blue-900 text-white hover:bg-blue-700 disabled:bg-gray-600",
            secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
            error: "bg-red-500 text-white hover:bg-red-600",
            outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
        },
        size: {
            sm: "px-3 py-1 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-5 py-3 text-lg",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});
export {button};