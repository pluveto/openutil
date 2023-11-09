import { createSignal } from "solid-js";
import { IoArrowBack } from 'solid-icons/io'
import { useSearchParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { createTitle } from "../../../common/misc-util";
import MyTextarea from "../../../components/my-textarea";
import MyButton from "../../../components/my-button";
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
        const lines = text.split("\n").filter((line) => line.trim() !== "");
        const linePairs = [];
        if (lines.length % 2 === 1) {
            lines.push("");
        }
        for (let i = 0; i < lines.length; i += 2) {
            linePairs.push([lines[i], lines[i + 1]]);
        }

        return linePairs;
    }


    const viewLines = pairs(text());

    const [toggled, setToggled] = createSignal(new Set<number>());

    const toggle = (index: number) => () => {
        const toggledSet = new Set(toggled());
        if (toggledSet.has(index)) {
            toggledSet.delete(index);
        } else {
            toggledSet.add(index);
        }
        setToggled(toggledSet);
    }

    return (
        <>
            <Title>{createTitle("Translation Trainer")}</Title>
            <h1 class="text-2xl font-bold">Translation Trainer</h1>
            {
                mode() === Mode.Edit &&
                <section class="mt-2">
                    <form>
                        <p class="text-gray-400">Please alternate the original text and translation line by line, with the original text on the first line and the translation on the second line, and so on.</p>
                        <label for="textarea">Alternating Text:</label>
                        {/* <textarea
                            id="textarea"
                            class="mt-4 w-full h-24 p-2"
                            placeholder="Enter text here"
                            onInput={(e) => setText(e.currentTarget.value)}
                            onChange={(e) => setText(e.currentTarget.value)}
                        >
                            {text()}
                        </textarea> */}
                        <MyTextarea
                            id="textarea"
                            class="mt-4 w-full h-24 p-2"
                            placeholder="Enter text here"
                            onInput={(e) => setText(e.currentTarget.value)}
                            onChange={(e) => setText(e.currentTarget.value)}
                        >{text()}</MyTextarea>

                        <MyButton
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                saveState();
                                setMode(Mode.View);
                                setSearchParams({ mode: Mode.View });
                            }}
                        >
                            Confirm
                        </MyButton>
                    </form>
                </section>
            }
            {
                mode() === Mode.View &&
                <section class="mt-2">
                    <MyButton
                        onClick={() => {
                            setMode(Mode.Edit)
                            setSearchParams({ mode: Mode.Edit });
                        }}
                    >
                        <IoArrowBack class="inline" /> Edit
                    </MyButton>
                    <ol class="mt-2">
                        {viewLines.map(([original, translation], index) => (
                            <li class="flex">
                                <div class="mr-1 text-slate-500 font-serif select-none">
                                    [{index + 1}]
                                </div>
                                <div class="right">
                                    <div>{original}
                                        <a class="underline select-none" onclick={toggle(index)} href="javascript:;">
                                            {toggled().has(index) ? "[Hide]" : "[Show]"}
                                        </a>
                                    </div>

                                    {
                                        toggled().has(index)
                                            ? <div>{translation}</div>
                                            : <div class="text-transparent hover:text-black">{translation}</div>
                                    }
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>
            }
        </>
    );
}
