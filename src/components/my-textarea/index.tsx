import { JSX } from "solid-js";

export type TextareaProps = {
    label: string;
    value: string | number;
    placeholder: string;
    labelClass?: string;
} & JSX.HTMLAttributes<HTMLTextAreaElement>;

export default function MyTextarea(props: TextareaProps) {

    return (
        <div class="flex items-center gap-2">
            <label class={
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white" +
                (props.labelClass ?? "")
            }
                for={props.id}
            >
                {props.label}
            </label>
            <textarea
                {...props}
                class={"bg-gray-200 appearance-none border-2 border-gray-200 " +
                    "py-1 px-2 text-gray-700 focus:outline-none focus:bg-white " +
                    "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                    " dark:focus:bg-gray-600 dark:focus:border-gray-600 dark:text-white "
                    + (props.class ?? "")
                }
            >
                {props.children}
            </textarea>


        </div >
    );
}
