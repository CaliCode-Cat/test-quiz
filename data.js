'use strict';

const ru = [
  {
    answers: [
      {correct: false, answer: "Clive Staples Lewis Lewis"},
      {correct: false, answer: "Robert Jordan"},
      {correct: true, answer: "Terry Goodkind"},
      {correct: false, answer: "George R. R. Martin"},
    ],
    question: "Who wrote 'Legend of the Seeker'?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "Barcelona"},
      {correct: false, answer: "Porto"},
      {correct: false, answer: "Madrid"},
      {correct: true, answer: "Lisbon"},
    ],
    question: "What is the capital of Portugal?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "стена"},
      {correct: false, answer: "окна"},
      {correct: true, answer: "окно"},
      {correct: false, answer: "подоконник"},
    ],
    question: "Which word is the Russian word for 'window'?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "луч"},
      {correct: true, answer: "ночь"},
      {correct: false, answer: "море"},
      {correct: true, answer: "дверь"},
      {correct: true, answer: "сумка"},
      {correct: false, answer: "стол"},
    ],
    question: "Which words are feminine?",
    type: "checkbox",
  },
];
/*
const en = [
  {
    answers: [
      {correct: false, answer: "R.L. Stine"},
      {correct: true, answer: "J.K. Rowling"},
      {correct: false, answer: "Terry Goodkind"},
      {correct: false, answer: "J.R.R. Tolkien"},
    ],
    question: "Who wrote 'Harry Potter'?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "Barcelona"},
      {correct: false, answer: "Porto"},
      {correct: false, answer: "Madrid"},
      {correct: true, answer: "Lisbon"},
    ],
    question: "What is the capital of Portugal?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "стена"},
      {correct: false, answer: "окна"},
      {correct: true, answer: "окно"},
      {correct: false, answer: "подоконник"},
    ],
    question: "Which word is the Russian word for 'window'?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "луч"},
      {correct: true, answer: "ночь"},
      {correct: false, answer: "море"},
      {correct: true, answer: "дверь"},
      {correct: true, answer: "сумка"},
      {correct: false, answer: "стол"},
    ],
    question: "Which words are feminine?",
    type: "checkbox",
  },
];*/

const en = [
  {
    answers: [
      {correct: false, answer: "R.L. Stine"},
      {correct: true, answer: "J.K. Rowling"},
      {correct: false, answer: "Terry Goodkind"},
      {correct: false, answer: "J.R.R. Tolkien"},
    ],
    question: "Who wrote 'Harry Potter'?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "Barcelona"},
      {correct: false, answer: "Valencia"},
      {correct: true, answer: "Madrid"},
      {correct: false, answer: "Seville"},
    ],
    question: "What is the capital of Spain?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "Trump"},
      {correct: false, answer: "Tom Cruise"},
      {correct: true, answer: "J.R.R. Tolkien"},
      {correct: false, answer: "A.S. Pushkin"},
    ],
    question: "Who insulted siamese cats?",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "собака"},
      {correct: true, answer: "кошка" },
      {correct: false, answer: "феня" },
      {correct: true, answer: "кот" },
    ],
    question: "Which are the words for 'cat' in Russian?",
    type: "checkbox",
  },
];

const dataList = {
  'en': en,
  'ru': ru,
};

const dataToFeedEn = [
  [
    'Who wrote \'Harry Potter\'?',
    ['R.L. Stine', 'J.K. Rowling', 'Terry Goodkind', 'J.R.R. Tolkien'],
    [1]
  ],
  [
    'What is the capital of Spain?',
    ['Barcelona', 'Valencia', 'Madrid', 'Seville'],
    [2]
  ],
  [
    'Who insulted siamese cats?',
    ['Trump', 'Tom Cruise', 'J.R.R. Tolkien', 'A.S. Pushkin'],
    [2]
  ],

  [
    'Which are the words for \'cat\' in Russian?',
    ['собака', 'кошка', 'феня', 'кот'],
    [1, 3]
  ],
];
const dataToFeedRu = [
  [
    'Who wrote \'Legend of the Seeker\'?',
    ['Clive Staples Lewis Lewis', 'Robert Jordan', 'Terry Goodkind', 'George R. R. Martin'],
    [2]
  ],
  [
    'What is the capital of Portugal?',
    ['Barcelona', 'Porto', 'Madrid', 'Lisbon'],
    [3]
  ],
  [
    'Which word is the Russian word for \'window\'?',
    ['стена', 'окна', 'окно', 'подоконник'],
    [2]
  ],

  [
    'Which words are feminine?',
    ['луч', 'ночь', 'море', 'дверь', 'сумка', 'стол'],
    [1, 3, 4]
  ],
];

