// src/CodeLineNumberer.tsx
import { createSignal, Show, For } from "solid-js";

export default function CodeLineNumberer() {
  const [inputText, setInputText] = createSignal("");
  const [numberedText, setNumberedText] = createSignal("");
  const [startLineNum, setStartLineNum] = createSignal<0 | 1>(1); // 0 or 1
  const [isDragging, setIsDragging] = createSignal(false);
  const [copySuccessMessage, setCopySuccessMessage] = createSignal("");

  let dropzoneRef: HTMLDivElement; // For drag and drop

  // --- Drag and Drop handlers (similar to MdTitleLevelAdjuster) ---
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!e.dataTransfer?.items.length) return;

    const item = e.dataTransfer.items[0];
    if (item.kind !== 'file') {
      alert('请拖放文件而非文本或链接');
      return;
    }
    const file = item.getAsFile();
    if (!file) {
      alert('无法获取文件对象');
      return;
    }
    readFileContent(file);
  };

  const readFileContent = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          setInputText(content);
          setNumberedText(""); // Clear previous result
          setCopySuccessMessage("");
        }
        resolve();
      };
      reader.onerror = () => {
        alert("文件读取失败");
        reject(reader.error);
      };
      reader.readAsText(file, 'UTF-8');
    });
  };
  // --- End Drag and Drop handlers ---

  const addLineNumbers = () => {
    if (!inputText().trim()) {
      setNumberedText("");
      return;
    }
    const lines = inputText().split('\n');
    const start = startLineNum();
    const result = lines.map((line, index) => `${start + index}: ${line}`).join('\n');
    setNumberedText(result);
    setCopySuccessMessage(""); // Clear previous copy message
  };

  const handleCopyNumberedText = async () => {
    if (!numberedText()) return;
    try {
      await navigator.clipboard.writeText(numberedText());
      setCopySuccessMessage("已复制到剪贴板!");
      setTimeout(() => setCopySuccessMessage(""), 2000);
    } catch (err) {
      console.error("复制失败: ", err);
      setCopySuccessMessage("复制失败!");
      setTimeout(() => setCopySuccessMessage(""), 2000);
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    const pastedText = e.clipboardData?.getData('text/plain');
    if (pastedText) {
      setInputText(prev => prev + pastedText);
      setNumberedText("");
      setCopySuccessMessage("");
    }
  };

  return (
    <div class="container mx-auto p-4 max-w-3xl">
      <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">代码行号添加器</h1>

      {/* File Drag and Drop Area */}
      <div
        ref={dropzoneRef!}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        class={`border-2 rounded-lg p-8 text-center mb-4 transition-colors
          ${isDragging() ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/30' : 'border-dashed border-gray-300 dark:border-gray-600'}`}
      >
        <input
          type="file"
          accept="text/*,.js,.ts,.jsx,.tsx,.py,.java,.c,.cpp,.cs,.html,.css,.json,.xml,.yaml,.sh" // Common code file types
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              readFileContent(e.target.files[0]);
            }
          }}
          class="hidden"
          id="fileInputCode"
        />
        <label
          for="fileInputCode"
          class="cursor-pointer text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          点击选择代码文件或拖放至此区域
        </label>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-500">支持各类文本/代码文件</p>
      </div>

      {/* Input Text Area */}
      <textarea
        value={inputText()}
        onInput={(e) => {
            setInputText(e.currentTarget.value);
            setNumberedText("");
            setCopySuccessMessage("");
        }}
        onPaste={handlePaste}
        placeholder="在此粘贴或输入代码..."
        rows="8"
        class="mb-4 w-full p-3 border border-gray-300 rounded-md shadow-sm
               focus:ring-blue-500 focus:border-blue-500
               bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />

      {/* Configuration and Action Buttons */}
      <div class="flex flex-wrap gap-4 mb-4 items-center">
        <div>
          <label class="mr-2 font-medium text-gray-700 dark:text-gray-300">起始行号:</label>
          <For each={[0, 1] as const}>{(num) =>
            <label class="mr-3">
              <input
                type="radio"
                name="startLine"
                value={num}
                checked={startLineNum() === num}
                onChange={() => {
                    setStartLineNum(num);
                    if(inputText()) addLineNumbers(); // Re-process if text exists
                }}
                class="mr-1"
              />
              {num}
            </label>
          }</For>
        </div>

        <button
          onClick={addLineNumbers}
          disabled={!inputText()}
          class="px-4 py-2 bg-blue-500 text-white rounded-md
                 hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          添加行号
        </button>

        <Show when={numberedText()}>
          <button
            onClick={handleCopyNumberedText}
            class="px-4 py-2 bg-teal-500 text-white rounded-md
                   hover:bg-teal-600 transition-colors"
          >
            复制结果
          </button>
        </Show>
         <Show when={copySuccessMessage()}>
          <span class={`ml-2 text-sm ${copySuccessMessage().includes('失败') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
            {copySuccessMessage()}
          </span>
        </Show>
      </div>

      {/* Processed Text Preview */}
      <Show when={numberedText()}>
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-gray-50 dark:bg-gray-900/50">
          <h3 class="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">带行号的代码:</h3>
          <pre class="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">{numberedText()}</pre>
        </div>
      </Show>
    </div>
  );
}
