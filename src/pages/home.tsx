import { createSignal } from 'solid-js';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="bg-gray-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Home</h1>
      <p class="mt-4">
        OpenUtil is a open source project that
        allow you to use and contribute online utilities.
      </p>
      <h2 class="mt-4 text-xl font-bold">Recent</h2>
      <ul>
        <li><a href="/u/trans-trainer">Translate Trainer</a></li>
      </ul>
    </main>
  );
}
