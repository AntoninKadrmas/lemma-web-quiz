import { Question } from "./model";

const quizData: Question[] = [
  {
    id: "88688c82-982a-4b96-bc45-415084d1cad1",
    index: 0,
    question: "Čím se mimojiné živí Roman?",
    answers: [
      {
        classroom: "A105",
        text: "Hlídá faxy pro nadnárodní firmu",
        answerId: "A",
      },
      { classroom: "B206", text: "Učí děti matematiku", answerId: "B" },
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
        classroom: "C223",
        text: "Použitím direktivy @hover",
        answerId: "J",
      },
      {
        classroom: "Lysáková",
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
        classroom: "B304",
        text: "Je to unikátní identifikátor, který React používá k optimalizaci renderování listů.",
        answerId: "N",
      },
      {
        classroom: "B204",
        text: "Je to speciální atribut, který umožňuje vázat event handlery na DOM elementy",
        answerId: "M",
      },
      {
        classroom: "C404",
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
      { classroom: "C223", text: "1.", answerId: "G" },
      { classroom: "C323", text: "3.", answerId: "L" },
      { classroom: "C123", text: "2.", answerId: "E" },
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
    id: "cba8154f-2d7d-4360-9c12-f8413cf12c8b",
    index: 5,
    question:
      "Který konkrétní grant Fondu rozvoje vysokých škol přímo umožnil vybudování střihového pracoviště laboratoře LEMMA?",
    answers: [
      {
        classroom: "A215",
        text: "Grant FRVŠ 123/2000, 50 000 Kč",
        answerId: "B",
      },
      {
        classroom: "stará lemma",
        text: "Grant FRVŠ 433/2001, 100 000 Kč",
        answerId: "A",
      },
      {
        classroom: "stará lemma",
        text: "Grant FRVŠ 567/2002, 75 000 Kč",
        answerId: "C",
      },
    ],
    correctId: "A",
  },
  {
    id: "71dc1a1b-2e5b-4397-a0dd-a1289dfc8635",
    index: 6,
    question: "Jak se jmenuje divoká šelma, kterou přechovává Gorazd?",
    answers: [
      { classroom: "C223", text: "Karamel", answerId: "C" },
      { classroom: "B226", text: "Capuccino", answerId: "A" },
      {
        classroom: "C226",
        text: "Archibald, ničitel světů IV.",
        answerId: "B",
      },
    ],
    correctId: "C",
  },
];

export default quizData;
