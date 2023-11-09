import { JSX } from "solid-js";

export type SelectProps = {
    label: string;
    options: {
        value: string;
        label: string;
    }[];
} & JSX.HTMLAttributes<HTMLSelectElement>;

export default function MySelect(props: SelectProps) {

    return (
        <div class="flex items-center gap-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for={props.id}
            >
                {props.label}
            </label>
            <select
                {...props}
                class={
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm " +
                    "focus:ring-blue-500 focus:border-blue-500 block py-2 px-1 " +
                    "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                    "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}>
                <option selected>(empty)</option>
                {
                    props.options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div >
    );
}
