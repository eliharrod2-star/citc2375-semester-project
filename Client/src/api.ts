

import type { ProjectItem } from "./types";

export async function loadItems() {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error(`Unable to load data: ${response.status}`);
  }

  const data: ProjectItem[] = await response.json();

  return data;
}

