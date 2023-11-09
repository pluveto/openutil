import { createSignal, onCleanup } from "solid-js";
import { IoArrowBack } from 'solid-icons/io'
import { useParams, useSearchParams } from "@solidjs/router";
enum Mode {
    Edit = 'edit',
    View = 'view',
}

export default function Index() {
    const textStoreKey = 'u.trans-trainer.text'
    const [text, setText] = createSignal(localStorage.getItem(textStoreKey) || '');
    const saveState = () => {
        localStorage.setItem(textStoreKey, text());
    };

    const [searchParams, setSearchParams] = useSearchParams();
    const [mode, setMode] = createSignal(searchParams.mode || Mode.Edit);

    const pairs = (text: string) => {
        const lines = text.split("\n");
        const linePairs = [];
        if (lines.length % 2 === 1) {
            lines.push("");
        }
        for (let i = 0; i < lines.length; i += 2) {
            linePairs.push([lines[i], lines[i + 1]]);
        }

        console.log(linePairs);
        return linePairs;
    }


    return (
        <main class="bg-gray-100 text-gray-700 p-8">
            <h1 class="text-2xl font-bold">Translation Trainer</h1>
            {
                mode() === Mode.Edit &&
                <section class="mt-2">
                    <form>
                        <label for="textarea">Alternating Text:</label>
                        <p class="text-gray-400">Please alternate the original text and translation line by line, with the original text on the first line and the translation on the second line, and so on.</p>
                        <textarea
                            id="textarea"
                            class="mt-4 w-full h-24 p-2"
                            placeholder="Enter text here"
                            onInput={(e) => setText(e.currentTarget.value)}
                        >
                            {text()}
                        </textarea>

                        <button
                            type="submit"
                            class="mt-4 bg-blue-500 text-white px-2 py-1 ml-auto"
                            onClick={(e) => {
                                e.preventDefault();
                                saveState();
                                setMode(Mode.View);
                                setSearchParams({ mode: Mode.View });

                            }}
                        >Confirm</button>
                    </form>
                </section>
            }
            {
                mode() === Mode.View &&
                <section class="mt-2">
                    <ol>
                        {pairs(text()).map(([original, translation], index) => (
                            <li class="flex">
                                <div class="mr-1 text-slate-500 font-serif select-none">
                                    [{index + 1}]
                                </div>
                                <div class="right">
                                    <div>{original}</div>
                                    <div class="text-transparent hover:text-black">{translation}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <button
                        class="mt-4 bg-blue-500 text-white px-2 py-1 flex items-center"
                        onClick={() => {
                            setMode(Mode.Edit)
                            setSearchParams({ mode: Mode.Edit });
                        }}
                    >
                        <IoArrowBack class="inline" /> Edit
                    </button>
                </section>
            }
        </main>
    );
}
