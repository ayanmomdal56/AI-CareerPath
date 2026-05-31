'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Copy, Volume2 } from 'lucide-react';

const INTERVIEW_QUESTIONS = [
  'Tell me about yourself',
  'Why are you interested in this role?',
  'What are your greatest strengths?',
  'What are your weaknesses?',
  'Why should we hire you?',
  'What is your biggest achievement?',
  'Tell me about a time you failed',
  'How do you handle stress?',
  'Where do you see yourself in 5 years?',
  'What are your salary expectations?',
];

export default function InterviewTool() {
  const [selectedQuestion, setSelectedQuestion] = useState(INTERVIEW_QUESTIONS[0]);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const generateFeedback = async () => {
    if (!answer.trim()) {
      alert('Please write an answer first');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/generate-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: selectedQuestion,
          answer: answer,
        }),
      });

      const data = await response.json();
      setFeedback(data.feedback || 'Unable to generate feedback');
    } catch (error) {
      setFeedback('Error generating feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(answer);
    alert('Answer copied to clipboard!');
  };

  const speakAnswer = () => {
    if ('speechSynthesis' in window && answer.trim()) {
      const utterance = new SpeechSynthesisUtterance(answer);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Questions List */}
        <Card>
          <CardHeader>
            <CardTitle>Interview Questions</CardTitle>
            <CardDescription>Select a question to practice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {INTERVIEW_QUESTIONS.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedQuestion(question);
                    setAnswer('');
                    setFeedback('');
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedQuestion === question
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="font-semibold">{idx + 1}.</span> {question}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Answer Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Answer</CardTitle>
              <CardDescription>Answer the selected question</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-semibold text-slate-900 dark:text-white">
                {selectedQuestion}
              </p>
              <Textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="min-h-32 resize-none"
              />
              <div className="flex gap-2">
                <Button onClick={generateFeedback} disabled={loading} className="flex-1">
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    'Get Feedback'
                  )}
                </Button>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="icon"
                  disabled={!answer.trim()}
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  onClick={speakAnswer}
                  variant="outline"
                  size="icon"
                  disabled={!answer.trim()}
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feedback Section */}
      {feedback && (
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              AI Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                {feedback}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
