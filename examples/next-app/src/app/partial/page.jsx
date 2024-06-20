import React, { Suspense } from 'react';

const DynamicComponent = React.lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../../components/OptimisticList.jsx'));
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