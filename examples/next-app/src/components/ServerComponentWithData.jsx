import { fetchData } from "../app/api/fetchData";

export default async function ServerComponentWithData() {
  const response = await fetchData();
  const data = await response.json();

  return (
    <div>
      <h1 className="text-3xl">ServerComponentWithData</h1>
      {(data || []).map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}