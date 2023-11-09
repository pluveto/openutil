import { JSX } from "solid-js";

export type ButtonProps =
    {
        type?: "button" | "submit" | "reset";
    } & JSX.HTMLAttributes<HTMLButtonElement>;

export default function MyButton(props: ButtonProps) {
    return <button
        {...props}
        class={
            "mt-4 bg-blue-500 text-white px-2 py-1 flex items-center " +
            "dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 " +
            "dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
            (props.class ?? "")
        }
    >
        {props.children}
    </button>
}
