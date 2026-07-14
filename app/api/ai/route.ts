import { NextResponse } from 'next/server';
import {
  handleFallbackChat,
  handleFallbackQuiz,
  handleFallbackSummary,
  handleFallbackPlan,
} from '../../../lib/ai/fallback-engine';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Gracefully route to high-fidelity local fallback engine
      return executeFallback(action, body);
    }

    // Direct Gemini REST API fetch to avoid extra npm packages
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    if (action === 'chat') {
      const { message, history } = body;
      const historyPrompt = (history ?? [])
        .map((h: any) => `${h.role === 'user' ? 'Student' : 'Tutor'}: ${h.content}`)
        .join('\n');
      
      const prompt = `You are a helpful, encouraging AI study tutor for ShikshaSetu (an LMS).
Solve the student's doubts, explain coding/design concepts clearly, and provide brief examples.
Respond in formatted Markdown (headers, bullet points, code blocks).

Conversation history:
${historyPrompt}
Student's question: ${message}
Tutor:`;

      const reply = await callGemini(geminiUrl, prompt);
      return NextResponse.json({ reply: reply || handleFallbackChat(message).reply });
    }

    if (action === 'quiz') {
      const { topic } = body;
      const prompt = `You are an educational quiz generator. Generate exactly 3 multiple choice questions about "${topic}".
Output MUST be valid JSON conforming to this TypeScript type:
{
  questions: Array<{
    id: string;
    question: string;
    options: Array<{ id: string; text: string }>;
    correctOptionId: string; // 'a', 'b', 'c', or 'd'
    explanation: string;
  }>
}
Output only the JSON block. Do not write markdown tags or text around the JSON.`;

      const responseText = await callGemini(geminiUrl, prompt);
      try {
        const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const json = JSON.parse(cleanedText);
        return NextResponse.json(json);
      } catch (e) {
        return NextResponse.json(handleFallbackQuiz(topic));
      }
    }

    if (action === 'summary') {
      const { text } = body;
      const prompt = `You are an academic text summarizer. Create notes and flashcards for the following text:
"${text}"
Output MUST be valid JSON conforming to this TypeScript type:
{
  summary: string; // Brief executive summary
  takeaways: string[]; // List of core bullet point details
  flashcards: Array<{ front: string; back: string }>; // Key terms and definitions
}
Output only the JSON block. Do not write markdown tags or text around the JSON.`;

      const responseText = await callGemini(geminiUrl, prompt);
      try {
        const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const json = JSON.parse(cleanedText);
        return NextResponse.json(json);
      } catch (e) {
        return NextResponse.json(handleFallbackSummary(text));
      }
    }

    if (action === 'planner') {
      const { courseTitle, days, hours } = body;
      const prompt = `Create a weekly study timeline for course "${courseTitle}" spanning ${days} days with ${hours} hours daily commit.
Output MUST be valid JSON conforming to this TypeScript type:
{
  plan: Array<{
    week: string; // e.g. "Week 1"
    title: string; // e.g. "Foundations"
    tasks: string[]; // specific tasks
  }>
}
Output only the JSON block. Do not write markdown tags or text around the JSON.`;

      const responseText = await callGemini(geminiUrl, prompt);
      try {
        const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const json = JSON.parse(cleanedText);
        return NextResponse.json(json);
      } catch (e) {
        return NextResponse.json(handleFallbackPlan(courseTitle, days, hours));
      }
    }

    return executeFallback(action, body);
  } catch (err) {
    console.error('Server AI endpoint error, executing fallback:', err);
    return executeFallback('', {});
  }
}

async function callGemini(url: string, prompt: string): Promise<string> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });
  
  if (!res.ok) throw new Error('Gemini API query failed');
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
}

function executeFallback(action: string, body: any) {
  if (action === 'chat') {
    return NextResponse.json(handleFallbackChat(body.message));
  }
  if (action === 'quiz') {
    return NextResponse.json(handleFallbackQuiz(body.topic));
  }
  if (action === 'summary') {
    return NextResponse.json(handleFallbackSummary(body.text));
  }
  if (action === 'planner') {
    return NextResponse.json(handleFallbackPlan(body.courseTitle, body.days, body.hours));
  }
  
  // Default general response
  return NextResponse.json({
    reply: 'Fallthrough. Please configure action type parameters.',
  });
}
