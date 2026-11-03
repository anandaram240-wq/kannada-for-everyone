// Interactive Quiz Dataset (30 Verified Questions across Categories)

export const QUIZ_CATEGORIES = [
  'All',
  'Quick 5-Min Sprint',
  'Vocabulary Meaning',
  'Situational Challenges',
  'Conversations & Listening'
];

export const QUIZ_QUESTIONS = [
  // 1. Common greetings
  {
    id: 'q_1',
    category: 'Vocabulary Meaning',
    type: 'kannada-to-english',
    question: 'What does "ಧನ್ಯವಾದಗಳು" (Dhanyavadagalu) mean?',
    kannadaText: 'ಧನ್ಯವಾದಗಳು',
    translitText: 'Dhanyavadagalu',
    options: [
      'Thank you',
      'Good morning',
      'Where are you going?',
      'Please sit down'
    ],
    correctAnswer: 0,
    explanation: '"ಧನ್ಯವಾದಗಳು" (Dhanyavadagalu) is the polite and formal Kannada word for "Thank you".'
  },
  {
    id: 'q_2',
    category: 'Vocabulary Meaning',
    type: 'kannada-to-english',
    question: 'What is the English meaning of "ನಮಸ್ಕಾರ" (Namaskara)?',
    kannadaText: 'ನಮಸ್ಕಾರ',
    translitText: 'Namaskara',
    options: [
      'Goodbye',
      'Hello / Greetings',
      'How much is this?',
      'I am hungry'
    ],
    correctAnswer: 1,
    explanation: '"Namaskara" is the universal, respectful Kannada greeting equivalent to "Hello".'
  },
  {
    id: 'q_3',
    category: 'Vocabulary Meaning',
    type: 'english-to-kannada',
    question: 'How do you say "Water" in Kannada?',
    kannadaText: 'Water',
    translitText: '',
    options: [
      'ನೀರು (Neeru)',
      'ಹಾಲು (Haalu)',
      'ಚಹಾ (Chaha)',
      'ಅನ್ನ (Anna)'
    ],
    correctAnswer: 0,
    explanation: '"ನೀರು" (Neeru) means water. Haalu = milk, Chaha = tea, Anna = cooked rice.'
  },
  {
    id: 'q_4',
    category: 'Situational Challenges',
    type: 'situational',
    question: 'You want an auto driver to use the meter. What should you say?',
    kannadaText: 'Auto Rickshaw Request',
    translitText: '',
    options: [
      'ಮೀಟರ್ ಹಾಕಿ ದಯವಿಟ್ಟು (Meter haaki dayavittu)',
      'ಬೇಗ ಹೋಗಿ (Bega hogi)',
      'ನನಗೆ ರಸ್ತೆ ಗೊತ್ತಿಲ್ಲ (Nanage raste gottilla)',
      'ಇಲ್ಲಿ ನಿಲ್ಲಬೇಡಿ (Illi nillabedi)'
    ],
    correctAnswer: 0,
    explanation: '"ಮೀಟರ್ ಹಾಕಿ ದಯವಿಟ್ಟು" (Meter haaki dayavittu) politely requests the driver to turn on the electronic meter.'
  },
  {
    id: 'q_5',
    category: 'Quick 5-Min Sprint',
    type: 'kannada-to-english',
    question: 'What does "ಊಟ ಆಯ್ತಾ?" (Oota aaytha?) literally mean and how is it used?',
    kannadaText: 'ಊಟ ಆಯ್ತಾ?',
    translitText: 'Oota aaytha?',
    options: [
      'Did you have your meal? (A warm, caring everyday greeting)',
      'Where is the restaurant?',
      'How much is the bill?',
      'Do you want water?'
    ],
    correctAnswer: 0,
    explanation: 'In Karnataka culture, asking "Oota aaytha?" (Did you have your meal?) is a universal gesture of care, often used just like "How are you?".'
  },
  {
    id: 'q_6',
    category: 'Vocabulary Meaning',
    type: 'kannada-to-english',
    question: 'Translate the number "ಮೂರು" (Mooru) to English:',
    kannadaText: 'ಮೂರು',
    translitText: 'Mooru',
    options: [
      'One (1)',
      'Two (2)',
      'Three (3)',
      'Four (4)'
    ],
    correctAnswer: 2,
    explanation: 'Ondu = 1, Eradu = 2, Mooru = 3, Naalku = 4, Aidu = 5.'
  },
  {
    id: 'q_7',
    category: 'Conversations & Listening',
    type: 'fill-blank',
    question: 'Complete the sentence: "ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ________." (I understand a little Kannada)',
    kannadaText: 'ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ________.',
    translitText: 'Nanage swalpa Kannada ________.',
    options: [
      'ಬರುತ್ತದೆ (baruttade)',
      'ಹೋಗುತ್ತದೆ (hoguttade)',
      'ತಿನ್ನುತ್ತದೆ (thinnuttade)',
      'ಮಲಗುತ್ತದೆ (malaguttade)'
    ],
    correctAnswer: 0,
    explanation: '"Nanage swalpa Kannada baruttade" means "Kannada comes to me a little" (I understand/know a little Kannada).'
  },
  {
    id: 'q_8',
    category: 'Situational Challenges',
    type: 'situational',
    question: 'At a vegetable market, how do you ask "How much per kilogram?"',
    kannadaText: 'Market Inquiry',
    translitText: '',
    options: [
      'ಕೆಜಿಗೆ ಎಷ್ಟು? (Kg-ge eshtu?)',
      'ಕೆಜಿ ಎಲ್ಲಿ? (Kg yelli?)',
      'ಕೆಜಿ ಬೇಡ (Kg beda)',
      'ಕೆಜಿ ಯಾವಾಗ? (Kg yaavaaga?)'
    ],
    correctAnswer: 0,
    explanation: '"Kg-ge eshtu?" means "How much per kg?". Eshtu = how much / how many.'
  },
  {
    id: 'q_9',
    category: 'Vocabulary Meaning',
    type: 'kannada-to-english',
    question: 'What does "ದಯವಿಟ್ಟು" (Dayavittu) mean?',
    kannadaText: 'ದಯವಿಟ್ಟು',
    translitText: 'Dayavittu',
    options: [
      'Please',
      'Thank you',
      'Sorry',
      'Welcome'
    ],
    correctAnswer: 0,
    explanation: '"Dayavittu" is the formal Kannada word for "Please".'
  },
  {
    id: 'q_10',
    category: 'Conversations & Listening',
    type: 'kannada-to-english',
    question: 'What does the conductor mean when asking "ಚಿಲ್ಲರೆ ಇದೆಯಾ?" (Chillare ideya?)',
    kannadaText: 'ಚಿಲ್ಲರೆ ಇದೆಯಾ?',
    translitText: 'Chillare ideya?',
    options: [
      'Do you have change / coins?',
      'Do you want a ticket?',
      'Are you getting down at next stop?',
      'Where is your seat?'
    ],
    correctAnswer: 0,
    explanation: '"Chillare" means change or loose currency notes/coins, and "ideya?" means "do you have?".'
  },
  {
    id: 'q_11',
    category: 'Quick 5-Min Sprint',
    type: 'english-to-kannada',
    question: 'How do you say "I want / I need" in Kannada?',
    kannadaText: 'I want / needed',
    translitText: '',
    options: [
      'ಬೇಕು (Beku)',
      'ಬೇಡ (Beda)',
      'ಇಲ್ಲ (Illa)',
      'ಹೌದು (Haudu)'
    ],
    correctAnswer: 0,
    explanation: '"Beku" means "I want/needed". Its opposite is "Beda" (do not want).'
  },
  {
    id: 'q_12',
    category: 'Vocabulary Meaning',
    type: 'english-to-kannada',
    question: 'Which word means "Tomorrow" in Kannada?',
    kannadaText: 'Tomorrow',
    translitText: '',
    options: [
      'ನಾಳೆ (Naale)',
      'ನಿನ್ನೆ (Ninne)',
      'ಇವತ್ತು (Ivattu)',
      'ಈಗ (Eega)'
    ],
    correctAnswer: 0,
    explanation: 'Naale = tomorrow, Ninne = yesterday, Ivattu = today, Eega = now.'
  },
  {
    id: 'q_13',
    category: 'Situational Challenges',
    type: 'situational',
    question: 'You want to order one Masala Dosa at a Darshini restaurant. What should you ask for?',
    kannadaText: 'Restaurant Order',
    translitText: '',
    options: [
      'ಒಂದು ಮಸಾಲೆ ದೋಸೆ ಕೊಡಿ (Ondu masala dose kodi)',
      'ನನಗೆ ದೋಸೆ ಬೇಡ (Nanage dose beda)',
      'ದೋಸೆ ಯಾವಾಗ ತಿಂದಿರಿ? (Dose yaavaaga thindiri?)',
      'ಕಾಫಿ ಚೆನ್ನಾಗಿಲ್ಲ (Coffee chennagilla)'
    ],
    correctAnswer: 0,
    explanation: '"Ondu masala dose kodi" means "Please give one masala dosa". Kodi = give respectfully.'
  },
  {
    id: 'q_14',
    category: 'Vocabulary Meaning',
    type: 'kannada-to-english',
    question: 'What does "ನೇರವಾಗಿ ಹೋಗಿ" (Nera-vaagi hogi) mean in direction giving?',
    kannadaText: 'ನೇರವಾಗಿ ಹೋಗಿ',
    translitText: 'Nera-vaagi hogi',
    options: [
      'Go straight',
      'Turn left',
      'Turn right',
      'Stop here'
    ],
    correctAnswer: 0,
    explanation: '"Nera-vaagi" means straight, and "hogi" means go.'
  },
  {
    id: 'q_15',
    category: 'Situational Challenges',
    type: 'situational',
    question: 'If you have an urgent medical emergency and need help immediately, what do you shout?',
    kannadaText: 'Emergency call',
    translitText: '',
    options: [
      'ಸಹಾಯ ಮಾಡಿ! (Sahaaya maadi!)',
      'ಶುಭ ರಾತ್ರಿ (Shubha raatri)',
      'ಎಲ್ಲರೂ ಬನ್ನಿ (Ellaroo banni)',
      'ಟಿಕೆಟ್ ತಗೊಳ್ಳಿ (Ticket thagolli)'
    ],
    correctAnswer: 0,
    explanation: '"Sahaaya maadi!" translates to "Please help!" in an emergency.'
  },
  {
    id: 'q_16',
    category: 'Vocabulary Meaning',
    type: 'english-to-kannada',
    question: 'How do you say "Friend" in Kannada?',
    kannadaText: 'Friend',
    translitText: '',
    options: [
      'ಸ್ನೇಹಿತ / ಗೆಳೆಯ (Snehitha / Geleya)',
      'ಶತ್ರು (Shatru)',
      'ವೈದ್ಯ (Vaidya)',
      'ಅಂಗಡಿ (Angadi)'
    ],
    correctAnswer: 0,
    explanation: '"Snehitha" (formal) or "Geleya" (native) means friend in Kannada.'
  },
  {
    id: 'q_17',
    category: 'Quick 5-Min Sprint',
    type: 'kannada-to-english',
    question: 'What does "ಗೊತ್ತಿಲ್ಲ" (Gottilla) mean?',
    kannadaText: 'ಗೊತ್ತಿಲ್ಲ',
    translitText: 'Gottilla',
    options: [
      'I don\'t know',
      'I know very well',
      'I am busy',
      'I will not come'
    ],
    correctAnswer: 0,
    explanation: '"Gottilla" means "I do not know". "Gottu" means "I know".'
  },
  {
    id: 'q_18',
    category: 'Conversations & Listening',
    type: 'situational',
    question: 'Your colleague asks: "ಇವತ್ತು ಮೀಟಿಂಗ್ ಯಾವಾಗ?" (Ivattu meeting yaavaaga?). What are they asking?',
    kannadaText: 'ಇವತ್ತು ಮೀಟಿಂಗ್ ಯಾವಾಗ?',
    translitText: 'Ivattu meeting yaavaaga?',
    options: [
      'When is the meeting today?',
      'Where is the meeting today?',
      'Who is leading the meeting today?',
      'Why is the meeting cancelled?'
    ],
    correctAnswer: 0,
    explanation: '"Yaavaaga" means "When". Ivattu = today. So "When is the meeting today?".'
  },
  {
    id: 'q_19',
    category: 'Vocabulary Meaning',
    type: 'kannada-to-english',
    question: 'What does "ಬಲಗಡೆ" (Balagade) mean?',
    kannadaText: 'ಬಲಗಡೆ',
    translitText: 'Balagade',
    options: [
      'Right side',
      'Left side',
      'Straight ahead',
      'Backwards'
    ],
    correctAnswer: 0,
    explanation: '"Balagade" is right side. "Edagade" is left side.'
  },
  {
    id: 'q_20',
    category: 'Quick 5-Min Sprint',
    type: 'kannada-to-english',
    question: 'What does "ಕಡಿಮೆ ಮಾಡಿ" (Kadime maadi) mean when bargaining with a shopkeeper?',
    kannadaText: 'ಕಡಿಮೆ ಮಾಡಿ',
    translitText: 'Kadime maadi',
    options: [
      'Reduce the price',
      'Give me more items',
      'Pack this quickly',
      'I don\'t have money'
    ],
    correctAnswer: 0,
    explanation: '"Kadime maadi" literally means "make it less / reduce it" (give a discount).'
  },
  {
    id: 'q_21',
    category: 'Vocabulary Meaning',
    type: 'english-to-kannada',
    question: 'How do you say the number "Ten (10)" in Kannada?',
    kannadaText: 'Ten (10)',
    translitText: '',
    options: [
      'ಹತ್ತು (Hattu)',
      'ಐದು (Aidu)',
      'ಇಪ್ಪತ್ತು (Ippattu)',
      'ನೂರು (Nooru)'
    ],
    correctAnswer: 0,
    explanation: 'Hattu = 10, Aidu = 5, Ippattu = 20, Nooru = 100.'
  },
  {
    id: 'q_22',
    category: 'Situational Challenges',
    type: 'situational',
    question: 'How do you tell someone "See you again / Goodbye" warmly in Kannada?',
    kannadaText: 'See you again',
    translitText: '',
    options: [
      'ಮತ್ತೆ ಸಿಗೋಣ (Matte sigona)',
      'ಹೋಗಿ ಬನ್ನಿ (Hogi banni)',
      'ನಿಲ್ಲಿಸಿ (Nillisi)',
      'ಬೇಗ ಬನ್ನಿ (Bega banni)'
    ],
    correctAnswer: 0,
    explanation: '"Matte sigona" literally means "Let us meet again", which is the warm Kannada equivalent to "See you again".'
  },
  {
    id: 'q_23',
    category: 'Conversations & Listening',
    type: 'kannada-to-english',
    question: 'What does "ನನಗೆ ಜ್ವರ ಇದೆ" (Nanage jvara ide) mean to a doctor?',
    kannadaText: 'ನನಗೆ ಜ್ವರ ಇದೆ',
    translitText: 'Nanage jvara ide',
    options: [
      'I have a fever',
      'I have stomach pain',
      'I have a cold',
      'I am feeling sleepy'
    ],
    correctAnswer: 0,
    explanation: '"Jvara" means fever. "Nanage ... ide" means "I have ...".'
  },
  {
    id: 'q_24',
    category: 'Vocabulary Meaning',
    type: 'kannada-to-english',
    question: 'What is the meaning of "ಮನೆ" (Mane)?',
    kannadaText: 'ಮನೆ',
    translitText: 'Mane',
    options: [
      'House / Home',
      'Street',
      'City',
      'Office'
    ],
    correctAnswer: 0,
    explanation: '"Mane" means house or home in Kannada.'
  },
  {
    id: 'q_25',
    category: 'Situational Challenges',
    type: 'fill-blank',
    question: 'When asking for coffee politely, which verb form should you use? "ಒಂದು ಕಾಫಿ ________."',
    kannadaText: 'ಒಂದು ಕಾಫಿ ________.',
    translitText: 'Ondu coffee ________.',
    options: [
      'ಕೊಡಿ (kodi - polite)',
      'ಕೊಡು (kodu - informal)',
      'ತಿಂದೆ (thinde)',
      'ಕುಡಿ (kudi)'
    ],
    correctAnswer: 0,
    explanation: '"Kodi" is the polite plural/respectful imperative ("please give"), whereas "Kodu" is informal and should only be used with very close friends or kids.'
  }
];
