import {tv} from "tailwind-variants";

export const form = tv({
    slots: {
        input: "p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200",
        inputFloating: "peer w-full border px-3 pt-5 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent",
        labelFloating: "absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500",
    },
    variants: {
        error: {
            true: {
                input: "border-red-500 focus:ring-red-500"
            },
        },
    },
});