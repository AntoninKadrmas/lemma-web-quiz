export interface Question {
  id:        string;
  question:  string;
  answers:   Answer[];
  correctId: String;
}

export interface Answer {
  classroom: string;
  text:      string;
  answerId:  String;
}

