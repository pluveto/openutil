import { createSignal, createEffect } from "solid-js";

export default function MathjaxDelimiterConverter() {
    const [text, setText] = createSignal('');
    const [convertedText, setConvertedText] = createSignal('');
    const [isDarkMode, setIsDarkMode] = createSignal(false);

    // Function to replace Mathjax delimiters
    const replaceDelimiters = (input) => {
        let updatedText = input;
        // Replace $$ $$ with $$$$
        updatedText = updatedText.replace(/\\$$/g, '$$$$').replace(/\\\\$$/g, '$$$$');
        // Replace $$ $$ with $$
        updatedText \= updatedText.replace(/\\\\\$$/g, '$$').replace(/\\\\$$/g, '$$');
        return updatedText;
    };

    // Effect to automatically convert delimiters when text changes
    createEffect(() => {
        const inputText = text();
        const converted = replaceDelimiters(inputText);
        setConvertedText(converted);
    });

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode());
    };

    return (
        <div class={isDarkMode() ? "bg-gray-900 text-white" : "bg-white text-black"}>
            <h1 class="text-2xl font-bold">Mathjax Delimiter Converter</h1>
            <section class="mt-2">
                <p class={isDarkMode() ? "text-gray-300" : "text-gray-600"}>
                    Enter or paste text with Mathjax delimiters (e.g., $$ $$, $$$$ ) below:
                </p>
                <textarea
                    class={`mt-4 w-full h-24 p-2 ${isDarkMode() ? "bg-gray-800 text-white" : "bg-white text-black"}`}
                    placeholder="Enter text here"
                    onInput={(e) => setText(e.currentTarget.value)}
                    value={text()}
                />
            </section>
            <section class="mt-4">
                <p class={isDarkMode() ? "text-gray-300" : "text-gray-600"}>
                    Converted text with updated delimiters:
                </p>
                <textarea
                    class={`mt-2 w-full h-24 p-2 ${isDarkMode() ? "bg-gray-800 text-white" : "bg-white text-black"}`}
                    readonly
                    value={convertedText()}
                />
            </section>
            <button
                class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
        </div>
    );
}
