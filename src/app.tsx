import type { Component } from 'solid-js';
import { Link, useRoutes } from '@solidjs/router';

import { routes } from './routes';
import { Title } from '@solidjs/meta';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <>
      <Title>OpenUtil</Title>
      <nav class={
        "px-4 " +
        "bg-gray-200 text-gray-900 " +
        "dark:bg-gray-800 dark:text-gray-100"
      }>
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <Link href="/" class="no-underline hover:underline">
              <b>OpenUtil</b>
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link href="/about" class="no-underline hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <main class={
        "p-8 " +
        "bg-gray-100 text-gray-700 " +
        "dark:bg-gray-900 dark:text-gray-300"
      }>
        <Route />
      </main>
    </>
  );
};

export default App;
