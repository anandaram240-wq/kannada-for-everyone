// Practical Real-World Situations Dataset (10 Interactive Scenarios)

export const SITUATIONS = [
  {
    id: 'sit_bus',
    title: 'At the BMTC Bus Stand / Majestic',
    icon: '🚌',
    badge: 'Transit',
    context: 'Majestic (Kempegowda Bus Station) is Bengaluru\'s beating heart. You need to identify the right platform, ask the conductor if the bus goes to your stop, and ensure you alight at the right stage.',
    culturalTip: 'Tip: Always say "Sir" or "Anna" to the conductor. Use "Chillar illa" (I don\'t have change) or keep exact coins ready for a smooth journey.',
    intent: 'Confirm bus destination and buy ticket to Whitefield',
    phrases: [
      {
        kannada: 'ಈ ಬಸ್ ವೈಟ್‌ಫೀಲ್ಡ್‌ಗೆ ಹೋಗುತ್ತಾ?',
        translit: 'Ee bus Whitefield-ge hoguttaa?',
        english: 'Does this bus go to Whitefield?',
        usage: 'Ask the conductor or passenger before boarding'
      },
      {
        kannada: 'ವೈಟ್‌ಫೀಲ್ಡ್‌ಗೆ ಒಂದು ಟಿಕೆಟ್ ಕೊಡಿ.',
        translit: 'Whitefield-ge ondu ticket kodi.',
        english: 'Give one ticket to Whitefield, please.',
        usage: 'Polite ticket request'
      },
      {
        kannada: 'ಸ್ಟಾಪ್ ಬಂದಾಗ ದಯವಿಟ್ಟು ತಿಳಿಸಿ.',
        translit: 'Stop bandaaga dayavittu thilisi.',
        english: 'Please inform me when the stop arrives.',
        usage: 'Ask conductor so you don\'t miss your stop'
      }
    ],
    expectedResponse: {
      kannada: 'ಹೌದು ಹೋಗುತ್ತೆ, ಹತ್ತಿ! ಇಪ್ಪತ್ತೈದು ರೂಪಾಯಿ ಚಿಲ್ಲರೆ ಕೊಡಿ.',
      translit: 'Haudu hogutthe, hatthi! Ippaththayidu roopayi chillare kodi.',
      english: 'Yes it goes, get in! Please give 25 rupees change.'
    },
    challenge: {
      prompt: 'You are waiting at platform 14. You want to ask whether the incoming bus reaches Electronic City. What should you ask?',
      options: [
        {
          text: 'ಈ ಬಸ್ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿಗೆ ಹೋಗುತ್ತದೆಯಾ? (Ee bus Electronic City-ge hoguttadeyaa?)',
          correct: true,
          explanation: 'Correct! "Ee bus ...-ge hoguttadeyaa?" is the precise, natural way to verify a bus route in Kannada.'
        },
        {
          text: 'ನನಗೆ ಊಟ ಬೇಕು (Nanage oota beku)',
          correct: false,
          explanation: 'Incorrect. This means "I want a meal/food".'
        },
        {
          text: 'ನಿಮ್ಮ ಹೆಸರು ಏನು? (Nimma hesaru enu?)',
          correct: false,
          explanation: 'Incorrect. This means "What is your name?".'
        }
      ]
    }
  },

  {
    id: 'sit_auto',
    title: 'Hiring an Auto Rickshaw',
    icon: '🛺',
    badge: 'Daily Commute',
    context: 'Bangalore autos are iconic. Auto drivers often quote fixed fares. Speaking confident, courteous Kannada makes an immediate difference!',
    culturalTip: 'Tip: Say "Meter haaki anna" with a calm smile. Adding "Anna" (Brother) creates immediate warmth and rapport.',
    intent: 'Travel from Koramangala to Indiranagar on meter',
    phrases: [
      {
        kannada: 'ಅಣ್ಣಾ, ಇಂದಿರಾನಗರಕ್ಕೆ ಬರುತ್ತೀರಾ?',
        translit: 'Anna, Indiranagarakke baruttheera?',
        english: 'Brother, will you come to Indiranagar?',
        usage: 'Standard respectful hail'
      },
      {
        kannada: 'ಮೀಟರ್ ಹಾಕಿ ದಯವಿಟ್ಟು, ಮೀಟರ್ ಮೇಲೆ ಕೊಡ್ತೀನಿ.',
        translit: 'Meter haaki dayavittu, meter mele kodtheeni.',
        english: 'Please put the meter, I will pay according to the meter.',
        usage: 'Polite firmness on official fare'
      },
      {
        kannada: 'ಮುಂದಿನ ಸಿಗ್ನಲ್‌ನಲ್ಲಿ ಎಡಕ್ಕೆ ತಗೊಳ್ಳಿ.',
        translit: 'Mundina signalnalli edakke thagolli.',
        english: 'Take a left at the upcoming traffic signal.',
        usage: 'Guiding route'
      }
    ],
    expectedResponse: {
      kannada: 'ಸರಿ ಕೂತ್ಕೊಳ್ಳಿ, ಟ್ರಾಫಿಕ್ ಜಾಸ್ತಿ ಇದೆ, ಸ್ವಲ್ಪ ನೋಡ್ಕೊಂಡು ಕೊಡಿ.',
      translit: 'Sari kootkolli, traffic jaasthi ide, swalpa nodkondu kodi.',
      english: 'Alright sit, there is heavy traffic, please give a little extra if possible.'
    },
    challenge: {
      prompt: 'The auto driver asks for 200 rupees for a short 2km ride. How do you firmly yet politely ask him to run the meter?',
      options: [
        {
          text: 'ಇಲ್ಲ ಅಣ್ಣಾ, ಮೀಟರ್ ಹಾಕಿ, ಮೀಟರ್ ಪ್ರಕಾರ ಕೊಡ್ತೀನಿ (Illa anna, meter haaki, meter prakaara kodtheeni)',
          correct: true,
          explanation: 'Spot on! This polite phrase establishes that you respect the system and are willing to pay the meter fare.'
        },
        {
          text: 'ನಾನು ಆಟೋ ಹತ್ತುವುದಿಲ್ಲ (Naanu auto hatthuvudilla)',
          correct: false,
          explanation: 'This means "I will not board the auto" which doesn\'t negotiate.'
        },
        {
          text: 'ನೀವು ಯಾರು? (Neevu yaaru?)',
          correct: false,
          explanation: 'This means "Who are you?" which is irrelevant.'
        }
      ]
    }
  },

  {
    id: 'sit_darshini',
    title: 'Ordering at a Traditional Darshini',
    icon: '☕',
    badge: 'Dining',
    context: 'Quick self-service Darshinis (Brahmins, CTR, Vidyarthi Bhavan, Taaza Thindi) are breakfast shrines. Orders are fast-paced at the coupon counter.',
    culturalTip: 'Tip: Use "Kodi" (give respectfully) instead of "Kodu" (informal). "Ondu Masale Dose, Ondu Filter Coffee kodi" is music to a cashier\'s ears.',
    intent: 'Order breakfast and get the bill',
    phrases: [
      {
        kannada: 'ಒಂದು ಮಸಾಲೆ ದೋಸೆ ಮತ್ತು ಎರಡು ಇಡ್ಲಿ ಕೊಡಿ.',
        translit: 'Ondu masala dose matthu eradu idli kodi.',
        english: 'Please give one masala dosa and two idlis.',
        usage: 'At the token counter'
      },
      {
        kannada: 'ಸಾಂಬಾರ್ ಪ್ರತ್ಯೇಕವಾಗಿ ಕೊಡಿ.',
        translit: 'Sambar prathyeka-vaagi kodi.',
        english: 'Please give the sambar separately.',
        usage: 'Customizing your serving'
      },
      {
        kannada: 'ಒಂದು ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ ಕೊಡಿ.',
        translit: 'Ondu bisi filter coffee kodi.',
        english: 'Please give one hot filter coffee.',
        usage: 'Classic South Indian beverage order'
      }
    ],
    expectedResponse: {
      kannada: 'ಒಟ್ಟು ಎಂಬತ್ತು ರೂಪಾಯಿ, ಟೋಕನ್ ತಗೊಂಡು ಕೌಂಟರ್‌ನಲ್ಲಿ ಕೊಡಿ.',
      translit: 'Ottu embattu roopayi, token thagondu counternalli kodi.',
      english: 'Total eighty rupees, take the token and hand it over at the food counter.'
    },
    challenge: {
      prompt: 'You want the cook to make your dosa extra crispy. How do you say "Please make it crispy"?',
      options: [
        {
          text: 'ಸ್ವಲ್ಪ ಗರಿಗರಿಯಾಗಿ (ಕ್ರಿಸ್ಪಿ) ಮಾಡಿ (Swalpa garigariyaagi maadi)',
          correct: true,
          explanation: 'Exactly! "Garigari" means crisp/crispy in Kannada.'
        },
        {
          text: 'ನೀರು ಜಾಸ್ತಿ ಹಾಕಿ (Neeru jaasthi haaki)',
          correct: false,
          explanation: 'This means "Put more water".'
        },
        {
          text: 'ದೋಸೆ ಬೇಗ ತಿಂದೆ (Dose bega thinde)',
          correct: false,
          explanation: 'This means "I ate the dosa quickly".'
        }
      ]
    }
  },

  {
    id: 'sit_market',
    title: 'Bargaining at the Vegetable / Fruit Market',
    icon: '🧺',
    badge: 'Shopping',
    context: 'At local Sunday markets (Santhe) or Russell Market, vendors expect friendly banter. Being able to ask rates and negotiate small discounts is invaluable.',
    culturalTip: 'Tip: Start by greeting with "Anna" or "Akka". Use "Swalpa kammi maadi" (Reduce a bit) politely with a smile.',
    intent: 'Ask rates for vegetables and buy fresh produce',
    phrases: [
      {
        kannada: 'ಈ ಸೇಬು ಹಣ್ಣು ಕೆಜಿಗೆ ಎಷ್ಟು?',
        translit: 'Ee sebu hannu kg-ge eshtu?',
        english: 'How much are these apples per kilogram?',
        usage: 'Price check'
      },
      {
        kannada: 'ತುಂಬಾ ಜಾಸ್ತಿ ಆಯ್ತು, ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ.',
        translit: 'Thumba jaasthi aaytu, swalpa kadime maadi.',
        english: 'That is too high, please reduce the price a little.',
        usage: 'Bargaining phrase'
      },
      {
        kannada: 'ಒಂದು ಕೆಜಿ ತೂಕ ಮಾಡಿ.',
        translit: 'Ondu kg thooka maadi.',
        english: 'Please weigh one kilogram.',
        usage: 'Finalizing purchase'
      }
    ],
    expectedResponse: {
      kannada: 'ಸರಿ ಸರ್, ನೀವು ಕಾಯಂ ಗ್ರಾಹಕರು, ಐದು ರೂಪಾಯಿ ಕಮ್ಮಿ ಕೊಡಿ.',
      translit: 'Sari sir, neevu kaayam graahakaru, aidu roopayi kammi kodi.',
      english: 'Alright sir, you are a regular customer, pay 5 rupees less.'
    },
    challenge: {
      prompt: 'You want to ask if the mangoes are sweet before buying. How should you ask?',
      options: [
        {
          text: 'ಮಾವಿನ ಹಣ್ಣು ಸಿಹಿಯಾಗಿದೆಯಾ? (Maavina hannu sihiyaagideyaa?)',
          correct: true,
          explanation: 'Perfect! "Sihi" means sweet in Kannada. Hannu = fruit, maavina hannu = mango.'
        },
        {
          text: 'ಹಣ್ಣು ತುಂಬಾ ಖಾರ (Hannu thumba khaara)',
          correct: false,
          explanation: 'This means "The fruit is very spicy".'
        },
        {
          text: 'ಇಲ್ಲಿ ಮಳೆ ಬರುತ್ತಾ? (Illi male baruttaa?)',
          correct: false,
          explanation: 'This means "Does it rain here?".'
        }
      ]
    }
  },

  {
    id: 'sit_hospital',
    title: 'At the Clinic / Doctor Visit',
    icon: '🩺',
    badge: 'Health',
    context: 'Describing physical symptoms clearly is essential in medical situations. Knowing body parts and common illness terms will put you at ease.',
    culturalTip: 'Tip: Add "Nanage" (To me) before symptoms: "Nanage jvara ide" (I have fever), "Nanage thale novu ide" (I have headache).',
    intent: 'Explain symptoms to a doctor or pharmacist',
    phrases: [
      {
        kannada: 'ನನಗೆ ಎರಡು ದಿನದಿಂದ ಹೊಟ್ಟೆ ನೋವು ಇದೆ.',
        translit: 'Nanage eradu dinadinda hotte novu ide.',
        english: 'I have had stomach pain for two days.',
        usage: 'Explaining symptom and duration'
      },
      {
        kannada: 'ಈ ಔಷಧಿಯನ್ನು ಯಾವಾಗ ತೆಗೆದುಕೊಳ್ಳಬೇಕು?',
        translit: 'Ee oushadhiyannu yaavaaga thegedukollabeku?',
        english: 'When should I take this medicine?',
        usage: 'Asking dosage timing'
      },
      {
        kannada: 'ಯಾವುದಾದರೂ ಪಥ್ಯ ಇದೆಯಾ?',
        translit: 'Yaavudaadaru pathya ideya?',
        english: 'Are there any dietary restrictions?',
        usage: 'Asking about food precautions'
      }
    ],
    expectedResponse: {
      kannada: 'ಖಾರ ಮತ್ತು ಎಣ್ಣೆ ಪದಾರ್ಥ ತಿನ್ನಬೇಡಿ. ಮೂರು ದಿನ ಮಾತ್ರೆ ತಗೊಳ್ಳಿ.',
      translit: 'Khaara matthu enne padaartha thinnabedi. Mooru dina maathre thagolli.',
      english: 'Do not eat spicy and oily foods. Take tablets for three days.'
    },
    challenge: {
      prompt: 'How do you tell the doctor "I have a severe headache"?',
      options: [
        {
          text: 'ನನಗೆ ತುಂಬಾ ತಲೆ ನೋವು ಇದೆ (Nanage thumba thale novu ide)',
          correct: true,
          explanation: 'Exact! "Thale" = head, "novu" = pain/ache, "thumba" = very/severe.'
        },
        {
          text: 'ನಾನು ಆಸ್ಪತ್ರೆಗೆ ಹೋಗಲ್ಲ (Naanu aaspathrege hogalla)',
          correct: false,
          explanation: 'This means "I won\'t go to the hospital".'
        },
        {
          text: 'ನನ್ನ ಕೈಯಲ್ಲಿ ನೀರಿದೆ (Nanna kaiyalli neeride)',
          correct: false,
          explanation: 'This means "There is water in my hand".'
        }
      ]
    }
  },

  {
    id: 'sit_directions',
    title: 'Asking for Directions on the Street',
    icon: '🧭',
    badge: 'Navigation',
    context: 'When GPS signals falter in narrow cross streets, asking a friendly shopkeeper or walker is the fastest solution.',
    culturalTip: 'Tip: "Kshamisi" is "Excuse me". Follow with "Metro station yallide?" (Where is the metro station?).',
    intent: 'Locate the nearest metro station or landmark',
    phrases: [
      {
        kannada: 'ಕ್ಷಮಿಸಿ, ಹತ್ತಿರದ ಮೆಟ್ರೋ ಸ್ಟೇಷನ್ ಎಲ್ಲಿ ಬರುತ್ತದೆ?',
        translit: 'Kshamisi, hatthirada metro station yelli baruttade?',
        english: 'Excuse me, where is the nearest metro station?',
        usage: 'Polite street inquiry'
      },
      {
        kannada: 'ಇಲ್ಲಿಂದ ನಡೆದುಕೊಂಡು ಹೋಗಬಹುದಾ?',
        translit: 'Illinda nadedukondu hogabahudaa?',
        english: 'Can I go by walking from here?',
        usage: 'Checking if walkable'
      },
      {
        kannada: 'ಮುಂದೆ ಹೋಗಬೇಕಾ ಅಥವಾ ಹಿಂದೆನಾ?',
        translit: 'Munde hogabeka athava hindenaa?',
        english: 'Should I go ahead or behind?',
        usage: 'Clarifying direction'
      }
    ],
    expectedResponse: {
      kannada: 'ನೇರವಾಗಿ ಹೋಗಿ, ಸಿಗ್ನಲ್ ಬಳಿ ಬಲಕ್ಕೆ ತಿರುಗಿ, ಅಲ್ಲೇ ಇದೆ.',
      translit: 'Nera-vaagi hogi, signal bali balakke thirugi, alle ide.',
      english: 'Go straight, turn right at the traffic signal, it is right there.'
    },
    challenge: {
      prompt: 'Someone tells you: "ಇಲ್ಲಿಂದ ನೇರವಾಗಿ ಹೋಗಿ" (Illinda nera-vaagi hogi). What does that mean?',
      options: [
        {
          text: 'Go straight from here',
          correct: true,
          explanation: '"Illinda" = from here, "nera-vaagi" = straight, "hogi" = go.'
        },
        {
          text: 'Take a U-turn here',
          correct: false,
          explanation: 'Incorrect. U-turn or going back is "hinde hogi".'
        },
        {
          text: 'Wait here for someone',
          correct: false,
          explanation: 'Incorrect. Waiting is "kaayiri".'
        }
      ]
    }
  },

  {
    id: 'sit_rent',
    title: 'Renting an Apartment / House Inquiry',
    icon: '🏠',
    badge: 'Housing',
    context: 'Finding a flat or PG in Bengaluru requires discussing rent, advance deposit, water availability, and house rules with landlords.',
    culturalTip: 'Tip: "Baadige" means rent. "Advance" is used commonly in English. "Kaveri neeru baruttaa?" (Does Kaveri water come?) is a critical Bangalore question!',
    intent: 'Inquire about monthly rent and amenities',
    phrases: [
      {
        kannada: 'ಮನೆ ಬಾಡಿಗೆ ಎಷ್ಟು ಸರ್?',
        translit: 'Mane baadige eshtu sir?',
        english: 'How much is the house rent sir?',
        usage: 'Inquiring monthly rent'
      },
      {
        kannada: 'ಅಡ್ವಾನ್ಸ್ ಎಷ್ಟು ಕೊಡಬೇಕು?',
        translit: 'Advance eshtu kodabeku?',
        english: 'How much advance deposit should be paid?',
        usage: 'Deposit inquiry'
      },
      {
        kannada: 'ಕಾವೇರಿ ನೀರು ಮತ್ತು ಬೋರ್‌ವೆಲ್ ಸೌಲಭ್ಯ ಇದೆಯಾ?',
        translit: 'Kaveri neeru matthu borewell soulabhya ideya?',
        english: 'Is Kaveri water and borewell facility available?',
        usage: 'Crucial water inquiry in Bengaluru'
      }
    ],
    expectedResponse: {
      kannada: 'ಬಾಡಿಗೆ ಹದಿನೈದು ಸಾವಿರ, ಆರು ತಿಂಗಳ ಅಡ್ವಾನ್ಸ್. ಇಪ್ಪತ್ನಾಲ್ಕು ಗಂಟೆ ನೀರು ಬರುತ್ತೆ.',
      translit: 'Baadige hadinaidu saavira, aaru thingala advance. Ippathnaalku gante neeru barutthe.',
      english: 'Rent is 15,000, 6 months advance. Water comes 24 hours.'
    },
    challenge: {
      prompt: 'How do you ask the owner "When can I shift / move in?" in Kannada?',
      options: [
        {
          text: 'ನಾನು ಮನೆಗೆ ಯಾವಾಗ ಬರಬಹುದು? (Naanu manege yaavaaga barabahudu?)',
          correct: true,
          explanation: 'Spot on! "Manege yaavaaga barabahudu" politely asks when you may enter/move into the house.'
        },
        {
          text: 'ಮನೆ ತುಂಬಾ ಚಿಕ್ಕದು (Mane thumba chikkadu)',
          correct: false,
          explanation: 'This means "The house is very small".'
        },
        {
          text: 'ಬಾಡಿಗೆ ಕೊಡಲ್ಲ (Baadige kodalla)',
          correct: false,
          explanation: 'This means "I won\'t pay rent".'
        }
      ]
    }
  },

  {
    id: 'sit_emergency',
    title: 'Emergency / Asking for Police & Medical Help',
    icon: '🚨',
    badge: 'Safety',
    context: 'In an emergency, losing seconds to language barriers is stressful. These high-urgency phrases ensure you can call for immediate aid.',
    culturalTip: 'Tip: Shouting "Sahaaya maadi!" (Help!) or "Kaapaadi!" (Save/Protect me!) alerts everyone around you immediately.',
    intent: 'Seek emergency assistance and contact authorities',
    phrases: [
      {
        kannada: 'ದಯವಿಟ್ಟು ಯಾರಾದರೂ ಸಹಾಯ ಮಾಡಿ!',
        translit: 'Dayavittu yaaradaaru sahaaya maadi!',
        english: 'Please, someone help!',
        usage: 'Urgent call for bystanders'
      },
      {
        kannada: 'ಇಲ್ಲಿ ತುರ್ತು ಪರಿಸ್ಥಿತಿ ಇದೆ, ಆಂಬ್ಯುಲೆನ್ಸ್ ಕರೆಯಿರಿ.',
        translit: 'Illi thurtu paristhithi ide, ambulance kareyiri.',
        english: 'There is an emergency here, call an ambulance.',
        usage: 'Medical crisis'
      },
      {
        kannada: 'ನನ್ನ ಮೊಬೈಲ್ ಮತ್ತು ವ್ಯಾಲೆಟ್ ಕಳೆದುಹೋಗಿದೆ.',
        translit: 'Nanna mobile matthu wallet kaleduhogide.',
        english: 'My mobile phone and wallet are lost / stolen.',
        usage: 'Reporting theft or loss'
      }
    ],
    expectedResponse: {
      kannada: 'ಗಾಬರಿಯಾಗಬೇಡಿ, ನಾನು ಪೊಲೀಸರಿಗೆ ಮತ್ತು ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಕಾಲ್ ಮಾಡ್ತೀನಿ.',
      translit: 'Gaabariyaagabedi, naanu policerige matthu ambulance-ge call maadtheeni.',
      english: 'Do not panic, I am calling the police and ambulance right away.'
    },
    challenge: {
      prompt: 'What is the most urgent way to shout "Help!" in Kannada?',
      options: [
        {
          text: 'ಸಹಾಯ ಮಾಡಿ! (Sahaaya maadi!)',
          correct: true,
          explanation: 'Correct! "Sahaaya maadi" is universally understood across Karnataka as "Please help!".'
        },
        {
          text: 'ಶುಭೋದಯ (Shubhodaya)',
          correct: false,
          explanation: 'This means "Good morning".'
        },
        {
          text: 'ಊಟ ಆಯ್ತಾ? (Oota aaytha?)',
          correct: false,
          explanation: 'This means "Did you eat?".'
        }
      ]
    }
  },

  {
    id: 'sit_workplace',
    title: 'Tech Workplace & Coffee Machine Chat',
    icon: '💻',
    badge: 'Professional',
    context: 'Karnataka is the tech capital of India. Breaking the ice with Kannada colleagues over filter coffee builds wonderful friendships.',
    culturalTip: 'Tip: Speaking even two sentences of Kannada in a team standup or cafeteria earns immense appreciation and warmth from local colleagues.',
    intent: 'Chat casually with teammates about work and lunch',
    phrases: [
      {
        kannada: 'ಇವತ್ತು ಊಟಕ್ಕೆ ಏನು ತಂದಿದ್ದೀರಿ?',
        translit: 'Ivattu ootakke enu thandiddiri?',
        english: 'What did you bring for lunch today?',
        usage: 'Lunchtime icebreaker'
      },
      {
        kannada: 'ನಾನು ಇಮೇಲ್ ಕಳುಹಿಸಿದ್ದೇನೆ, ಒಮ್ಮೆ ನೋಡಿ.',
        translit: 'Naanu email kaluhisiddene, omme nodi.',
        english: 'I have sent an email, please take a look once.',
        usage: 'Professional coordination'
      },
      {
        kannada: 'ಇವತ್ತಿನ ಕೆಲಸ ಎಲ್ಲಾ ಮುಗಿಯಿತಾ?',
        translit: 'Ivattina kelasa ella mugiyitha?',
        english: 'Did all of today\'s work get completed?',
        usage: 'End of day wrap up'
      }
    ],
    expectedResponse: {
      kannada: 'ಹೌದು ಮುಗಿಯಿತು! ಬನ್ನಿ ಎಲ್ಲರೂ ಒಟ್ಟಿಗೆ ಕಾಫಿ ಕುಡಿಯಲು ಹೋಗೋಣ.',
      translit: 'Haudu mugiyitu! Banni ellaroo ottige coffee kudiyalu hogona.',
      english: 'Yes finished! Come, let us all go together to drink coffee.'
    },
    challenge: {
      prompt: 'Your colleague asks "Kelasa mugiyitha?". What are they asking you?',
      options: [
        {
          text: 'Is your work completed?',
          correct: true,
          explanation: '"Kelasa" = work, "mugiyitha?" = is it finished?'
        },
        {
          text: 'Where are you going for dinner?',
          correct: false,
          explanation: 'Incorrect.'
        },
        {
          text: 'What time is the bus?',
          correct: false,
          explanation: 'Incorrect.'
        }
      ]
    }
  },

  {
    id: 'sit_college',
    title: 'College Campus & Canteen Banter',
    icon: '🎓',
    badge: 'Campus',
    context: 'For non-Kannadiga students joining engineering or medical colleges across Karnataka, picking up campus Kannada is the fastest way to make lifelong friends.',
    culturalTip: 'Tip: Use "Macha" (buddy/pal) only with very close peer friends. With seniors and staff, use "Sir" or "Akka/Anna".',
    intent: 'Ask for class notes and hang out at the canteen',
    phrases: [
      {
        kannada: 'ನಾಳೆ ಎಕ್ಸಾಮ್‌ಗೆ ಯಾವ ಚಾಪ್ಟರ್ ಓದಬೇಕು?',
        translit: 'Naale exam-ge yaava chapter odabeku?',
        english: 'Which chapters should we study for tomorrow\'s exam?',
        usage: 'Study group question'
      },
      {
        kannada: 'ಕ್ಲಾಸ್ ಮುಗಿದ ಮೇಲೆ ಲೈಬ್ರರಿಗೆ ಹೋಗೋಣ.',
        translit: 'Class mugida mele library-ge hogona.',
        english: 'Let us go to the library after class finishes.',
        usage: 'Planning study time'
      },
      {
        kannada: 'ಕ್ಯಾಂಟೀನ್‌ನಲ್ಲಿ ಮ್ಯಾಗಿ ಮತ್ತು ಟೀ ಸಿಗುತ್ತಾ?',
        translit: 'Canteen-nalli Maggi matthu tea siguttaa?',
        english: 'Do we get Maggi and tea in the canteen?',
        usage: 'Snack check'
      }
    ],
    expectedResponse: {
      kannada: 'ಖಂಡಿತ ಸಿಗುತ್ತೆ, ನಡಿ ಬೇಗ ಹೋಗೋಣ!',
      translit: 'Khanditha sigutthe, nadi bega hogona!',
      english: 'Certainly available, walk quickly let\'s go!'
    },
    challenge: {
      prompt: 'How do you ask a classmate "Do you have the assignment notes with you?"',
      options: [
        {
          text: 'ನಿನ್ನ ಹತ್ತಿರ ಅಸೈನ್‌ಮೆಂಟ್ ನೋಟ್ಸ್ ಇದೆಯಾ? (Ninna hathira assignment notes ideya?)',
          correct: true,
          explanation: 'Correct! "Ninna hathira" means "with you / in your possession", "ideya" = is it there?'
        },
        {
          text: 'ನನಗೆ ಕಾಲೇಜು ಬೇಡ (Nanage college beda)',
          correct: false,
          explanation: 'This means "I don\'t want college".'
        },
        {
          text: 'ಎಲ್ಲರೂ ಹೊರಗಡೆ ಹೋಗಿ (Ellaroo horagade hogi)',
          correct: false,
          explanation: 'This means "Everyone go outside".'
        }
      ]
    }
  }
];
