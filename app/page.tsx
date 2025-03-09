"use client";
import { useEffect } from "react";

const vercelApi = false
  ? "http://localhost:3000/api/hello"
  : "https://lemma-web-quiz.vercel.app/api/hello";
export default function Home() {
  useEffect(() => {
    const hellofunc = async () => {
      try {
        const response = await fetch(vercelApi, {
          next: { revalidate: 10 }, // Seconds
        });
        const data = await response.json(); // Convert response body to JSON
        console.log(data); // Now you can access the response body
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    hellofunc();
  }, []);

  return <div></div>;
}
