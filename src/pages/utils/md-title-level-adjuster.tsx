import { createSignal, Show } from "solid-js";

export default function MdTitleLevelAdjuster() {
  const [inputText, setInputText] = createSignal("");
  const [processedText, setProcessedText] = createSignal("");
  const [isDragging, setIsDragging] = createSignal(false);

  // 创建拖放区域
  let dropzoneRef: HTMLDivElement;

  // 处理拖放事件
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

  // 处理文件读取
  const handleFile = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          setInputText(content);
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

  // 增加标题层级
  const increaseLevels = (content: string) => {
    return content.split('\n').map(line => {
      const headingMatch = line.match(/^(#{1,6})\s(.*)/);
      if (headingMatch) {
        let [_, level, content] = headingMatch;
        // 最多只能有6个#号
        if (level.length < 6) {
          level = '#' + level;
        }
        return `${level} ${content}`;
      }
      return line;
    }).join('\n');
  };

  // 减少标题层级
  const decreaseLevels = (content: string) => {
    return content.split('\n').map(line => {
      const headingMatch = line.match(/^(#{1,6})\s(.*)/);
      if (headingMatch) {
        let [_, level, content] = headingMatch;
        // 最少要有1个#号
        if (level.length > 1) {
          level = level.slice(1);
        }
        return `${level} ${content}`;
      }
      return line;
    }).join('\n');
  };

  // 处理文本转换
  const handleIncrease = () => {
    setProcessedText(increaseLevels(inputText()));
  };

  const handleDecrease = () => {
    setProcessedText(decreaseLevels(inputText()));
  };

  // 处理文件下载
  const handleDownload = () => {
    const blob = new Blob([processedText()], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "adjusted.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  // 处理粘贴事件
  const handlePaste = (e: ClipboardEvent) => {
    const pastedText = e.clipboardData?.getData('text/plain');
    if (pastedText) {
      setInputText(prev => prev + pastedText);
    }
  };

  return (
    <div class="container mx-auto p-4 max-w-3xl">
      <h1 class="text-2xl font-bold mb-6">Markdown 标题层级调整器</h1>

      {/* 文件拖放区域 */}
      <div
        ref={dropzoneRef!}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        class={`border-2 rounded-lg p-8 text-center mb-4 transition-colors
          ${isDragging() ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300'}`}
      >
        <input
          type="file"
          accept=".md"
          onChange={(e) => handleFile(e.target.files?.[0]!)}
          class="hidden"
          id="fileInput"
        />
        <label
          for="fileInput"
          class="cursor-pointer text-gray-600 hover:text-blue-600"
        >
          点击选择文件或拖放至此区域
        </label>
        <p class="mt-2 text-sm text-gray-500">支持 .md 文件</p>
      </div>

      {/* 文本输入区域 */}
      <textarea
        value={inputText()}
        onInput={(e) => setInputText(e.currentTarget.value)}
        onPaste={handlePaste}
        placeholder="在此粘贴或输入 Markdown 内容..."
        class="mb-4 w-full h-24 p-2 bg-white text-black dark:bg-gray-800 dark:text-white"
      />

      {/* 操作按钮 */}
      <div class="flex gap-3 mb-4">
        <button
          onClick={handleIncrease}
          class="px-4 py-2 bg-blue-500 text-white rounded-md
                 hover:bg-blue-600 transition-colors"
        >
          增加层级 (+)
        </button>

        <button
          onClick={handleDecrease}
          class="px-4 py-2 bg-purple-500 text-white rounded-md
                 hover:bg-purple-600 transition-colors"
        >
          减少层级 (-)
        </button>

        <Show when={processedText()}>
          <button
            onClick={handleDownload}
            class="px-4 py-2 bg-green-500 text-white rounded-md
                   hover:bg-green-600 transition-colors"
          >
            下载结果
          </button>
        </Show>
      </div>

      {/* 处理结果预览 */}
      <Show when={processedText()}>
      <div class="border rounded-md p-4 bg-gray-50 dark:bg-gray-900">
          <pre class="whitespace-pre-wrap">{processedText()}</pre>
        </div>
      </Show>
    </div>
  );
}
