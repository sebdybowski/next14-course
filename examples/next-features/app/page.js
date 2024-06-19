import React, { Suspense } from 'react';

export const metadata = {
  title: 'Home',
  desription: 'The home page.',
  keywords: ['home', 'page'],
};

const DynamicComponent = React.lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/List'));
    }, 2000);
  }));

export default function Home() {
  return (
    <main>
      <p>
        The static content.
      </p>
      <Suspense fallback={<p>Loading dynamic content...</p>}>
        <DynamicComponent />
      </Suspense>
    </main>
  );
}
