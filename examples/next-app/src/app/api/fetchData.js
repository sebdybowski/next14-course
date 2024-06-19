// We're simulating fetching data from an API
import { NextResponse } from "next/server";

export async function fetchData() {
  return NextResponse.json([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);
}