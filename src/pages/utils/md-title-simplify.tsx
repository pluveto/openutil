import { createSignal, Show } from "solid-js";

export default function MdTitleSimplify() {
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
    console.log(e.dataTransfer)
    if (!e.dataTransfer?.items.length) return;

    // 获取第一个拖放的文件
    const item = e.dataTransfer.items[0];

    // 确认是文件类型
    if (item.kind !== 'file') {
      alert('请拖放文件而非文本或链接');
      return;
    }

    // 获取文件对象
    const file = item.getAsFile();
    if (!file) {
      alert('无法获取文件对象');
      return;
    }

    // 调用已验证的handleFile
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
          console.log("成功读取文件内容:", content.length, "字符");
        } else {
          console.error("读取的文件内容不是文本格式");
        }
        resolve();
      };

      reader.onerror = () => {
        console.error("文件读取错误:", reader.error);
        alert("文件读取失败");
        reject(reader.error);
      };

      reader.onabort = () => {
        console.warn("文件读取被中止");
        reject(new Error("读取被中止"));
      };

      // 明确指定编码为UTF-8
      reader.readAsText(file, 'UTF-8');
    });
  };

  // 核心处理逻辑
  const processContent = (content: string) => {
    return content.split('\n').map(line => {
      const headingMatch = line.match(/^(#{1,6})\s(.*)/);
      if (headingMatch) {
        let [_, level, content] = headingMatch;
        content = content
          .replace(/\*\*(.*?)\*\*/g, '$1')        // 移除加粗
          .replace(/^(\d+\.)+\d+\s*/, '')        // 移除编号
          .trim();
        return content ? `${level} ${content}` : line;
      }
      return line;
    }).join('\n');
  };

  // 处理文本转换
  const handleProcess = () => {
    setProcessedText(processContent(inputText()));
  };

  // 处理文件下载
  const handleDownload = () => {
    const blob = new Blob([processedText()], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "processed.md";
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
      <h1 class="text-2xl font-bold mb-6">Markdown 去除加粗和编号</h1>

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
          onClick={handleProcess}
          class="px-4 py-2 bg-blue-500 text-white rounded-md
                 hover:bg-blue-600 transition-colors"
        >
          处理文本
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
          <pre class="whitespace-pre-wrap ">{processedText()}</pre>
        </div>
      </Show>
    </div>
  );
}
