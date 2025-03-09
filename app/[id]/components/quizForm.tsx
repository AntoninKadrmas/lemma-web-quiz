"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Question } from "@/app/api/data/model";

export default function QuizForm(props: { question: Question; id: string }) {
  const localStorageKey = `quiz-answer-${props.id}`; // Unique key per question
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);

  useEffect(() => {
    const savedAnswer = localStorage.getItem(localStorageKey);
    if (savedAnswer) {
      setSelectedAnswer(savedAnswer);
      setSubmittedAnswer(savedAnswer); // Prevents resubmitting
    }
  }, [localStorageKey]);

  const handleSubmit = () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
    localStorage.setItem(localStorageKey, selectedAnswer); // Save answer
    setSubmittedAnswer(selectedAnswer);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col">
      <Card className="p-4 w-full max-w-md mx-auto">
        <CardContent>
          <div className="flex gap-2 items-start mb-3">
            <h1 className="text-xl font-bold">{props.question.index + 1}.</h1>
            <h2 className="text-xl font-semibold">{props.question.question}</h2>
          </div>

          {/* Radio Group to select an answer */}
          <RadioGroup
            value={selectedAnswer || ""}
            onValueChange={setSelectedAnswer}
            disabled={!!submittedAnswer}
            className="space-y-2"
          >
            {props.question.answers.map((answer, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={answer.answerId}
                  id={`answer-${index}`}
                />
                <Label htmlFor={`answer-${index}`} className="cursor-pointer">
                  {answer.text}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Submit Button */}
          <Button
            className="mt-4 w-full cursor-pointer"
            onClick={handleSubmit}
            disabled={!selectedAnswer || !!submittedAnswer}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
      {submittedAnswer && (
        <Card className="p-4 mt-4 bg-gray-100">
          <CardContent className="flex gap-3 justify-center items-center">
            <h3 className="text-lg font-medium">Next qr code in:</h3>
            <p className="text-blue-600 font-semibold">
              {
                props.question.answers.find(
                  (val) => val.answerId == submittedAnswer
                )?.classroom
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
