import { NextRequest, NextResponse } from "next/server";
import quizData from "../../data/quiz";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { correctId, ...question } = quizData.find((q) => q.id === id)!; // opravit pak
  if (!question) {
    return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
  }

  return NextResponse.json(question);
}
