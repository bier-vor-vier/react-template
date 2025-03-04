import {tv} from "tailwind-variants";

const header = tv({
    base: "bg-gray-100 dark:bg-gray-800 shadow-md p-4 flex gap-4 items-center",
});

const main = tv({
    base: "flex-1 p-6 overflow-auto bg-white dark:bg-gray-700 shadow-md",
});

const sidebar = tv({
    base: "h-screen shadow-md bg-gray-200 text-black dark:bg-gray-900 dark:text-white flex flex-col p-1 transition-all duration-300",
    variants: {
        collapsed: {
            true: "w-auto",
            false: "w-48",
        },
    },
});

const link = tv({
    base: "flex items-center py-2 px-3 rounded",
    variants: {
        active: {
            true: "text-gray-900 bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-800",
            false: "text-gray-900 hover:bg-gray-300 dark:hover:bg-blue-800 dark:text-gray-300",
        },
    },
});


export { header, sidebar, link , main};