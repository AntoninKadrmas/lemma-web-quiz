"use client";
import { Question } from "../api/data/model";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import QuizForm from "./components/quizForm";

const apiUrl = false
  ? "http://localhost:3000/api"
  : "https://lemma-web-quiz.vercel.app/api";
export default function Home() {
  const params = useParams();
  const { data, isLoading } = useQuery<Question>({
    queryKey: [params],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/question/${params?.id}`, {
        next: { revalidate: 10 }, // Seconds
      });
      return await response.json();
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isLoading && <p>Loading...</p>}
      {data && <QuizForm id={params?.id as string} question={data} />}
    </div>
  );
}
// sojka je 2
// vytah 6
// cedulka na chodbe 7
// schody 1
// nastenka 2 patro 3
// a502 5
// lysakova 4
// na me 8
