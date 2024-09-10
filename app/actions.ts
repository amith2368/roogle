// api/actions.ts
'use server';

import { getJson } from 'serpapi';

// Define the search action
export async function RoogleSearch(query: string, numOfResults?: number) {
  try {
    const result = await getJson({
      api_key: process.env.SERP_API_KEY,
      engine: "google",
      q: query + " reddit", // The golden query
      location: "Austin, Texas, United States",
      google_domain: "google.com",
      gl: "us",
      hl: "en",
      num: numOfResults || 10
    });
    // Return the JSON result
    return result;
  } catch (error) {
    console.error("Error fetching data from SerpAPI:", error);
    throw new Error("Search API request failed.");
  }
}
