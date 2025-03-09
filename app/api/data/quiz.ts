import { Question } from "./model";

const quizData: Question[] = [
  {
    id: "88688c82-982a-4b96-bc45-415084d1cad1",
    index: 0,
    question: "Čím se mimojiné živí Roman?",
    answers: [
      {
        classroom: "Výtah",
        text: "Hlídá faxy pro nadnárodní firmu",
        answerId: "A",
      },
      { classroom: "C306", text: "Učí děti matematiku", answerId: "B" },
      {
        classroom: "C205",
        text: "Vyvíjí nástroj pro Národní Kybernetický Ústav",
        answerId: "C",
      },
    ],
    correctId: "A",
  },
  {
    id: "71dc1a1b-2e5b-4397-a0dd-a1289dfc8635",
    index: 1,
    question:
      "Jak se dá v Tailwind CSS aplikovat styl pouze na hover stav elementu?",
    answers: [
      {
        classroom: "Nová lemma",
        text: "Použitím direktivy @hover",
        answerId: "J",
      },
      {
        classroom: "Stará lemma",
        text: "Přidáním prefixu hover: ke třídě.",
        answerId: "K",
      },
      {
        classroom: "C205",
        text: "Použitím CSS pseudo-třídy :hover v globálním stylesheetu.",
        answerId: "L",
      },
    ],
    correctId: "K",
  },
  {
    id: "cba8154f-2d7d-4360-9c12-f8413cf12c8b",
    index: 2,
    question: 'Co je to "key" prop v Reactu a k čemu slouží?',
    answers: [
      {
        classroom: "Schody dolů",
        text: "Je to unikátní identifikátor, který React používá k optimalizaci renderování listů.",
        answerId: "N",
      },
      {
        classroom: "C404",
        text: "Je to speciální atribut, který umožňuje vázat event handlery na DOM elementy",
        answerId: "M",
      },
      {
        classroom: "Schody nahorů",
        text: "Je to prop, který se používá k předávání dat mezi rodičovskou a potomkovskou komponentou.",
        answerId: "O",
      },
    ],
    correctId: "N",
  },
  {
    id: "6217df2e-4694-45d8-a155-0c68f8b8aa2e",
    index: 3,
    question:
      "Kolikátý skončil LEMMA WEB na prvním brněnském zdravotnickém hackathonu?",
    answers: [
      { classroom: "Nástěnka 3. patro", text: "1.", answerId: "G" },
      { classroom: "Nástěnka 1. patro", text: "3.", answerId: "L" },
      { classroom: "Nástěnka 2. patro", text: "2.", answerId: "E" },
    ],
    correctId: "E",
  },
  {
    id: "191c5f86-f9a5-4fde-8bde-1d8052583ff1",
    index: 4,
    question:
      "Z jakého předmětu vystupuje Petr Sojka v nejkrásnější upoutávce na festival, kterou všichni milujeme?",
    answers: [
      { classroom: "A502", text: "Váza", answerId: "J" },
      { classroom: "A415", text: "Sloup", answerId: "S" },
      { classroom: "A307", text: "Auto", answerId: "R" },
    ],
    correctId: "J",
  },
  {
    id: "41b20ca0-e558-4cea-884b-be30175738ec",
    index: 5,
    question:
      "Který konkrétní grant Fondu rozvoje vysokých škol přímo umožnil vybudování střihového pracoviště laboratoře LEMMA?",
    answers: [
      {
        classroom: "C223",
        text: "Grant FRVŠ 123/2000, 50 000 Kč",
        answerId: "B",
      },
      {
        classroom: "Lysáková",
        text: "Grant FRVŠ 433/2001, 100 000 Kč",
        answerId: "A",
      },
      {
        classroom: "C226",
        text: "Grant FRVŠ 567/2002, 75 000 Kč",
        answerId: "C",
      },
    ],
    correctId: "A",
  },
  {
    id: "67c9f839-75e2-44f7-92fd-8bbb6bb8d856",
    index: 6,
    question: "Jak se jmenuje divoká šelma, kterou přechovává Gorazd?",
    answers: [
      { classroom: "Antonín", text: "Karamel", answerId: "C" },
      { classroom: "Lukáš", text: "Capuccino", answerId: "A" },
      {
        classroom: "Roman",
        text: "Archibald, ničitel světů IV.",
        answerId: "B",
      },
    ],
    correctId: "C",
  },
];

export default quizData;
