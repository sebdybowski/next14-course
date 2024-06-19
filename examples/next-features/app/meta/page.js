export async function generateMetadata({ searchParams }) {
  return {
    title: `Metadata - ${searchParams?.id}`,
    description: 'The metadata page.',
    keywords: ['metadata', 'page'],
  };
}

const MetadataPage = () => {
  return (
    <div>
      <h1>Metadata</h1>
      <p>Metadata page</p>
    </div>
  );
}

export default MetadataPage;