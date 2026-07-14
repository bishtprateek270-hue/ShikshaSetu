'use client';

import type { QuizQuestion } from '../lms/types';
import type { FallbackSummaryResponse, FallbackPlanResponse } from './fallback-engine';

export async function askAiTutor(message: string, history: { role: 'user' | 'assistant'; content: string }[]): Promise<string> {
  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'chat', message, history }),
    });
    const data = await res.json();
    return data.reply;
  } catch (err) {
    console.error('API Error, falling back to local chat engine:', err);
    return 'Sorry, there was a connection error contacting the study tutor. Please check your setup.';
  }
}

export async function generateAiQuiz(topic: string): Promise<QuizQuestion[]> {
  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'quiz', topic }),
    });
    const data = await res.json();
    return data.questions;
  } catch (err) {
    console.error('API Error, falling back to local quiz engine:', err);
    return [];
  }
}

export async function generateNotesAndSummary(text: string): Promise<FallbackSummaryResponse> {
  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'summary', text }),
    });
    return await res.json();
  } catch (err) {
    console.error('API Error, falling back to local summarizer:', err);
    return {
      summary: 'Could not summarize text due to a connection alert.',
      takeaways: [],
      flashcards: [],
    };
  }
}

export async function generateStudyPlan(
  courseTitle: string,
  days: number,
  hours: number
): Promise<FallbackPlanResponse> {
  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'planner', courseTitle, days, hours }),
    });
    return await res.json();
  } catch (err) {
    console.error('API Error, falling back to local planner:', err);
    return { plan: [] };
  }
}
