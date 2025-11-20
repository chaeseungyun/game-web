// API Response Types
export interface QuizResponse {
  id: number;
  question: string;
  options: string[];
  category: string;
}

export interface AnswerRequest {
  quiz_id: number;
  user_answer: number;
}

export interface AnswerResponse {
  is_correct: boolean;
  correct_answer: number;
  explanation: string;
  user_answer: number;
}


