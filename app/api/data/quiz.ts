import { Question } from "./model";

const quizData: Question[] = [
  {
    id: "5c1dbe48-5a1d-41c2-b445-ce4d15aeb77c",
    question: "Jak se v HTML píše tag pro hlavní nadpis?",
    answers: [
      { classroom: "A401", text: "h1", answerId: "A" },
      { classroom: "B301", text: "title", answerId: "B" },
      { classroom: "Lysáková", text: "heading", answerId: "A" },
    ],
    correctId: "A401",
  },
  {
    id: "88688c82-982a-4b96-bc45-415084d1cad1",
    question:
      "Jak se dá v Tailwind CSS aplikovat styl pouze na hover stav elementu?",
    answers: [
      {
        classroom: "A401",
        text: "Použitím direktivy @hover",
        answerId: "A",
      },
      {
        classroom: "B301",
        text: "Přidáním prefixu hover: ke třídě.",
        answerId: "B",
      },
      {
        classroom: "C205",
        text: "Použitím CSS pseudo-třídy :hover v globálním stylesheetu.",
        answerId: "C",
      },
    ],
    correctId: "B",
  },
  {
    id: "191c5f86-f9a5-4fde-8bde-1d8052583ff1",
    question: 'Co je to "key" prop v Reactu a k čemu slouží?',
    answers: [
      {
        classroom: "A401",
        text: "Je to unikátní identifikátor, který React používá k optimalizaci renderování listů.",
        answerId: "A",
      },
      {
        classroom: "B301",
        text: "Je to speciální atribut, který umožňuje vázat event handlery na DOM elementy",
        answerId: "B",
      },
      {
        classroom: "C205",
        text: "Je to prop, který se používá k předávání dat mezi rodičovskou a potomkovskou komponentou.",
        answerId: "C",
      },
    ],
    correctId: "A",
  },
  {
    id: "67c9f839-75e2-44f7-92fd-8bbb6bb8d856",
    question:
      "Kolikátý skončil LEMMA WEB na prvním brněnském zdravotnickém hackathonu?",
    answers: [
      { classroom: "A401", text: "1.", answerId: "A" },
      { classroom: "B301", text: "3.", answerId: "B" },
      { classroom: "C205", text: "2.", answerId: "C" },
    ],
    correctId: "C",
  },
  {
    id: "41b20ca0-e558-4cea-884b-be30175738ec",
    question:
      "Z jakého předmětu vystupuje Petr Sojka v nejkrásnější upoutávce na festival, kterou všichni milujeme?",
    answers: [
      { classroom: "A102", text: "Váza", answerId: "A" },
      { classroom: "B123", text: "Sloup", answerId: "B" },
      { classroom: "C205", text: "Auto", answerId: "C" },
    ],
    correctId: "A",
  },
  {
    id: "71dc1a1b-2e5b-4397-a0dd-a1289dfc8635",
    question:
      "Který konkrétní grant Fondu rozvoje vysokých škol přímo umožnil vybudování střihového pracoviště laboratoře LEMMA?",
    answers: [
      {
        classroom: "A",
        text: "Grant FRVŠ 123/2000, 50 000 Kč",
        answerId: "A",
      },
      {
        classroom: "B",
        text: "Grant FRVŠ 433/2001, 100 000 Kč",
        answerId: "B",
      },
      {
        classroom: "C",
        text: "Grant FRVŠ 567/2002, 75 000 Kč",
        answerId: "C",
      },
    ],
    correctId: "A",
  },
  {
    id: "cba8154f-2d7d-4360-9c12-f8413cf12c8b",
    question: "Jak se jmenuje nejlepší nástroj na správu Docker kontejnerů?",
    answers: [
      { classroom: "A", text: "Portainer", answerId: "A" },
      { classroom: "B", text: "Railway", answerId: "B" },
      { classroom: "C", text: "Deckhand", answerId: "C" },
    ],
    correctId: "C",
  },
  {
    id: "6217df2e-4694-45d8-a155-0c68f8b8aa2e",
    question: "Čím se mimo jiné živí Roman?",
    answers: [
      { classroom: "A", text: "Učí děti matematiku", answerId: "A" },
      {
        classroom: "B",
        text: "Hlídá faxy pro nadnárodní firmu",
        answerId: "B",
      },
      {
        classroom: "C",
        text: "Vyvíjí nástroj pro Národní Kybernetický Ústav",
        answerId: "C",
      },
    ],
    correctId: "B",
  },
  {
    id: "eeac012f-3942-425b-90f5-ad63f4af80d9",
    question: "Jak se jmenuje divoká šelma, kterou přechovává Gorazd?",
    answers: [
      { classroom: "A", text: "Karamel", answerId: "A" },
      { classroom: "B", text: "Capuccino", answerId: "B" },
      {
        classroom: "C",
        text: "Archibald, ničitel světů IV.",
        answerId: "C",
      },
    ],
    correctId: "A",
  },
  {
    id: "5426a463-54fa-4a18-9cc4-8b213bd4a650",
    question: "Jaká je nejlepší příchuť zmrzliny?",
    answers: [
      { classroom: "A", text: "Karamel", answerId: "A" },
      { classroom: "B", text: "Mango", answerId: "B" },
      { classroom: "C", text: "Citrón", answerId: "C" },
    ],
    correctId: "B",
  },
  {
    id: "c87e6d7e-90fd-454e-a63a-66f4301ae39b",
    question: "",
    answers: [
    ],
    correctId: "",
  },
  {
    id: "fb408d73-55c5-4214-81c9-26024c943e51",
    question: "",
    answers: [
    ],
    correctId: "",
  },
  {
    id: "036fde51-72b8-4d7a-8ef9-6624b883ece3",
    question: "",
    answers: [
    ],
    correctId: "",
  },
  {
    id: "d8f2128d-8eaf-4eec-b710-f7f1911918de",
    question: "",
    answers: [
    ],
    correctId: "",
  },
];

export default quizData;