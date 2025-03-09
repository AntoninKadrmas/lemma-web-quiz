export interface Question {
  id:        string;
  question:  string;
  answers:   Answer[];
  correctId: string;
}

export interface Answer {
  classroom: string;
  text:      string;
  answerId:  string;
}

