import React from "react";

export default async function Home() {
  const url = 'https://datausa.io/api/data?drilldowns=State&measures=Population';
  const requestNumber = 100;

  let records: { State: string, Year: number, Population: number }[] = [];

  for (let i = 0; i < requestNumber; i++) {
    const response = await fetch(url, {cache: "no-store"});
    const data = await response.json();

    records = [...records, ...data?.data];
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>USA Data</h1>
      <table>
          <thead>
            <tr>
                <th>#</th>
                <th>State</th>
                <th>Year</th>
                <th>Population</th>
            </tr>
          </thead>
          <tbody>
            { records.map(({ State, Year, Population }
              : { State: string, Year: number, Population: number }, index: number) => (
                <tr key={index}>
                    <td>{ index + 1 }</td>
                    <td>{ State }</td>
                    <td>{ Year }</td>
                    <td>{ Population }</td>
                </tr>
            )) }
          </tbody>
      </table>
    </main>
  );
}
