import { NextResponse } from "next/server";
import quizData from "../../data/quiz";
import { Question } from "../../data/model";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { correctId, ...question } = quizData.find((q) => q.id === id)!; // opravit pak

  if (!question) {
    return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
  }

  return NextResponse.json(question);
}
