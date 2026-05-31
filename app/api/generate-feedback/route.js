import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(req) {
  try {
    const { question, answer } = await req.json();

    if (!question || !answer) {
      return Response.json(
        { error: 'Question and answer are required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `You are an expert interview coach. Analyze the following interview question and the candidate's answer, then provide constructive feedback.

Interview Question: ${question}

Candidate's Answer: ${answer}

Please provide:
1. Strengths of the answer (what was done well)
2. Areas for improvement (what could be better)
3. Specific suggestions to enhance the answer
4. Overall rating (1-10) with brief explanation

Keep the feedback concise, actionable, and encouraging.`;

    const result = await model.generateContent(prompt);
    const feedback = result.response.text();

    return Response.json({ feedback });
  } catch (error) {
    console.error('Error generating feedback:', error);
    return Response.json(
      { error: 'Failed to generate feedback' },
      { status: 500 }
    );
  }
}
