import { createSignal, Show } from "solid-js";
import { FileEntry, createDropZone } from "@solid-primitives/upload";

export default function MdTitleSimplify() {
  const [inputText, setInputText] = createSignal("");
  const [processedText, setProcessedText] = createSignal("");
  const [isDragging, setIsDragging] = createSignal(false);
  
  // 创建拖放区域
  const { setRef: dropzoneRef } = createDropZone({
    onDrop(files) {
      handleFile(files[0]);
      setIsDragging(false);
    },
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false)
  });

  // 处理文件上传
  const handleFile = async (file: FileEntry) => {
    try {
      const content = await file.file.text();
      setInputText(content);
    } catch (error) {
      alert("文件读取失败: " + error.message);
    }
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
      <h1 class="text-2xl font-bold mb-6">Markdown 处理工具</h1>

      {/* 文件拖放区域 */}
      <div 
        ref={dropzoneRef}
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
        class="w-full h-48 p-3 border rounded-md mb-4
               focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
        <div class="border rounded-md p-4 bg-gray-50">
          <h3 class="font-medium mb-2">处理结果预览：</h3>
          <pre class="whitespace-pre-wrap">{processedText()}</pre>
        </div>
      </Show>
    </div>
  );
}
