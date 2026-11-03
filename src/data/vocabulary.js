// Kannada Vocabulary Dataset (65+ Verified Beginner Entries across 12 Categories)

export const VOCABULARY_CATEGORIES = [
  'All',
  'Greetings',
  'Common Expressions',
  'Numbers',
  'Time & Dates',
  'Food & Dining',
  'Transportation',
  'Shopping & Money',
  'Directions & Places',
  'Family & People',
  'Workplace & Tech',
  'Emergency & Health'
];

export const VOCABULARY_ITEMS = [
  // 1. Greetings
  {
    id: 'v_greet_1',
    kannada: 'ನಮಸ್ಕಾರ',
    transliteration: 'Namaskara',
    english: 'Hello / Greetings',
    category: 'Greetings',
    exampleKn: 'ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?',
    exampleTranslit: 'Namaskara, neevu hegiddiri?',
    exampleEn: 'Hello, how are you?',
    notes: 'The universal polite greeting in Kannada, used at any time of day.'
  },
  {
    id: 'v_greet_2',
    kannada: 'ಧನ್ಯವಾದಗಳು',
    transliteration: 'Dhanyavadagalu',
    english: 'Thank you',
    category: 'Greetings',
    exampleKn: 'ನಿಮ್ಮ ಸಹಾಯಕ್ಕೆ ತುಂಬಾ ಧನ್ಯವಾದಗಳು.',
    exampleTranslit: 'Nimma sahaayakke thumba dhanyavadagalu.',
    exampleEn: 'Thank you very much for your help.',
    notes: 'Formal and polite way to express gratitude.'
  },
  {
    id: 'v_greet_3',
    kannada: 'ಶುಭೋದಯ',
    transliteration: 'Shubhodaya',
    english: 'Good morning',
    category: 'Greetings',
    exampleKn: 'ಶುಭೋದಯ ಸರ್, ಇವತ್ತು ಮೀಟಿಂಗ್ ಇದೆಯಾ?',
    exampleTranslit: 'Shubhodaya sir, ivattu meeting ideya?',
    exampleEn: 'Good morning sir, is there a meeting today?',
    notes: 'Formal morning greeting.'
  },
  {
    id: 'v_greet_4',
    kannada: 'ಶುಭ ರಾತ್ರಿ',
    transliteration: 'Shubha raatri',
    english: 'Good night',
    category: 'Greetings',
    exampleKn: 'ಶುಭ ರಾತ್ರಿ, ನಾಳೆ ಸಿಗೋಣ.',
    exampleTranslit: 'Shubha raatri, naale sigona.',
    exampleEn: 'Good night, let us meet tomorrow.',
    notes: 'Used when parting at night or before sleep.'
  },
  {
    id: 'v_greet_5',
    kannada: 'ಮತ್ತೆ ಸಿಗೋಣ',
    transliteration: 'Matte sigona',
    english: 'See you again / Goodbye',
    category: 'Greetings',
    exampleKn: 'ಸರಿ, ನಾನು ಹೊರಡುತ್ತೇನೆ, ಮತ್ತೆ ಸಿಗೋಣ!',
    exampleTranslit: 'Sari, naanu horaduttene, matte sigona!',
    exampleEn: 'Alright, I am leaving, see you again!',
    notes: 'Friendly goodbye phrase meaning "let us meet again".'
  },
  {
    id: 'v_greet_6',
    kannada: 'ದಯವಿಟ್ಟು',
    transliteration: 'Dayavittu',
    english: 'Please',
    category: 'Greetings',
    exampleKn: 'ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ.',
    exampleTranslit: 'Dayavittu illi kulitukolli.',
    exampleEn: 'Please sit down here.',
    notes: 'Polite request marker.'
  },

  // 2. Common Expressions
  {
    id: 'v_comm_1',
    kannada: 'ಹೌದು',
    transliteration: 'Haudu',
    english: 'Yes',
    category: 'Common Expressions',
    exampleKn: 'ಹೌದು, ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಾಸಿಸುತ್ತೇನೆ.',
    exampleTranslit: 'Haudu, naanu Bengalurinalli vaasisuttene.',
    exampleEn: 'Yes, I live in Bengaluru.',
    notes: 'Affirmative statement.'
  },
  {
    id: 'v_comm_2',
    kannada: 'ಇಲ್ಲ',
    transliteration: 'Illa',
    english: 'No / Not available',
    category: 'Common Expressions',
    exampleKn: 'ಇಲ್ಲ, ನನ್ನ ಬಳಿ ಚಿಲ್ಲರೆ ಇಲ್ಲ.',
    exampleTranslit: 'Illa, nanna bali chillare illa.',
    exampleEn: 'No, I do not have change.',
    notes: 'Can mean both "No" as an answer and "does not exist/absent".'
  },
  {
    id: 'v_comm_3',
    kannada: 'ಹೇಗಿದ್ದೀರಿ?',
    transliteration: 'Hegiddiri?',
    english: 'How are you? (Respectful)',
    category: 'Common Expressions',
    exampleKn: 'ನಮಸ್ಕಾರ ಅಂಕಲ್, ಹೇಗಿದ್ದೀರಿ?',
    exampleTranslit: 'Namaskara uncle, hegiddiri?',
    exampleEn: 'Hello uncle, how are you?',
    notes: 'Plural/polite form. For peers/close friends, "Hegiddiya?" is used.'
  },
  {
    id: 'v_comm_4',
    kannada: 'ಚೆನ್ನಾಗಿದ್ದೀನಿ',
    transliteration: 'Chennagiddini',
    english: 'I am doing well',
    category: 'Common Expressions',
    exampleKn: 'ನಾನು ತುಂಬಾ ಚೆನ್ನಾಗಿದ್ದೀನಿ, ನೀವು?',
    exampleTranslit: 'Naanu thumba chennagiddini, neevu?',
    exampleEn: 'I am doing very well, and you?',
    notes: 'Standard positive answer to "Hegiddiri?".'
  },
  {
    id: 'v_comm_5',
    kannada: 'ಗೊತ್ತು',
    transliteration: 'Gottu',
    english: 'I know',
    category: 'Common Expressions',
    exampleKn: 'ನನಗೆ ಈ ರಸ್ತೆ ಗೊತ್ತು.',
    exampleTranslit: 'Nanage ee raste gottu.',
    exampleEn: 'I know this street.',
    notes: 'Opposite is "Gottilla" (I do not know).'
  },
  {
    id: 'v_comm_6',
    kannada: 'ಗೊತ್ತಿಲ್ಲ',
    transliteration: 'Gottilla',
    english: 'I do not know',
    category: 'Common Expressions',
    exampleKn: 'ನನಗೆ ಕನ್ನಡ ಹೆಚ್ಚು ಗೊತ್ತಿಲ್ಲ, ಕಲಿಯುತ್ತಿದ್ದೇನೆ.',
    exampleTranslit: 'Nanage Kannada hecchu gottilla, kaliyuttiddene.',
    exampleEn: 'I do not know much Kannada, I am learning.',
    notes: 'Extremely helpful phrase for newcomers.'
  },
  {
    id: 'v_comm_7',
    kannada: 'ಕ್ಷಮಿಸಿ',
    transliteration: 'Kshamisi',
    english: 'Excuse me / Sorry',
    category: 'Common Expressions',
    exampleKn: 'ಕ್ಷಮಿಸಿ, ಈ ಬಸ್ ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಹೋಗುತ್ತಾ?',
    exampleTranslit: 'Kshamisi, ee bus Majestic-ge hoguttaa?',
    exampleEn: 'Excuse me, does this bus go to Majestic?',
    notes: 'Used to apologize or politely get attention.'
  },
  {
    id: 'v_comm_8',
    kannada: 'ಸ್ವಲ್ಪ',
    transliteration: 'Swalpa',
    english: 'A little / A bit',
    category: 'Common Expressions',
    exampleKn: 'ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಬರುತ್ತದೆ.',
    exampleTranslit: 'Nanage swalpa Kannada baruttade.',
    exampleEn: 'I understand a little Kannada.',
    notes: 'One of the most frequently heard words across Karnataka!'
  },

  // 3. Numbers
  {
    id: 'v_num_1',
    kannada: 'ಒಂದು',
    transliteration: 'Ondu',
    english: 'One (1)',
    category: 'Numbers',
    exampleKn: 'ಒಂದು ಚಹಾ ಕೊಡಿ.',
    exampleTranslit: 'Ondu chaha kodi.',
    exampleEn: 'Give me one tea.',
    notes: 'Number 1.'
  },
  {
    id: 'v_num_2',
    kannada: 'ಎರಡು',
    transliteration: 'Eradu',
    english: 'Two (2)',
    category: 'Numbers',
    exampleKn: 'ಎರಡು ಟಿಕೆಟ್ ಕೊಡಿ.',
    exampleTranslit: 'Eradu ticket kodi.',
    exampleEn: 'Give me two tickets.',
    notes: 'Number 2.'
  },
  {
    id: 'v_num_3',
    kannada: 'ಮೂರು',
    transliteration: 'Mooru',
    english: 'Three (3)',
    category: 'Numbers',
    exampleKn: 'ಮೂರು ದೋಸೆ ಪಾರ್ಸಲ್ ಮಾಡಿ.',
    exampleTranslit: 'Mooru dose parcel maadi.',
    exampleEn: 'Pack three dosas to go.',
    notes: 'Number 3.'
  },
  {
    id: 'v_num_4',
    kannada: 'ನಾಲ್ಕು',
    transliteration: 'Naalku',
    english: 'Four (4)',
    category: 'Numbers',
    exampleKn: 'ನಾಲ್ಕು ಕಿಲೋಮೀಟರ್ ದೂರ ಇದೆ.',
    exampleTranslit: 'Naalku kilometer doora ide.',
    exampleEn: 'It is four kilometers away.',
    notes: 'Number 4.'
  },
  {
    id: 'v_num_5',
    kannada: 'ಐದು',
    transliteration: 'Aidu',
    english: 'Five (5)',
    category: 'Numbers',
    exampleKn: 'ಐದು ನಿಮಿಷ ಕಾಯಿರಿ.',
    exampleTranslit: 'Aidu nimisha kaayiri.',
    exampleEn: 'Wait for five minutes.',
    notes: 'Number 5.'
  },
  {
    id: 'v_num_6',
    kannada: 'ಹತ್ತು',
    transliteration: 'Hattu',
    english: 'Ten (10)',
    category: 'Numbers',
    exampleKn: 'ಹತ್ತು ರೂಪಾಯಿ ಕೊಡಿ.',
    exampleTranslit: 'Hattu roopayi kodi.',
    exampleEn: 'Please give ten rupees.',
    notes: 'Number 10.'
  },
  {
    id: 'v_num_7',
    kannada: 'ಇಪ್ಪತ್ತು',
    transliteration: 'Ippattu',
    english: 'Twenty (20)',
    category: 'Numbers',
    exampleKn: 'ಇಪ್ಪತ್ತು ರೂಪಾಯಿ ಚಿಲ್ಲರೆ ಕೊಡಿ.',
    exampleTranslit: 'Ippattu roopayi chillare kodi.',
    exampleEn: 'Give twenty rupees in change.',
    notes: 'Number 20.'
  },
  {
    id: 'v_num_8',
    kannada: 'ನೂರು',
    transliteration: 'Nooru',
    english: 'One Hundred (100)',
    category: 'Numbers',
    exampleKn: 'ಇದರ ಬೆಲೆ ನೂರು ರೂಪಾಯಿ.',
    exampleTranslit: 'Idara bele nooru roopayi.',
    exampleEn: 'Its price is one hundred rupees.',
    notes: 'Number 100.'
  },
  {
    id: 'v_num_9',
    kannada: 'ಸಾವಿರ',
    transliteration: 'Saavira',
    english: 'One Thousand (1,000)',
    category: 'Numbers',
    exampleKn: 'ಒಂದು ಸಾವಿರ ರೂಪಾಯಿ ಆಯಿತು.',
    exampleTranslit: 'Ondu saavira roopayi aayitu.',
    exampleEn: 'It came to one thousand rupees.',
    notes: 'Number 1,000.'
  },

  // 4. Time & Dates
  {
    id: 'v_time_1',
    kannada: 'ಇವತ್ತು / ಇಂದು',
    transliteration: 'Ivattu / Indu',
    english: 'Today',
    category: 'Time & Dates',
    exampleKn: 'ಇವತ್ತು ರಜಾ ಇದೆಯಾ?',
    exampleTranslit: 'Ivattu raja ideya?',
    exampleEn: 'Is today a holiday?',
    notes: 'Ivattu is commonly spoken; Indu is more literary.'
  },
  {
    id: 'v_time_2',
    kannada: 'ನಾಳೆ',
    transliteration: 'Naale',
    english: 'Tomorrow',
    category: 'Time & Dates',
    exampleKn: 'ನಾಳೆ ಬೆಳಿಗ್ಗೆ ನಾನು ಬರುತ್ತೇನೆ.',
    exampleTranslit: 'Naale beligge naanu baruttene.',
    exampleEn: 'I will come tomorrow morning.',
    notes: 'Key temporal word.'
  },
  {
    id: 'v_time_3',
    kannada: 'ನಿನ್ನೆ',
    transliteration: 'Ninne',
    english: 'Yesterday',
    category: 'Time & Dates',
    exampleKn: 'ನಿನ್ನೆ ಜೋರು ಮಳೆ ಬಂತು.',
    exampleTranslit: 'Ninne joru male bantu.',
    exampleEn: 'Yesterday it rained heavily.',
    notes: 'Past day.'
  },
  {
    id: 'v_time_4',
    kannada: 'ಈಗ',
    transliteration: 'Eega',
    english: 'Now',
    category: 'Time & Dates',
    exampleKn: 'ಈಗ ಸಮಯ ಎಷ್ಟು?',
    exampleTranslit: 'Eega samaya eshtu?',
    exampleEn: 'What time is it now?',
    notes: 'Crucial for coordinating.'
  },
  {
    id: 'v_time_5',
    kannada: 'ಬೆಳಿಗ್ಗೆ',
    transliteration: 'Beligge',
    english: 'Morning',
    category: 'Time & Dates',
    exampleKn: 'ಬೆಳಿಗ್ಗೆ ಎಂಟು ಗಂಟೆಗೆ ಬನ್ನಿ.',
    exampleTranslit: 'Beligge entu gantege banni.',
    exampleEn: 'Come at 8 o\'clock in the morning.',
    notes: 'Morning time.'
  },
  {
    id: 'v_time_6',
    kannada: 'ಸಂಜೆ',
    transliteration: 'Sanje',
    english: 'Evening',
    category: 'Time & Dates',
    exampleKn: 'ಸಂಜೆ ಕಾಫಿ ಕುಡಿಯೋಣ.',
    exampleTranslit: 'Sanje coffee kudiyona.',
    exampleEn: 'Let us drink coffee in the evening.',
    notes: 'Evening time.'
  },

  // 5. Food & Dining
  {
    id: 'v_food_1',
    kannada: 'ಊಟ',
    transliteration: 'Oota',
    english: 'Meal / Lunch / Dinner',
    category: 'Food & Dining',
    exampleKn: 'ಊಟ ಆಯ್ತಾ?',
    exampleTranslit: 'Oota aaytha?',
    exampleEn: 'Did you have your meal? (Common warm greeting in Karnataka)',
    notes: 'Asking "Oota aaytha?" is the ultimate sign of hospitality and care in Karnataka!'
  },
  {
    id: 'v_food_2',
    kannada: 'ತಿಂಡಿ',
    transliteration: 'Thindi',
    english: 'Breakfast / Snack',
    category: 'Food & Dining',
    exampleKn: 'ಬೆಳಗಿನ ತಿಂಡಿಗೆ ಏನು ಇದೆ?',
    exampleTranslit: 'Belagina thindige enu ide?',
    exampleEn: 'What is there for breakfast?',
    notes: 'Refers to South Indian breakfast or evening snacks.'
  },
  {
    id: 'v_food_3',
    kannada: 'ನೀರು',
    transliteration: 'Neeru',
    english: 'Water',
    category: 'Food & Dining',
    exampleKn: 'ದಯವಿಟ್ಟು ಕುಡಿಯಲು ನೀರು ಕೊಡಿ.',
    exampleTranslit: 'Dayavittu kudiyalu neeru kodi.',
    exampleEn: 'Please give me water to drink.',
    notes: 'Essential daily need.'
  },
  {
    id: 'v_food_4',
    kannada: 'ಬೇಕು',
    transliteration: 'Beku',
    english: 'I want / Needed',
    category: 'Food & Dining',
    exampleKn: 'ನನಗೆ ಒಂದು ಮಸಾಲೆ ದೋಸೆ ಬೇಕು.',
    exampleTranslit: 'Nanage ondu masala dose beku.',
    exampleEn: 'I want one masala dosa.',
    notes: 'Essential helper verb for expressing desire.'
  },
  {
    id: 'v_food_5',
    kannada: 'ಬೇಡ',
    transliteration: 'Beda',
    english: 'Do not want / Not needed',
    category: 'Food & Dining',
    exampleKn: 'ಖಾರ ಬೇಡ, ಸಾಧಾರಣವಾಗಿ ಮಾಡಿ.',
    exampleTranslit: 'Khaara beda, saadhaarana-vaagi maadi.',
    exampleEn: 'I don\'t want spicy, make it normal.',
    notes: 'Polite refusal when combined with gestures.'
  },
  {
    id: 'v_food_6',
    kannada: 'ರುಚಿ',
    transliteration: 'Ruchi',
    english: 'Tasty / Delicious',
    category: 'Food & Dining',
    exampleKn: 'ಈ ಸಾಂಬಾರ್ ತುಂಬಾ ರುಚಿಯಾಗಿದೆ!',
    exampleTranslit: 'Ee sambar thumba ruchiyaagide!',
    exampleEn: 'This sambar is very delicious!',
    notes: 'Compliment to the cook.'
  },
  {
    id: 'v_food_7',
    kannada: 'ಬಿಲ್ಲು',
    transliteration: 'Billu',
    english: 'Bill / Receipt',
    category: 'Food & Dining',
    exampleKn: 'ಸರ್, ಬಿಲ್ ಎಷ್ಟು ಆಯಿತು?',
    exampleTranslit: 'Sir, bill eshtu aayitu?',
    exampleEn: 'Sir, how much is the bill?',
    notes: 'Used at restaurants and shops.'
  },

  // 6. Transportation
  {
    id: 'v_trans_1',
    kannada: 'ಬಸ್ಸು',
    transliteration: 'Bussu',
    english: 'Bus',
    category: 'Transportation',
    exampleKn: 'ಮೆಜೆಸ್ಟಿಕ್ ಬಸ್ ಯಾವಾಗ ಬರುತ್ತದೆ?',
    exampleTranslit: 'Majestic bus yaavaaga baruttade?',
    exampleEn: 'When does the Majestic bus arrive?',
    notes: 'Common mode of public transit.'
  },
  {
    id: 'v_trans_2',
    kannada: 'ಆಟೋ',
    transliteration: 'Auto',
    english: 'Auto Rickshaw',
    category: 'Transportation',
    exampleKn: 'ಆಟೋ ಅವರಿಗೆ ಮೀಟರ್ ಹಾಕಲು ಹೇಳಿ.',
    exampleTranslit: 'Auto avarige meter haakalu heli.',
    exampleEn: 'Tell the auto driver to turn on the meter.',
    notes: 'Ubiquitous mode of travel.'
  },
  {
    id: 'v_trans_3',
    kannada: 'ಬಾಡಿಗೆ',
    transliteration: 'Baadige',
    english: 'Fare / Rent',
    category: 'Transportation',
    exampleKn: 'ಇಲ್ಲಿಂದ ಇಂದಿರಾನಗರಕ್ಕೆ ಎಷ್ಟು ಬಾಡಿಗೆ?',
    exampleTranslit: 'Illinda Indiranagarakke eshtu baadige?',
    exampleEn: 'How much is the fare from here to Indiranagar?',
    notes: 'Refers to both transit fare and house rent.'
  },
  {
    id: 'v_trans_4',
    kannada: 'ನಿಲ್ಲಿಸಿ',
    transliteration: 'Nillisi',
    english: 'Stop (polite)',
    category: 'Transportation',
    exampleKn: 'ಮುಂದಿನ ಸಿಗ್ನಲ್ ಬಳಿ ನಿಲ್ಲಿಸಿ.',
    exampleTranslit: 'Mundina signal bali nillisi.',
    exampleEn: 'Stop near the next traffic signal.',
    notes: 'Say to conductors or drivers when reaching your stop.'
  },
  {
    id: 'v_trans_5',
    kannada: 'ನಿಲ್ದಾಣ',
    transliteration: 'Nildaana',
    english: 'Station / Bus Stop',
    category: 'Transportation',
    exampleKn: 'ರೈಲ್ವೆ ನಿಲ್ದಾಣ ಎಲ್ಲಿ ಬರುತ್ತೆ?',
    exampleTranslit: 'Railway nildaana yelli barutte?',
    exampleEn: 'Where is the railway station located?',
    notes: 'Bus stand = Bus nildaana.'
  },

  // 7. Shopping & Money
  {
    id: 'v_shop_1',
    kannada: 'ಎಷ್ಟು?',
    transliteration: 'Eshtu?',
    english: 'How much? / How many?',
    category: 'Shopping & Money',
    exampleKn: 'ಇದರ ಬೆಲೆ ಎಷ್ಟು?',
    exampleTranslit: 'Idara bele eshtu?',
    exampleEn: 'How much does this cost?',
    notes: 'Crucial bargaining and price inquiry word.'
  },
  {
    id: 'v_shop_2',
    kannada: 'ಕಡಿಮೆ ಮಾಡಿ',
    transliteration: 'Kadime maadi',
    english: 'Reduce the price / Give discount',
    category: 'Shopping & Money',
    exampleKn: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ ಅಣ್ಣಾ.',
    exampleTranslit: 'Swalpa kadime maadi anna.',
    exampleEn: 'Please reduce the price a bit, brother.',
    notes: 'Friendly market bargaining phrase.'
  },
  {
    id: 'v_shop_3',
    kannada: 'ಚಿಲ್ಲರೆ',
    transliteration: 'Chillare',
    english: 'Change / Coins',
    category: 'Shopping & Money',
    exampleKn: 'ನಿಮ್ಮ ಹತ್ತಿರ ಐನೂರು ರೂಪಾಯಿಗೆ ಚಿಲ್ಲರೆ ಇದೆಯಾ?',
    exampleTranslit: 'Nimma hathira ainooru roopayige chillare ideya?',
    exampleEn: 'Do you have change for 500 rupees?',
    notes: 'Very frequently asked on buses and small stalls.'
  },
  {
    id: 'v_shop_4',
    kannada: 'ದುಡ್ಡು / ಹಣ',
    transliteration: 'Duddu / Hana',
    english: 'Money',
    category: 'Shopping & Money',
    exampleKn: 'ನಾನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ದುಡ್ಡು ಕೊಡುತ್ತೇನೆ.',
    exampleTranslit: 'Naanu online-nalli duddu koduttene.',
    exampleEn: 'I will pay the money online (UPI).',
    notes: 'Duddu is everyday spoken; Hana is formal.'
  },
  {
    id: 'v_shop_5',
    kannada: 'ಅಂಗಡಿ',
    transliteration: 'Angadi',
    english: 'Shop / Store',
    category: 'Shopping & Money',
    exampleKn: 'ಹತ್ತಿರದ ದಿನಸಿ ಅಂಗಡಿ ಎಲ್ಲಿದೆ?',
    exampleTranslit: 'Hatthirada dinasi angadi yallide?',
    exampleEn: 'Where is the nearest grocery shop?',
    notes: 'Refers to retail shops.'
  },

  // 8. Directions & Places
  {
    id: 'v_dir_1',
    kannada: 'ಎಲ್ಲಿ?',
    transliteration: 'Yelli?',
    english: 'Where?',
    category: 'Directions & Places',
    exampleKn: 'ಮೆಟ್ರೋ ನಿಲ್ದಾಣ ಎಲ್ಲಿ ಇದೆ?',
    exampleTranslit: 'Metro nildaana yelli ide?',
    exampleEn: 'Where is the metro station?',
    notes: 'Essential question word for locations.'
  },
  {
    id: 'v_dir_2',
    kannada: 'ಇಲ್ಲಿ',
    transliteration: 'Illi',
    english: 'Here',
    category: 'Directions & Places',
    exampleKn: 'ಇಲ್ಲಿ ಬನ್ನಿ.',
    exampleTranslit: 'Illi banni.',
    exampleEn: 'Come here.',
    notes: 'Proximity location.'
  },
  {
    id: 'v_dir_3',
    kannada: 'ಅಲ್ಲಿ',
    transliteration: 'Alli',
    english: 'There',
    category: 'Directions & Places',
    exampleKn: 'ಅಲ್ಲಿ ನೋಡಿ, ಆಸ್ಪತ್ರೆ ಇದೆ.',
    exampleTranslit: 'Alli nodi, aaspathre ide.',
    exampleEn: 'Look over there, there is the hospital.',
    notes: 'Distant location.'
  },
  {
    id: 'v_dir_4',
    kannada: 'ನೇರವಾಗಿ',
    transliteration: 'Nera-vaagi',
    english: 'Straight',
    category: 'Directions & Places',
    exampleKn: 'ನೇರವಾಗಿ ಹೋಗಿ, ಆಮೇಲೆ ಬಲಕ್ಕೆ ತಿರುಗಿ.',
    exampleTranslit: 'Nera-vaagi hogi, aamele balakke thirugi.',
    exampleEn: 'Go straight, then turn right.',
    notes: 'Directions.'
  },
  {
    id: 'v_dir_5',
    kannada: 'ಬಲಗಡೆ',
    transliteration: 'Balagade',
    english: 'Right side',
    category: 'Directions & Places',
    exampleKn: 'ಬಲಗಡೆ ತಿರುಗಿ.',
    exampleTranslit: 'Balagade thirugi.',
    exampleEn: 'Turn right side.',
    notes: 'Right direction.'
  },
  {
    id: 'v_dir_6',
    kannada: 'ಎಡಗಡೆ',
    transliteration: 'Edagade',
    english: 'Left side',
    category: 'Directions & Places',
    exampleKn: 'ಅಂಗಡಿ ಎಡಗಡೆ ಬರುತ್ತದೆ.',
    exampleTranslit: 'Angadi edagade baruttade.',
    exampleEn: 'The shop will come on the left side.',
    notes: 'Left direction.'
  },
  {
    id: 'v_dir_7',
    kannada: 'ಹತ್ತಿರ',
    transliteration: 'Hatthira',
    english: 'Near / Close',
    category: 'Directions & Places',
    exampleKn: 'ನನ್ನ ಕಚೇರಿ ತುಂಬಾ ಹತ್ತಿರ ಇದೆ.',
    exampleTranslit: 'Nanna kacheri thumba hatthira ide.',
    exampleEn: 'My office is very near.',
    notes: 'Opposite of "Doora" (Far).'
  },
  {
    id: 'v_dir_8',
    kannada: 'ದೂರ',
    transliteration: 'Doora',
    english: 'Far',
    category: 'Directions & Places',
    exampleKn: 'ವಿಮಾನ ನಿಲ್ದಾಣ ಇಲ್ಲಿಂದ ತುಂಬಾ ದೂರ.',
    exampleTranslit: 'Vimaana nildaana illinda thumba doora.',
    exampleEn: 'The airport is very far from here.',
    notes: 'Opposite of "Hatthira".'
  },

  // 9. Family & People
  {
    id: 'v_fam_1',
    kannada: 'ಅಮ್ಮ',
    transliteration: 'Amma',
    english: 'Mother',
    category: 'Family & People',
    exampleKn: 'ಅಮ್ಮ ತುಂಬಾ ಚೆನ್ನಾಗಿ ಅಡುಗೆ ಮಾಡುತ್ತಾರೆ.',
    exampleTranslit: 'Amma thumba chennagi aduge maaduthare.',
    exampleEn: 'Mother cooks very well.',
    notes: 'Also used respectfully for elderly women.'
  },
  {
    id: 'v_fam_2',
    kannada: 'ಅಪ್ಪ',
    transliteration: 'Appa',
    english: 'Father',
    category: 'Family & People',
    exampleKn: 'ಅಪ್ಪ ಊರಿನಿಂದ ಬಂದಿದ್ದಾರೆ.',
    exampleTranslit: 'Appa oorininda bandiddare.',
    exampleEn: 'Father has arrived from the town.',
    notes: 'Family.'
  },
  {
    id: 'v_fam_3',
    kannada: 'ಅಣ್ಣ',
    transliteration: 'Anna',
    english: 'Elder Brother',
    category: 'Family & People',
    exampleKn: 'ಅಣ್ಣಾ, ಈ ದಾರಿ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತೆ?',
    exampleTranslit: 'Anna, ee daari yellige hogutthe?',
    exampleEn: 'Brother, where does this road lead?',
    notes: 'Universally used across Karnataka as an affectionate, respectful term for male peers/shopkeepers/drivers.'
  },
  {
    id: 'v_fam_4',
    kannada: 'ಅಕ್ಕ',
    transliteration: 'Akka',
    english: 'Elder Sister',
    category: 'Family & People',
    exampleKn: 'ಅಕ್ಕ, ಈ ಪುಸ್ತಕ ಕೊಡಿ.',
    exampleTranslit: 'Akka, ee pusthaka kodi.',
    exampleEn: 'Sister, please give this book.',
    notes: 'Respectful term for elder female.'
  },
  {
    id: 'v_fam_5',
    kannada: 'ಸ್ನೇಹಿತ / ಗೆಳೆಯ',
    transliteration: 'Snehitha / Geleya',
    english: 'Friend',
    category: 'Family & People',
    exampleKn: 'ಅವನು ನನ್ನ ಕಾಲೇಜು ಸ್ನೇಹಿತ.',
    exampleTranslit: 'Avanu nanna college snehitha.',
    exampleEn: 'He is my college friend.',
    notes: 'Snehithe for female friend.'
  },
  {
    id: 'v_fam_6',
    kannada: 'ಮನೆ',
    transliteration: 'Mane',
    english: 'House / Home',
    category: 'Family & People',
    exampleKn: 'ನನ್ನ ಮನೆ ಜಯನಗರದಲ್ಲಿದೆ.',
    exampleTranslit: 'Nanna mane Jayanagaradallide.',
    exampleEn: 'My house is in Jayanagar.',
    notes: 'House or home.'
  },

  // 10. Workplace & Tech
  {
    id: 'v_work_1',
    kannada: 'ಕೆಲಸ',
    transliteration: 'Kelasa',
    english: 'Work / Job',
    category: 'Workplace & Tech',
    exampleKn: 'ನಿಮ್ಮ ಕೆಲಸ ಮುಗಿಯಿತಾ?',
    exampleTranslit: 'Nimma kelasa mugiyitha?',
    exampleEn: 'Is your work finished?',
    notes: 'Everyday word for tasks or employment.'
  },
  {
    id: 'v_work_2',
    kannada: 'ಕಚೇರಿ',
    transliteration: 'Kacheri',
    english: 'Office',
    category: 'Workplace & Tech',
    exampleKn: 'ನಾನು ಕಚೇರಿಗೆ ತಲುಪಿದೆ.',
    exampleTranslit: 'Naanu kacherige thalupide.',
    exampleEn: 'I reached the office.',
    notes: 'Office workplace.'
  },
  {
    id: 'v_work_3',
    kannada: 'ಸಮಯ',
    transliteration: 'Samaya',
    english: 'Time',
    category: 'Workplace & Tech',
    exampleKn: 'ನನಗೆ ಸ್ವಲ್ಪ ಸಮಯ ಕೊಡಿ.',
    exampleTranslit: 'Nanage swalpa samaya kodi.',
    exampleEn: 'Please give me a little time.',
    notes: 'Work planning.'
  },
  {
    id: 'v_work_4',
    kannada: 'ಬೇಗ',
    transliteration: 'Bega',
    english: 'Quickly / Early',
    category: 'Workplace & Tech',
    exampleKn: 'ದಯವಿಟ್ಟು ಬೇಗ ಕಳುಹಿಸಿ.',
    exampleTranslit: 'Dayavittu bega kaluhisi.',
    exampleEn: 'Please send it quickly.',
    notes: 'Urgency indicator.'
  },
  {
    id: 'v_work_5',
    kannada: 'ಸಹಾಯ',
    transliteration: 'Sahaaya',
    english: 'Help / Assistance',
    category: 'Workplace & Tech',
    exampleKn: 'ನಿಮಗೆ ಏನಾದರೂ ಸಹಾಯ ಬೇಕಾ?',
    exampleTranslit: 'Nimage enadaru sahaaya beka?',
    exampleEn: 'Do you need any help?',
    notes: 'Team collaboration.'
  },

  // 11. Emergency & Health
  {
    id: 'v_emg_1',
    kannada: 'ಕಾಪಾಡಿ / ಸಹಾಯ ಮಾಡಿ',
    transliteration: 'Kaapaadi / Sahaaya maadi',
    english: 'Help! / Save me!',
    category: 'Emergency & Health',
    exampleKn: 'ದಯವಿಟ್ಟು ಸಹಾಯ ಮಾಡಿ, ಇಲ್ಲಿ ಅಪಘಾತ ಆಗಿದೆ!',
    exampleTranslit: 'Dayavittu sahaaya maadi, illi apaghaatha aagide!',
    exampleEn: 'Please help, there is an accident here!',
    notes: 'Critical emergency distress cry.'
  },
  {
    id: 'v_emg_2',
    kannada: 'ಆಸ್ಪತ್ರೆ',
    transliteration: 'Aaspathre',
    english: 'Hospital',
    category: 'Emergency & Health',
    exampleKn: 'ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿದೆ?',
    exampleTranslit: 'Hatthirada aaspathre yallide?',
    exampleEn: 'Where is the nearest hospital?',
    notes: 'Medical center.'
  },
  {
    id: 'v_emg_3',
    kannada: 'ಜ್ವರ',
    transliteration: 'Jvara',
    english: 'Fever',
    category: 'Emergency & Health',
    exampleKn: 'ನನಗೆ ಎರಡು ದಿನದಿಂದ ಜ್ವರ ಇದೆ.',
    exampleTranslit: 'Nanage eradu dinadinda jvara ide.',
    exampleEn: 'I have had a fever for two days.',
    notes: 'Common medical complaint.'
  },
  {
    id: 'v_emg_4',
    kannada: 'ಮಾತ್ರೆ / ಔಷಧಿ',
    transliteration: 'Maathre / Oushadhi',
    english: 'Tablet / Medicine',
    category: 'Emergency & Health',
    exampleKn: 'ಈ ಮಾತ್ರೆಯನ್ನು ಊಟದ ನಂತರ ತೆಗೆದುಕೊಳ್ಳಿ.',
    exampleTranslit: 'Ee maathreyannu ootada nanthara thegedukolli.',
    exampleEn: 'Take this tablet after meals.',
    notes: 'Pharmacy communication.'
  },
  {
    id: 'v_emg_5',
    kannada: 'ನೋವು',
    transliteration: 'Novu',
    english: 'Pain / Ache',
    category: 'Emergency & Health',
    exampleKn: 'ನನಗೆ ತಲೆ ನೋವು ಇದೆ.',
    exampleTranslit: 'Nanage thale novu ide.',
    exampleEn: 'I have a headache.',
    notes: 'Symptom expression.'
  },
  {
    id: 'v_emg_6',
    kannada: 'ಪೊಲೀಸ್ ಠಾಣೆ',
    transliteration: 'Police thaane',
    english: 'Police station',
    category: 'Emergency & Health',
    exampleKn: 'ಪೊಲೀಸ್ ಠಾಣೆ ಎಲ್ಲಿ ಬರುತ್ತದೆ?',
    exampleTranslit: 'Police thaane yelli baruttade?',
    exampleEn: 'Where is the police station located?',
    notes: 'Safety.'
  }
];
