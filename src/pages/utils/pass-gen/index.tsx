import { createEffect, createSignal } from "solid-js";
import { Title } from "@solidjs/meta";
import { createTitle } from "../../../common/misc-util";
import { CharsetName, charsetNames, generatePassword } from "../../../common/string-util";
import { IoRefresh } from "solid-icons/io";
import { loadStorage, saveStorage } from "../../../common/storage-util";
import MyCheckbox from "../../../components/my-checkbox";
import MySelect from "../../../components/my-select";
import MyInput from "../../../components/my-input";
import MyButton from "../../../components/my-button";

type Presets = {
    [key: string]: {
        charsets: CharsetName[];
        length: number;
    }
}

export default function Index() {
    const passwordStoreKey = 'u.password-generator.password';
    const charsetStoreKey = 'u.password-generator.charset';
    const [password, setPassword] = createSignal<string>(loadStorage(passwordStoreKey) ?? '');
    const strengthNames = ['Low', 'Medium', 'High'];
    const presets: Presets = {
        'Low': {
            charsets: ['Lowercase', 'Uppercase', 'Numbers'],
            length: 8,
        },
        'Medium': {
            charsets: ['Lowercase', 'Uppercase', 'Numbers', 'Symbols'],
            length: 16,
        },
        'High': {
            charsets: ['Lowercase', 'Uppercase', 'Numbers', 'Symbols'],
            length: 32,
        }
    }
    const [strength, setStrength] = createSignal('Medium');
    console.log('strength', strength());


    createEffect((prev) => {
        // if strength changed, update charset and length
        if (prev && prev !== strength()) {
            console.log("dd");

            const preset = presets[strength()];
            setCharset(new Set(preset.charsets));
            setLength(preset.length);
        }

        return strength();
    })

    const defaultCharset = () => {
        const s = loadStorage<string[]>(charsetStoreKey)
        if (s) {
            return new Set(s);
        } else {
            return new Set(presets[strength()].charsets);
        }
    }
    console.log('defaultCharset()', defaultCharset());

    const [charsets, setCharset] = createSignal<Set<CharsetName>>(
        defaultCharset() as Set<CharsetName>
    );
    console.log(charsets());


    const toggleCharset = (charsetNameRaw: string) => {
        const charsetName = charsetNameRaw as CharsetName;
        const newCharset = new Set(charsets());
        if (newCharset.has(charsetName)) {
            newCharset.delete(charsetName);
        } else {
            newCharset.add(charsetName);
        }

        console.log(newCharset);
        setCharset(newCharset);
        saveStorage(charsetStoreKey, [...newCharset]);
    }

    const [length, setLength] = createSignal(8);
    const [excludeSimilar, setExcludeSimilar] = createSignal(false);
    const [excludeAmbiguous, setExcludeAmbiguous] = createSignal(true);

    const genPasswdAndSave = () => {
        const generatedPassword = generatePassword(charsets(), length(), excludeSimilar(), excludeAmbiguous());
        setPassword(generatedPassword);
        saveStorage(passwordStoreKey, password());
    };


    return (
        <>
            <Title>{createTitle("Password Generator")}</Title>
            <h1 class="text-2xl font-bold">Password Generator</h1>
            {
                <section class="mt-2">
                    <form class="flex flex-col gap-4">
                        <MySelect label="Password Strength" options={
                            strengthNames.map(strengthName => ({
                                value: strengthName,
                                label: strengthName
                            }))
                        } onInput={(e) => setStrength(e.currentTarget.value)} />
                        {
                            charsetNames.map(charsetName => (
                                <MyCheckbox
                                    label={charsetName}
                                    id={charsetName}
                                    checked={charsets().has(charsetName)}
                                    onInput={() => toggleCharset(charsetName)}
                                />
                            ))
                        }

                        <MyInput
                            label="Password Length"
                            type="number"
                            id="length"
                            value={length()}
                            onInput={(e) => setLength(parseInt(e.currentTarget.value))} />

                        <MyCheckbox
                            label="Exclude similar characters"
                            id="excludeSimilar"
                            checked={excludeSimilar()}
                            onInput={(e) => setExcludeSimilar(e.currentTarget.checked)}
                        />

                        <MyCheckbox
                            label="Exclude ambiguous symbols"
                            id="excludeAmbiguous"
                            checked={excludeAmbiguous()}
                            onInput={(e) => setExcludeAmbiguous(e.currentTarget.checked)}
                        />

                        <div>
                            <MyButton
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    genPasswdAndSave();

                                }}
                            >
                                <IoRefresh class="inline-block mr-2" />
                                Generate
                            </MyButton>
                        </div>
                    </form>
                </section>
            }
            {
                password() &&
                <section class="mt-2">
                    <div class="mt-2">
                        Your generated password is:
                    </div>
                    <div class="mt-2">
                        <code class="select-all">{password()}</code>
                    </div>
                </section>
            }
        </>
    );
}
