// src/MdTitleLevelAdjuster.tsx
import { createSignal, Show } from "solid-js";

export default function MdTitleLevelAdjuster() {
  // Use a single signal for the text content, making it the single source of truth.
  const [textContent, setTextContent] = createSignal("");
  const [isDragging, setIsDragging] = createSignal(false);
  const [copySuccessMessage, setCopySuccessMessage] = createSignal("");

  let dropzoneRef: HTMLDivElement;

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

    handleFile(file);
  };

  const handleFile = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          // Set the single text state when a file is loaded
          setTextContent(content);
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

  const increaseLevels = (content: string) => {
    return content.split('\n').map(line => {
      const headingMatch = line.match(/^(#{1,6})\s(.*)/);
      if (headingMatch) {
        let [_, level, content] = headingMatch;
        if (level.length < 6) {
          level = '#' + level;
        }
        return `${level} ${content}`;
      }
      return line;
    }).join('\n');
  };

  const decreaseLevels = (content: string) => {
    return content.split('\n').map(line => {
      const headingMatch = line.match(/^(#{1,6})\s(.*)/);
      if (headingMatch) {
        let [_, level, content] = headingMatch;
        if (level.length > 1) {
          level = level.slice(1);
        }
        return `${level} ${content}`;
      }
      return line;
    }).join('\n');
  };

  const handleIncrease = () => {
    // Always operate on the current text content
    setTextContent(increaseLevels(textContent()));
    setCopySuccessMessage("");
  };

  const handleDecrease = () => {
    // Always operate on the current text content
    setTextContent(decreaseLevels(textContent()));
    setCopySuccessMessage("");
  };

  const handleDownload = () => {
    if (!textContent()) return;
    const blob = new Blob([textContent()], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "adjusted.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePaste = (e: ClipboardEvent) => {
    e.preventDefault(); // Prevent default paste to control the flow
    const pastedText = e.clipboardData?.getData('text/plain');
    if (pastedText) {
      // Set the single text state on paste
      setTextContent(pastedText);
      setCopySuccessMessage("");
    }
  };

  const handleCopyResult = async () => {
    if (!textContent()) return;
    try {
      await navigator.clipboard.writeText(textContent());
      setCopySuccessMessage("已复制到剪贴板!");
      setTimeout(() => setCopySuccessMessage(""), 2000);
    } catch (err) {
      console.error("复制失败: ", err);
      setCopySuccessMessage("复制失败!");
      setTimeout(() => setCopySuccessMessage(""), 2000);
    }
  };

  return (
    <div class="container mx-auto p-4 max-w-3xl">
      <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Markdown 标题层级调整器</h1>

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
          accept=".md,text/markdown"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFile(e.target.files[0]);
            }
          }}
          class="hidden"
          id="fileInputMd"
        />
        <label
          for="fileInputMd"
          class="cursor-pointer text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          点击选择文件或拖放至此区域
        </label>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-500">支持 .md 文件</p>
      </div>

      <textarea
        // The textarea now directly uses and updates the single textContent signal
        value={textContent()}
        onInput={(e) => {
          setTextContent(e.currentTarget.value);
          setCopySuccessMessage("");
        }}
        onPaste={handlePaste}
        placeholder="在此粘贴、拖放文件或输入 Markdown 内容..."
        rows="10" // Increased rows for better visibility
        class="mb-4 w-full p-3 border border-gray-300 rounded-md shadow-sm 
               focus:ring-blue-500 focus:border-blue-500
               bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />

      <div class="flex flex-wrap gap-3 mb-4 items-center">
        <button
          onClick={handleIncrease}
          disabled={!textContent()}
          class="px-4 py-2 bg-blue-500 text-white rounded-md
                 hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          增加层级 (+)
        </button>

        <button
          onClick={handleDecrease}
          disabled={!textContent()}
          class="px-4 py-2 bg-purple-500 text-white rounded-md
                 hover:bg-purple-600 transition-colors disabled:opacity-50"
        >
          减少层级 (-)
        </button>

        {/* These buttons are now shown whenever there is text */}
        <Show when={textContent()}>
          <button
            onClick={handleDownload}
            class="px-4 py-2 bg-green-500 text-white rounded-md
                   hover:bg-green-600 transition-colors"
          >
            下载结果
          </button>
          <button
            onClick={handleCopyResult}
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

      {/* The separate preview area is no longer needed as the textarea provides a live view */}
    </div>
  );
}
