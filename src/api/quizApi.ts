import { QuizResponse, AnswerRequest, AnswerResponse } from '../types/quiz';

// API URL 끝의 슬래시 제거 (있는 경우)
const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:12233').replace(/\/$/, '');

console.log('[API] Base URL:', API_BASE_URL);

export class QuizApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'QuizApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    const errorMessage = error.detail || error.message || `HTTP Error: ${response.status}`;
    console.error('[API] Error:', errorMessage, 'Status:', response.status, 'Data:', error);
    throw new QuizApiError(
      errorMessage,
      response.status,
      error
    );
  }
  return response.json();
}

export const quizApi = {
  // 랜덤 퀴즈 가져오기
  async getRandomQuiz(): Promise<QuizResponse> {
    const url = `${API_BASE_URL}/quizzes/random`;
    console.log('[API] GET', url);
    try {
      const response = await fetch(url);
      return handleResponse<QuizResponse>(response);
    } catch (error) {
      console.error('[API] getRandomQuiz failed:', error);
      throw error;
    }
  },

  // 답변 제출하기
  async submitAnswer(request: AnswerRequest): Promise<AnswerResponse> {
    const url = `${API_BASE_URL}/quizzes/answer`;
    console.log('[API] POST', url, request);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });
      return handleResponse<AnswerResponse>(response);
    } catch (error) {
      console.error('[API] submitAnswer failed:', error);
      throw error;
    }
  },
};
