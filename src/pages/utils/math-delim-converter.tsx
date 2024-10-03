import { createSignal, createEffect } from "solid-js";

export default function MathjaxDelimiterConverter() {
    const [text, setText] = createSignal('');
    const [convertedText, setConvertedText] = createSignal('');

    // Function to replace Mathjax delimiters
    const replaceDelimiters = (input) => {
        let updatedText = input;
        updatedText = updatedText.replace(/\\\( /g, '$$').replace(/ \\\)/g, '$$');
        updatedText = updatedText.replace(/\\\[/g, '$$$$').replace(/\\\]/g, '$$$$');
        updatedText = updatedText.replace(/\\\(/g, '$$').replace(/\\\)/g, '$$');
        return updatedText;
    };

    // Effect to automatically convert delimiters when text changes
    createEffect(() => {
        const inputText = text();
        const converted = replaceDelimiters(inputText);
        setConvertedText(converted);
    });

    return (
        <div class="bg-white text-black dark:bg-gray-900 dark:text-white">
            <h1 class="text-2xl font-bold">Mathjax Delimiter Converter</h1>
            <section class="mt-2">
                <p class="text-gray-600 dark:text-gray-300">
                    Enter or paste text with Mathjax delimiters (e.g., $$ $$, $$$$ ) below:
                </p>
                <textarea
                    class="mt-4 w-full h-24 p-2 bg-white text-black dark:bg-gray-800 dark:text-white"
                    placeholder="Enter text here"
                    onInput={(e) => setText(e.currentTarget.value)}
                    value={text()}
                />
            </section>
            <section class="mt-4">
                <p class="text-gray-600 dark:text-gray-300">
                    Converted text with updated delimiters:
                </p>
                <textarea
                    class="mt-2 w-full h-24 p-2 bg-white text-black dark:bg-gray-800 dark:text-white"
                    readonly
                    value={convertedText()}
                />
            </section>
        </div>
    );
}
