import {tv} from "tailwind-variants";

export const box = tv({
    base: "transition-all",
    slots: {
        container: "shadow-lg rounded-sm p-6 flex flex-col gap-4 w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white",
        title: "flex items-center justify-center gap-x-2 text-2xl leading-none",
    },
    variants: {
        size: {
            sm: {container: 'max-w-sm'},
            md: {container: 'max-w-md'},
            lg: {container: 'max-w-lg'}
        },
    },
});