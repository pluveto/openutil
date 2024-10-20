import { createSignal } from "solid-js";

export default function ZhihuConverter() {
  const [inputText, setInputText] = createSignal("");
  const [convertedText, setConvertedText] = createSignal("");

  // Function to convert contents
  const convertContents = (contents) => {
    const doubleDollarRegex = /\$\$\n*((.|\n)*?)\n*\$\$/g;
    const singleDollarRegex = /\$(.*?)\$/g;

    contents = contents.replace(doubleDollarRegex, (match, p1) => {
      const encoded = encodeURIComponent(p1);
      return `\n<img src="https://www.zhihu.com/equation?tex=${encoded}" alt="[公式]" eeimg="1" data-formula="${p1.replace(/\n/g, '')}">\n`;
    });

    contents = contents.replace(singleDollarRegex, (match, p1) => {
      const encoded = encodeURIComponent(p1);
      return `<img src="https://www.zhihu.com/equation?tex=${encoded}" alt="[公式]" eeimg="1" data-formula="${p1.replace(/\n/g, '')}">`;
    });

    return contents;
  };

  // Handler to convert text
  const handleConvertText = () => {
    const converted = convertContents(inputText());
    setConvertedText(converted);
  };

  // Handler to download converted text
  const handleDownloadConvertedText = () => {
    if (!convertedText()) {
      alert("Please convert the text first.");
      return;
    }

    const blob = new Blob([convertedText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted_text.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div class="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
      <h1 class="text-2xl font-bold">Text Converter</h1>
      <textarea
        id="inputText"
        rows="10"
        cols="50"
        placeholder="Enter text here..."
        class="mt-4 w-full h-24 p-2 bg-white text-black dark:bg-gray-800 dark:text-white"
        onInput={(e) => setInputText(e.currentTarget.value)}
        value={inputText()}
      />
      <br />
      <button
        class="mt-2 p-2 bg-blue-500 text-white rounded"
        onClick={handleConvertText}
      >
        Convert Text
      </button>
      <button
        class="mt-2 ml-2 p-2 bg-green-500 text-white rounded"
        onClick={handleDownloadConvertedText}
      >
        Download Converted Text
      </button>
      <pre id="output" class="mt-4 p-2 bg-gray-100 dark:bg-gray-800">
        {convertedText()}
      </pre>
    </div>
  );
}
