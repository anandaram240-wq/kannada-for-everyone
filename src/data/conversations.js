// Real-World Kannada Conversations Dataset (10 Complete Everyday Dialogue Lessons)

export const CONVERSATIONS = [
  {
    id: 'conv_1',
    title: 'Introducing Yourself to a Neighbor',
    category: 'Social & Daily Life',
    description: 'Learn how to introduce yourself politely, share where you are from, and greet a friendly neighbor in your apartment or locality.',
    characters: {
      a: { name: 'Rahul (New resident)', avatar: '👨‍💼', color: 'bg-blue-100 text-blue-800' },
      b: { name: 'Suresh (Neighbor)', avatar: '👨‍🌾', color: 'bg-emerald-100 text-emerald-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ನಮಸ್ಕಾರ ಸರ್, ನಾನು ಪಕ್ಕದ ಮನೆಯ ರಾಹುಲ್.',
        translit: 'Namaskara sir, naanu pakkada maneya Rahul.',
        english: 'Hello sir, I am Rahul from the adjacent flat.',
      },
      {
        speaker: 'B',
        kannada: 'ನಮಸ್ಕಾರ ರಾಹುಲ್! ಬನ್ನಿ, ನೀವು ಎಲ್ಲಿಂದ ಬಂದಿದ್ದೀರಿ?',
        translit: 'Namaskara Rahul! Banni, neevu yellinda bandiddiri?',
        english: 'Hello Rahul! Welcome, where are you from?',
      },
      {
        speaker: 'A',
        kannada: 'ನಾನು ದೆಹಲಿಯಿಂದ ಬಂದಿದ್ದೇನೆ. ಬೆಂಗಳೂರಿನಲ್ಲಿ ಹೊಸದಾಗಿ ಕೆಲಸಕ್ಕೆ ಸೇರಿದ್ದೇನೆ.',
        translit: 'Naanu Delhiyinda bandiddene. Bengalurinalli hosadaagi kelasakke seriddene.',
        english: 'I came from Delhi. I recently joined a job here in Bengaluru.',
      },
      {
        speaker: 'B',
        kannada: 'ತುಂಬಾ ಸಂತೋಷ! ನಿಮಗೆ ಕನ್ನಡ ಮಾತನಾಡಲು ಬರುತ್ತಾ?',
        translit: 'Thumba santhosha! Nimage Kannada maatanaadalu baruttha?',
        english: 'Very glad to hear! Do you know how to speak Kannada?',
      },
      {
        speaker: 'A',
        kannada: 'ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಬರುತ್ತೆ ಸರ್, ಈಗ ಕಲಿಯುತ್ತಿದ್ದೇನೆ.',
        translit: 'Swalpa swalpa barutthe sir, eega kaliyuttiddene.',
        english: 'A little bit, sir, I am learning now.',
      },
      {
        speaker: 'B',
        kannada: 'ತುಂಬಾ ಒಳ್ಳೆಯದು! ಯಾವುದೇ ಸಹಾಯ ಬೇಕಾದರೆ ಕೇಳಿ.',
        translit: 'Thumba olleyadu! Yaavude sahaaya bekaadare keli.',
        english: 'Very good! If you need any help, please feel free to ask.',
      }
    ],
    vocabulary: [
      { word: 'ಪಕ್ಕದ ಮನೆ (Pakkada mane)', meaning: 'Adjacent / next-door house' },
      { word: 'ಬಂದಿದ್ದೀರಿ (Bandiddiri)', meaning: 'You have come (respectful)' },
      { word: 'ಹೊಸದಾಗಿ (Hosadaagi)', meaning: 'Newly / recently' },
      { word: 'ಸಂತೋಷ (Santhosha)', meaning: 'Happiness / Pleased' },
      { word: 'ಕಲಿಯುತ್ತಿದ್ದೇನೆ (Kaliyuttiddene)', meaning: 'I am learning' }
    ],
    quiz: {
      question: 'How do you say "I am learning Kannada now" in Kannada?',
      options: [
        'ನಾನು ಈಗ ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ (Naanu eega Kannada kaliyuttiddene)',
        'ನನಗೆ ಕನ್ನಡ ಇಷ್ಟವಿಲ್ಲ (Nanage Kannada ishtavilla)',
        'ನನ್ನ ಹೆಸರು ರಾಹುಲ್ (Nanna hesaru Rahul)',
        'ಬೆಂಗಳೂರು ದೊಡ್ಡ ನಗರ (Bengaluru dodda nagara)'
      ],
      correctIndex: 0,
      explanation: '"Naanu eega Kannada kaliyuttiddene" means "I am learning Kannada now". Eega = now, kaliyuttiddene = learning.'
    }
  },

  {
    id: 'conv_2',
    title: 'Hiring an Auto Rickshaw & Meter Request',
    category: 'Transportation',
    description: 'Learn the exact respectful yet firm Kannada needed to negotiate auto rickshaws, request the meter, and give directions.',
    characters: {
      a: { name: 'Passenger', avatar: '🎒', color: 'bg-purple-100 text-purple-800' },
      b: { name: 'Auto Driver', avatar: '🛺', color: 'bg-amber-100 text-amber-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ಅಣ್ಣಾ, ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಬರುತ್ತೀರಾ?',
        translit: 'Anna, Majestic-ge baruttheera?',
        english: 'Brother, will you go to Majestic?',
      },
      {
        speaker: 'B',
        kannada: 'ಹೌದು, ಬನ್ನಿ ಕೂತ್ಕೊಳ್ಳಿ. ನೂರಾ ಐವತ್ತು ರೂಪಾಯಿ ಆಗುತ್ತೆ.',
        translit: 'Haudu, banni kootkolli. Nooraa aivattu roopayi aagutthe.',
        english: 'Yes, come sit. It will be 150 rupees.',
      },
      {
        speaker: 'A',
        kannada: 'ಇಲ್ಲ ಅಣ್ಣಾ, ಮೀಟರ್ ಹಾಕಿ ದಯವಿಟ್ಟು. ಮೀಟರ್ ಮೇಲೆ ಎಷ್ಟು ಆಗುತ್ತೋ ಅಷ್ಟು ಕೊಡ್ತೀನಿ.',
        translit: 'Illa anna, meter haaki dayavittu. Meter mele eshtu aaguttho ashtu kodtheeni.',
        english: 'No brother, please turn on the meter. I will pay whatever the meter shows.',
      },
      {
        speaker: 'B',
        kannada: 'ಸರಿ ಬನ್ನಿ, ಮೀಟರ್ ಹಾಕ್ತೀನಿ.',
        translit: 'Sari banni, meter haaktheeni.',
        english: 'Alright come, I will put the meter.',
      },
      {
        speaker: 'A',
        kannada: 'ಧನ್ಯವಾದಗಳು! ರೈಲ್ವೆ ನಿಲ್ದಾಣದ ಮುಖ್ಯ ದ್ವಾರದ ಬಳಿ ನಿಲ್ಲಿಸಿ.',
        translit: 'Dhanyavadagalu! Railway nildaanada mukhya dwaarada bali nillisi.',
        english: 'Thank you! Please stop near the railway station main gate.',
      }
    ],
    vocabulary: [
      { word: 'ಬರುತ್ತೀರಾ? (Baruttheera?)', meaning: 'Will you come? (Respectful)' },
      { word: 'ಮೀಟರ್ ಹಾಕಿ (Meter haaki)', meaning: 'Put / turn on the meter' },
      { word: 'ನಿಲ್ಲಿಸಿ (Nillisi)', meaning: 'Stop (polite)' },
      { word: 'ಮುಖ್ಯ ದ್ವಾರ (Mukhya dwaara)', meaning: 'Main entrance / gate' }
    ],
    quiz: {
      question: 'Which phrase is the polite and direct way to ask an auto driver to turn on the fare meter?',
      options: [
        'ಮೀಟರ್ ಹಾಕಿ ದಯವಿಟ್ಟು (Meter haaki dayavittu)',
        'ಜೋರಾಗಿ ಚಲಾಯಿಸಿ (Joragi chalaayisi)',
        'ನನಗೆ ದುಡ್ಡು ಇಲ್ಲ (Nanage duddu illa)',
        'ನೀವು ಯಾರು? (Neevu yaaru?)'
      ],
      correctIndex: 0,
      explanation: '"Meter haaki dayavittu" translates to "Please turn on the meter". Haaki = put/turn on.'
    }
  },

  {
    id: 'conv_3',
    title: 'Ordering Food at a Darshini Restaurant',
    category: 'Food & Dining',
    description: 'Experience ordering South Indian tiffin, asking for crisp dosas, requesting filter coffee, and settling the bill.',
    characters: {
      a: { name: 'Customer', avatar: '☕', color: 'bg-orange-100 text-orange-800' },
      b: { name: 'Server / Cashier', avatar: '👨‍🍳', color: 'bg-emerald-100 text-emerald-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ನಮಸ್ಕಾರ, ತಿಂಡಿಗೆ ಏನು ಇದೆ?',
        translit: 'Namaskara, thindige enu ide?',
        english: 'Hello, what items are available for breakfast?',
      },
      {
        speaker: 'B',
        kannada: 'ಇಡ್ಲಿ ವಡೆ, ಮಸಾಲೆ ದೋಸೆ, ಮತ್ತು ಖಾರಾಬಾತ್ ಇದೆ ಸರ್.',
        translit: 'Idli vade, masala dose, matthu khaarabaath ide sir.',
        english: 'We have idli vada, masala dosa, and kharabath sir.',
      },
      {
        speaker: 'A',
        kannada: 'ಒಂದು ಮಸಾಲೆ ದೋಸೆ ಕೊಡಿ. ಸ್ವಲ್ಪ ಗರಿಗರಿಯಾಗಿ (ಕ್ರಿಸ್ಪಿ) ಮಾಡಿ.',
        translit: 'Ondu masala dose kodi. Swalpa garigariyaagi (crispy) maadi.',
        english: 'Give me one masala dosa. Please make it slightly crispy.',
      },
      {
        speaker: 'B',
        kannada: 'ಖಂಡಿತ ಸರ್. ಕುಡಿಯಲು ಏನಾದರೂ ಬೇಕಾ?',
        translit: 'Khanditha sir. Kudiyalu enadaru beka?',
        english: 'Certainly sir. Would you like anything to drink?',
      },
      {
        speaker: 'A',
        kannada: 'ಹೌದು, ಒಂದು ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ ಕೂಡ ಕೊಡಿ.',
        translit: 'Haudu, ondu bisi filter coffee kooda kodi.',
        english: 'Yes, please give one hot filter coffee as well.',
      },
      {
        speaker: 'B',
        kannada: 'ಆಯಿತು ಸರ್, ಟೋಕನ್ ಕೌಂಟರ್‌ನಲ್ಲಿ ತೆಗೆದುಕೊಳ್ಳಿ.',
        translit: 'Aayitu sir, token counternalli thegedukolli.',
        english: 'Done sir, please collect your token at the counter.',
      }
    ],
    vocabulary: [
      { word: 'ತಿಂಡಿ (Thindi)', meaning: 'Breakfast / Snack items' },
      { word: 'ಗರಿಗರಿಯಾಗಿ (Garigariyaagi)', meaning: 'Crispy' },
      { word: 'ಕುಡಿಯಲು (Kudiyalu)', meaning: 'To drink' },
      { word: 'ಬಿಸಿ (Bisi)', meaning: 'Hot (temperature)' },
      { word: 'ಖಂಡಿತ (Khanditha)', meaning: 'Certainly / Definitely' }
    ],
    quiz: {
      question: 'How do you say "Give me one hot coffee" in Kannada?',
      options: [
        'ಒಂದು ಬಿಸಿ ಕಾಫಿ ಕೊಡಿ (Ondu bisi coffee kodi)',
        'ನನಗೆ ತಣ್ಣೀರು ಬೇಕು (Nanage thanneeru beku)',
        'ಕಾಫಿ ಬೆಲೆ ಎಷ್ಟು? (Coffee bele eshtu?)',
        'ಒಂದು ದೋಸೆ ಬೇಡ (Ondu dose beda)'
      ],
      correctIndex: 0,
      explanation: '"Ondu bisi coffee kodi" means "Give me one hot coffee". Ondu = one, bisi = hot, kodi = please give.'
    }
  },

  {
    id: 'conv_4',
    title: 'Travelling by BMTC Bus',
    category: 'Transportation',
    description: 'Learn how to confirm bus destinations, ask conductor for ticket, and handle exact change.',
    characters: {
      a: { name: 'Commuter', avatar: '🎫', color: 'bg-cyan-100 text-cyan-800' },
      b: { name: 'Bus Conductor', avatar: '🧑‍✈️', color: 'bg-slate-100 text-slate-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ಸರ್, ಈ ಬಸ್ ಎಂ.ಜಿ. ರೋಡ್‌ಗೆ ಹೋಗುತ್ತಾ?',
        translit: 'Sir, ee bus M.G. Road-ge hoguttaa?',
        english: 'Sir, does this bus go to M.G. Road?',
      },
      {
        speaker: 'B',
        kannada: 'ಹೌದು, ಹತ್ತಿ ಬೇಗ! ಎಲ್ಲಿಗೆ ಟಿಕೆಟ್ ಬೇಕು?',
        translit: 'Haudu, hatthi bega! Yellige ticket beku?',
        english: 'Yes, board quickly! Where do you need a ticket to?',
      },
      {
        speaker: 'A',
        kannada: 'ಟ್ರಿನಿಟಿ ಸರ್ಕಲ್‌ಗೆ ಒಂದು ಟಿಕೆಟ್ ಕೊಡಿ.',
        translit: 'Trinity Circle-ge ondu ticket kodi.',
        english: 'Please give one ticket to Trinity Circle.',
      },
      {
        speaker: 'B',
        kannada: 'ಇಪ್ಪತ್ತು ರೂಪಾಯಿ. ಚಿಲ್ಲರೆ ಇದೆಯಾ ನಿಮ್ಮ ಹತ್ತಿರ?',
        translit: 'Ippattu roopayi. Chillare ideya nimma hathira?',
        english: 'Twenty rupees. Do you have exact change with you?',
      },
      {
        speaker: 'A',
        kannada: 'ಹೌದು ಸರ್, ಇಪ್ಪತ್ತು ರೂಪಾಯಿ ಸರಿಯಾಗಿದೆ, ತಗೊಳ್ಳಿ.',
        translit: 'Haudu sir, ippattu roopayi sariyaagide, thagolli.',
        english: 'Yes sir, twenty rupees exact, please take it.',
      },
      {
        speaker: 'B',
        kannada: 'ಸರಿ, ಮುಂದಿನ ನಿಲ್ದಾಣ ಬಂದಾಗ ಇಳಿಯಿರಿ.',
        translit: 'Sari, mundina nildaana bandaaga iliyiri.',
        english: 'Fine, get down when the next stop arrives.',
      }
    ],
    vocabulary: [
      { word: 'ಹತ್ತಿ (Hatthi)', meaning: 'Climb / Board the bus' },
      { word: 'ಇಳಿಯಿರಿ (Iliyiri)', meaning: 'Alight / Get down' },
      { word: 'ಚಿಲ್ಲರೆ (Chillare)', meaning: 'Change / Coins' },
      { word: 'ಮುಂದಿನ ನಿಲ್ದಾಣ (Mundina nildaana)', meaning: 'Next bus stop' }
    ],
    quiz: {
      question: 'What does "ಚಿಲ್ಲರೆ ಇದೆಯಾ?" (Chillare ideya?) mean when asked by a bus conductor?',
      options: [
        'Do you have change?',
        'Where are you going?',
        'Do you want a seat?',
        'What is your name?'
      ],
      correctIndex: 0,
      explanation: '"Chillare ideya?" is the ubiquitous phrase used by conductors asking if you have loose coins or change.'
    }
  },

  {
    id: 'conv_5',
    title: 'Buying Fresh Vegetables in a Local Market',
    category: 'Shopping & Market',
    description: 'Master everyday market Kannada: asking the rate per kilo, checking freshness, and bargaining politely.',
    characters: {
      a: { name: 'Buyer', avatar: '🥕', color: 'bg-lime-100 text-lime-800' },
      b: { name: 'Vegetable Vendor', avatar: '🧺', color: 'bg-green-100 text-green-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ಅಣ್ಣಾ, ಈರುಳ್ಳಿ ಮತ್ತು ಟೊಮೇಟೊ ಕೆಜಿಗೆ ಎಷ್ಟು?',
        translit: 'Anna, eerulli matthu tomato kg-ge eshtu?',
        english: 'Brother, how much are onions and tomatoes per kg?',
      },
      {
        speaker: 'B',
        kannada: 'ಟೊಮೇಟೊ ಮೂವತ್ತು ರೂಪಾಯಿ, ಈರುಳ್ಳಿ ನಲವತ್ತು ರೂಪಾಯಿ ಕೆಜಿಗೆ.',
        translit: 'Tomato moovattu roopayi, eerulli nalavattu roopayi kg-ge.',
        english: 'Tomato is 30 rupees, onion is 40 rupees per kg.',
      },
      {
        speaker: 'A',
        kannada: 'ತರಕಾರಿ ತಾಜಾ ಆಗಿದೆಯಾ? ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ.',
        translit: 'Tharakaari thaajaa aagideya? Swalpa kadime maadi.',
        english: 'Are the vegetables fresh? Please reduce the price a little.',
      },
      {
        speaker: 'B',
        kannada: 'ಇವತ್ತೇ ತೋಟದಿಂದ ತಂದಿದ್ದು ಸರ್, ತುಂಬಾ ತಾಜಾ ಇದೆ. ಎರಡು ಕೆಜಿ ತಗೊಂಡ್ರೆ ಐದು ರೂಪಾಯಿ ಕಮ್ಮಿ ಮಾಡ್ತೀನಿ.',
        translit: 'Ivatthe thotadinda thandiddhu sir, thumba thaajaa ide. Eradu kg thagondre aidu roopayi kammi maadtheeni.',
        english: 'Brought today from the farm sir, very fresh. If you take 2 kg I will reduce 5 rupees.',
      },
      {
        speaker: 'A',
        kannada: 'ಸರಿ, ಎರಡು ಕೆಜಿ ಟೊಮೇಟೊ ತೂಕ ಮಾಡಿ. ನಾನು ಯುಪಿಐ (UPI) ಮಾಡ್ತೀನಿ.',
        translit: 'Sari, eradu kg tomato thooka maadi. Naanu UPI maadtheeni.',
        english: 'Alright, weigh 2 kg tomatoes. I will pay via UPI.',
      }
    ],
    vocabulary: [
      { word: 'ಈರುಳ್ಳಿ (Eerulli)', meaning: 'Onion' },
      { word: 'ತಾಜಾ (Thaajaa)', meaning: 'Fresh' },
      { word: 'ಕಡಿಮೆ ಮಾಡಿ (Kadime maadi)', meaning: 'Reduce the price' },
      { word: 'ತೂಕ ಮಾಡಿ (Thooka maadi)', meaning: 'Weigh it' }
    ],
    quiz: {
      question: 'What is the Kannada word for "Fresh"?',
      options: [
        'ತಾಜಾ (Thaajaa)',
        'ಹಳೆಯದು (Haleyadu)',
        'ದಪ್ಪ (Dappa)',
        'ಬಿಸಿ (Bisi)'
      ],
      correctIndex: 0,
      explanation: '"Thaajaa" means fresh. Used commonly for vegetables, fruits, and food items.'
    }
  },

  {
    id: 'conv_6',
    title: 'Asking for Directions on the Street',
    category: 'Directions & Places',
    description: 'Learn how to politely ask passersby for directions to landmarks, ATMs, or metro stations.',
    characters: {
      a: { name: 'Visitor', avatar: '🗺️', color: 'bg-teal-100 text-teal-800' },
      b: { name: 'Local Resident', avatar: '🚶‍♂️', color: 'bg-indigo-100 text-indigo-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ಕ್ಷಮಿಸಿ, ಹತ್ತಿರದಲ್ಲಿ ಯಾವುದಾದರೂ ಎಟಿಎಂ ಇದೆಯಾ?',
        translit: 'Kshamisi, hatthiradalli yaavudaadaru ATM ideya?',
        english: 'Excuse me, is there any ATM nearby?',
      },
      {
        speaker: 'B',
        kannada: 'ಹೌದು, ಇಲ್ಲಿಂದ ನೇರವಾಗಿ ಹೋಗಿ. ಮೊದಲನೇ ಸರ್ಕಲ್‌ನಲ್ಲಿ ಬಲಕ್ಕೆ ತಿರುಗಿ.',
        translit: 'Haudu, illinda nera-vaagi hogi. Modalaneya circlenalli balakke thirugi.',
        english: 'Yes, go straight from here. Turn right at the first traffic circle.',
      },
      {
        speaker: 'A',
        kannada: 'ಅಲ್ಲಿಂದ ಎಷ್ಟು ದೂರ ಆಗುತ್ತೆ?',
        translit: 'Allinda eshtu doora aagutthe?',
        english: 'How far is it from there?',
      },
      {
        speaker: 'B',
        kannada: 'ಕೇವಲ ಎರಡು ನಿಮಿಷ ನಡಿಗೆ ಅಷ್ಟೇ. ಪೆಟ್ರೋಲ್ ಬಂಕ್ ಎದುರುಗಡೆ ಇದೆ.',
        translit: 'Kevala eradu nimisha nadige ashte. Petrol bunk edurugade ide.',
        english: 'Just a two-minute walk, that is all. It is opposite the petrol bunk.',
      },
      {
        speaker: 'A',
        kannada: 'ತುಂಬಾ ಧನ್ಯವಾದಗಳು ಸರ್!',
        translit: 'Thumba dhanyavadagalu sir!',
        english: 'Thank you very much sir!',
      }
    ],
    vocabulary: [
      { word: 'ನೇರವಾಗಿ (Nera-vaagi)', meaning: 'Straight' },
      { word: 'ಬಲಕ್ಕೆ (Balakke)', meaning: 'To the right' },
      { word: 'ನಡಿಗೆ (Nadige)', meaning: 'Walk / Walking' },
      { word: 'ಎದುರುಗಡೆ (Edurugade)', meaning: 'Opposite / In front of' }
    ],
    quiz: {
      question: 'If someone tells you "ಬಲಕ್ಕೆ ತಿರುಗಿ" (Balakke thirugi), what should you do?',
      options: [
        'Turn right',
        'Turn left',
        'Go backwards',
        'Stop immediately'
      ],
      correctIndex: 0,
      explanation: '"Balakke thirugi" means turn right. "Edakke thirugi" means turn left.'
    }
  },

  {
    id: 'conv_7',
    title: 'Visiting a Clinic / Pharmacy for Fever',
    category: 'Healthcare',
    description: 'Communicate health symptoms to a doctor or pharmacist, understand dosage instructions, and ask how to take medicines.',
    characters: {
      a: { name: 'Patient', avatar: '🤒', color: 'bg-rose-100 text-rose-800' },
      b: { name: 'Doctor / Pharmacist', avatar: '🩺', color: 'bg-blue-100 text-blue-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ನಮಸ್ತೆ ಡಾಕ್ಟರ್, ನನಗೆ ನಿನ್ನೆಯಿಂದ ಜ್ವರ ಮತ್ತು ಮೈ ಕೈ ನೋವು ಇದೆ.',
        translit: 'Namaste doctor, nanage ninneyinda jvara matthu mai kai novu ide.',
        english: 'Hello doctor, I have had a fever and body ache since yesterday.',
      },
      {
        speaker: 'B',
        kannada: 'ಗಂಟಲು ನೋವು ಅಥವಾ ಕೆಮ್ಮು ಇದೆಯಾ?',
        translit: 'Gantalu novu athava kemmu ideya?',
        english: 'Do you have a sore throat or cough?',
      },
      {
        speaker: 'A',
        kannada: 'ಸ್ವಲ್ಪ ಗಂಟಲು ನೋವು ಇದೆ, ಕೆಮ್ಮು ಇಲ್ಲ.',
        translit: 'Swalpa gantalu novu ide, kemmu illa.',
        english: 'A little throat pain is there, no cough.',
      },
      {
        speaker: 'B',
        kannada: 'ಹೆದರಬೇಡಿ, ಸಾಧಾರಣ ವೈರಲ್ ಜ್ವರ. ಈ ಮಾತ್ರೆಗಳನ್ನು ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ ಊಟದ ನಂತರ ತಗೊಳ್ಳಿ.',
        translit: 'Hedarabedi, saadharana viral jvara. Ee maathregalannu dinakke eradu baari ootada nanthara thagolli.',
        english: 'Don\'t worry, it\'s a normal viral fever. Take these tablets twice a day after meals.',
      },
      {
        speaker: 'A',
        kannada: 'ಸರಿ ಡಾಕ್ಟರ್, ಎಷ್ಟು ದಿನ ತೆಗೆದುಕೊಳ್ಳಬೇಕು?',
        translit: 'Sari doctor, eshtu dina thegedukollabeku?',
        english: 'Okay doctor, for how many days should I take them?',
      },
      {
        speaker: 'B',
        kannada: 'ಮೂರು ದಿನ ತೆಗೆದುಕೊಳ್ಳಿ. ಸಾಕಷ್ಟು ಬಿಸಿ ನೀರು ಕುಡಿಯಿರಿ.',
        translit: 'Mooru dina thegedukolli. Saakashtu bisi neeru kudiyiri.',
        english: 'Take them for three days. Drink plenty of warm water.',
      }
    ],
    vocabulary: [
      { word: 'ಜ್ವರ (Jvara)', meaning: 'Fever' },
      { word: 'ನೋವು (Novu)', meaning: 'Pain / Ache' },
      { word: 'ಕೆಮ್ಮು (Kemmu)', meaning: 'Cough' },
      { word: 'ಊಟದ ನಂತರ (Ootada nanthara)', meaning: 'After meals' },
      { word: 'ಹೆದರಬೇಡಿ (Hedarabedi)', meaning: 'Do not be afraid / Don\'t worry' }
    ],
    quiz: {
      question: 'What does "ಊಟದ ನಂತರ" (Ootada nanthara) mean on a prescription?',
      options: [
        'After meals',
        'Before sleeping',
        'Early morning empty stomach',
        'During lunchtime only'
      ],
      correctIndex: 0,
      explanation: '"Ootada nanthara" means "after the meal/food". Oota = meal, nanthara = after.'
    }
  },

  {
    id: 'conv_8',
    title: 'Coordinating with a Colleague at Workplace',
    category: 'Workplace & Tech',
    description: 'Learn simple workplace Kannada to bond with local teammates, coordinate coffee breaks, and check task status.',
    characters: {
      a: { name: 'Colleague 1', avatar: '💻', color: 'bg-indigo-100 text-indigo-800' },
      b: { name: 'Colleague 2', avatar: '👩‍💻', color: 'bg-violet-100 text-violet-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ಹೇ ಪ್ರಿಯಾ, ಇವತ್ತಿನ ಟೀಮ್ ಮೀಟಿಂಗ್ ಯಾವಾಗ?',
        translit: 'Hey Priya, ivattina team meeting yaavaaga?',
        english: 'Hey Priya, when is today\'s team meeting?',
      },
      {
        speaker: 'B',
        kannada: 'ಮಧ್ಯಾಹ್ನ ಮೂರು ಗಂಟೆಗೆ ಇದೆ. ನೀವು ಪ್ರೆಸೆಂಟೇಶನ್ ರೆಡಿ ಮಾಡಿದ್ದೀರಾ?',
        translit: 'Madhyaahna mooru gantege ide. Neevu presentation ready maadiddira?',
        english: 'It is at 3 PM in the afternoon. Have you made the presentation ready?',
      },
      {
        speaker: 'A',
        kannada: 'ಹೌದು, ಆಲ್ಮೋಸ್ಟ್ ಮುಗಿದಿದೆ. ಮೀಟಿಂಗ್ ಮುಂಚೆ ಒಮ್ಮೆ ಚೆಕ್ ಮಾಡೋಣ.',
        translit: 'Haudu, almost mugidide. Meeting munche omme check maadona.',
        english: 'Yes, almost finished. Let us check it once before the meeting.',
      },
      {
        speaker: 'B',
        kannada: 'ಖಂಡಿತ! ಈಗ ಬ್ರೇಕ್‌ಗೆ ಹೋಗೋಣವಾ? ಒಂದು ಕಾಫಿ ಕುಡಿಯೋಣ.',
        translit: 'Khanditha! Eega break-ge hogonavaa? Ondu coffee kudiyona.',
        english: 'Sure! Shall we go for a break now? Let\'s have a coffee.',
      },
      {
        speaker: 'A',
        kannada: 'ಹೌದು ಬನ್ನಿ, ನನಗೂ ಕಾಫಿ ಬೇಕಿತ್ತು!',
        translit: 'Haudu banni, nanagoo coffee bekittu!',
        english: 'Yes let\'s go, I wanted coffee too!',
      }
    ],
    vocabulary: [
      { word: 'ಯಾವಾಗ? (Yaavaaga?)', meaning: 'When?' },
      { word: 'ಮಧ್ಯಾಹ್ನ (Madhyaahna)', meaning: 'Afternoon' },
      { word: 'ಮುಗಿದಿದೆ (Mugidide)', meaning: 'It is completed / finished' },
      { word: 'ಮುಂಚೆ (Munche)', meaning: 'Before / Earlier' }
    ],
    quiz: {
      question: 'How do you ask "When is the meeting?" in Kannada?',
      options: [
        'ಮೀಟಿಂಗ್ ಯಾವಾಗ? (Meeting yaavaaga?)',
        'ಮೀಟಿಂಗ್ ಎಲ್ಲಿ? (Meeting yelli?)',
        'ಮೀಟಿಂಗ್ ಯಾಕೆ? (Meeting yaake?)',
        'ಮೀಟಿಂಗ್ ಬೇಡ (Meeting beda)'
      ],
      correctIndex: 0,
      explanation: '"Yaavaaga" means "When". Hence "Meeting yaavaaga?" asks when the meeting is scheduled.'
    }
  },

  {
    id: 'conv_9',
    title: 'Talking to Apartment Security & Delivery Person',
    category: 'Daily Living',
    description: 'Everyday dialogue for receiving courier packages, verifying flat numbers, and greeting security personnel.',
    characters: {
      a: { name: 'Delivery Agent', avatar: '📦', color: 'bg-amber-100 text-amber-800' },
      b: { name: 'Resident', avatar: '🏠', color: 'bg-emerald-100 text-emerald-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ಸರ್ ನಮಸ್ಕಾರ, ನಿಮ್ಮ ಪಾರ್ಸಲ್ ಬಂದಿದೆ. ಫ್ಲಾಟ್ ನಂಬರ್ 302 ನಾ?',
        translit: 'Sir namaskara, nimma parcel bandide. Flat number 302 naa?',
        english: 'Sir hello, your parcel has arrived. Is it flat number 302?',
      },
      {
        speaker: 'B',
        kannada: 'ಹೌದು, ನಾನೇ. ನೀವು ಸೆಕ್ಯೂರಿಟಿ ಗೇಟ್ ಬಳಿ ಇದ್ದೀರಾ?',
        translit: 'Haudu, naane. Neevu security gate bali iddira?',
        english: 'Yes, it is me. Are you near the security gate?',
      },
      {
        speaker: 'A',
        kannada: 'ಹೌದು ಸರ್, ಈಗ ಲಿಫ್ಟ್ ಹತ್ತಿ ಮೂರನೇ ಮಹಡಿಗೆ ಬರ್ತಿದ್ದೀನಿ.',
        translit: 'Haudu sir, eega lift hatthi moorane mahadige barthiddini.',
        english: 'Yes sir, I am taking the lift and coming to the 3rd floor now.',
      },
      {
        speaker: 'B',
        kannada: 'ಸರಿ, ಬಾಗಿಲು ತೆರೆದಿದೆ. ಬನ್ನಿ.',
        translit: 'Sari, baagilu theredide. Banni.',
        english: 'Alright, the door is open. Come in.',
      },
      {
        speaker: 'A',
        kannada: 'ಪಾರ್ಸಲ್ ತಗೊಳ್ಳಿ ಸರ್. ಓಟಿಪಿ (OTP) ಹೇಳಿ ದಯವಿಟ್ಟು.',
        translit: 'Parcel thagolli sir. OTP heli dayavittu.',
        english: 'Please take the parcel sir. Kindly share the OTP.',
      }
    ],
    vocabulary: [
      { word: 'ಬಂದಿದೆ (Bandide)', meaning: 'Has arrived' },
      { word: 'ಮಹಡಿ (Mahadi)', meaning: 'Floor / Storey' },
      { word: 'ಬಾಗಿಲು (Baagilu)', meaning: 'Door' },
      { word: 'ಹೇಳಿ (Heli)', meaning: 'Tell / Speak (polite)' }
    ],
    quiz: {
      question: 'What is the Kannada word for "Door"?',
      options: [
        'ಬಾಗಿಲು (Baagilu)',
        'ಕಿಟಕಿ (Kitaki)',
        'ಮನೆ (Mane)',
        'ಗೋಡೆ (Gode)'
      ],
      correctIndex: 0,
      explanation: '"Baagilu" means door. "Kitaki" means window, and "Mane" means house.'
    }
  },

  {
    id: 'conv_10',
    title: 'Campus Life & Talking to College Friends',
    category: 'Education & College',
    description: 'Learn friendly campus Kannada: asking for class notes, checking timetable, and hanging out at the canteen.',
    characters: {
      a: { name: 'Student 1', avatar: '🎒', color: 'bg-rose-100 text-rose-800' },
      b: { name: 'Student 2', avatar: '📚', color: 'bg-sky-100 text-sky-800' }
    },
    lines: [
      {
        speaker: 'A',
        kannada: 'ಹೇ ಕಾರ್ತಿಕ್, ಇವತ್ತು ಲ್ಯಾಬ್ ಕ್ಲಾಸ್ ಇದೆಯಾ?',
        translit: 'Hey Karthik, ivattu lab class ideya?',
        english: 'Hey Karthik, do we have lab class today?',
      },
      {
        speaker: 'B',
        kannada: 'ಇಲ್ಲ, ಪ್ರೊಫೆಸರ್ ರಜಾದಲ್ಲಿದ್ದಾರೆ. ಕ್ಲಾಸ್ ಕ್ಯಾನ್ಸಲ್ ಆಗಿದೆ.',
        translit: 'Illa, professor rajadalliddare. Class cancel aagide.',
        english: 'No, professor is on leave. Class has been cancelled.',
      },
      {
        speaker: 'A',
        kannada: 'ಸೂಪರ್! ಹಾಗಾದರೆ ಕ್ಯಾಂಟೀನ್‌ಗೆ ಹೋಗಿ ಚಹಾ ಕುಡಿಯೋಣ.',
        translit: 'Super! Haagaadare canteenge hogi chaha kudiyona.',
        english: 'Super! In that case let us go to canteen and drink tea.',
      },
      {
        speaker: 'B',
        kannada: 'ಹೌದು ನಡಿ! ನಿನ್ನೆ ನೀಡಿದ ಅಸೈನ್‌ಮೆಂಟ್ ನೋಟ್ಸ್ ನಿನ್ನ ಹತ್ತಿರ ಇದೆಯಾ?',
        translit: 'Haudu nadi! Ninne needida assignment notes ninna hathira ideya?',
        english: 'Yes let\'s go! Do you have yesterday\'s assignment notes with you?',
      },
      {
        speaker: 'A',
        kannada: 'ನನ್ನ ಬ್ಯಾಗ್‌ನಲ್ಲಿದೆ, ಕ್ಯಾಂಟೀನ್‌ನಲ್ಲಿ ಕೊಡ್ತೀನಿ.',
        translit: 'Nanna bagnallide, canteennalli kodtheeni.',
        english: 'It is in my bag, I will give it to you in the canteen.',
      }
    ],
    vocabulary: [
      { word: 'ರಜಾ (Raja)', meaning: 'Leave / Holiday' },
      { word: 'ಹಾಗಾದರೆ (Haagaadare)', meaning: 'In that case / Then' },
      { word: 'ನಡಿ (Nadi)', meaning: 'Let\'s go (informal)' },
      { word: 'ನೀಡಿದ (Needida)', meaning: 'Given' }
    ],
    quiz: {
      question: 'What does "ಕ್ಲಾಸ್ ಕ್ಯಾನ್ಸಲ್ ಆಗಿದೆ" (Class cancel aagide) mean?',
      options: [
        'Class has been cancelled',
        'Class has just started',
        'Class is very interesting',
        'Class is in room 5'
      ],
      correctIndex: 0,
      explanation: '"Aagide" means "has happened". Hence "Class cancel aagide" = class has been cancelled.'
    }
  }
];
