import { createSignal } from "solid-js";

export default function MathjaxDelimiterConverter() {
    const [text, setText] = createSignal('');
    const [convertedText, setConvertedText] = createSignal('');

    // 该函数用于替换 Mathjax 定界符
    const replaceDelimiters = () => {
        let updatedText = text();
        // 替换 \[ \] 为 $$$$（注意：可能需要根据实际 Mathjax 配置调整）
        updatedText = updatedText.replace(/\\\[/g, '$$$$').replace(/\\\]/g, '$$$$');
        // 替换 \( \) 为 $$（注意：可能需要根据实际 Mathjax 配置调整）
        updatedText = updatedText.replace(/\\\(/g, '$$').replace(/\\\)/g, '$$');
        setConvertedText(updatedText);
    };

    return (
        <>
            <h1 class="text-2xl font-bold">Mathjax Delimiter Converter</h1>
            <section class="mt-2">
                <p class="text-gray-400">
                    Enter or paste text with Mathjax delimiters (e.g., \[ \], \(\) ) below:
                </p>
                <textarea
                    class="mt-4 w-full h-24 p-2"
                    placeholder="Enter text here"
                    onInput={(e) => setText(e.currentTarget.value)}
                >
                    {text()}
                </textarea>
                <button
                    class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={replaceDelimiters}
                >
                    Convert Delimiters
                </button>
            </section>
            <section class="mt-4">
                <p class="text-gray-400">
                    Converted text with updated delimiters:
                </p>
                <textarea
                    class="mt-2 w-full h-24 p-2"
                    readonly
                    value={convertedText()}
                >
                    {convertedText()}
                </textarea>
            </section>
        </>
    );
}
