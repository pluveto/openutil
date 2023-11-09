import { JSX } from "solid-js";

export type CheckboxProps = {
    label: string;
    checked: boolean;
} & JSX.HTMLAttributes<HTMLInputElement>;

export default function MyCheckbox(props: CheckboxProps) {

    return (
        <div class="flex items-center">
            <input
                {...props}
                type="checkbox"
                class={"w-4 h-4 rounded " +
                    "text-blue-600 bg-gray-100 border-gray-300 " +
                    "focus:ring-blue-500 focus:ring-2 " +
                    "dark:focus:ring-blue-600 " +
                    "dark:ring-offset-gray-800 dark:bg-gray-700 " +
                    "dark:border-gray-600"
                }
            />
            <label
                for={props.id}
                class={"ml-2 text-sm font-medium " +
                    "text-gray-900 dark:text-gray-300"}>{props.label}</label>
        </div >
    );
}
