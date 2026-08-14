/**
 * Know His Pattern - Relationship Behavior Questions
 * 
 * NOTE: The `type` property ("green" or "red") is used STRICTLY internally for secret scoring.
 * It must NEVER be displayed or hinted to the user while taking the quiz.
 */

export const questions = [
  {
    id: 1,
    category: "Love & Care",
    question: "Your girlfriend is on her period and is feeling uncomfortable. What would you do?",
    answers: [
      {
        id: "1a",
        text: "I would support her, give her attention, bring her food or medicine, and make sure she feels comfortable.",
        type: "green",
        insight: "Demonstrates active empathy, nurturing care, and prioritizing comfort during vulnerable moments."
      },
      {
        id: "1b",
        text: "Her period is natural. Why should I treat her any differently than a normal day?",
        type: "red",
        insight: "Shows a lack of compassionate consideration for physical discomfort and emotional needs."
      },
      {
        id: "1c",
        text: "I don't want to deal with emotional situations, so I would avoid her until she feels better.",
        type: "red",
        insight: "Indicates emotional withdrawal and unwillingess to show up when support is needed most."
      }
    ]
  },
  {
    id: 2,
    category: "Communication",
    question: "You and your partner have a disagreement about how to spend the weekend. How do you handle it?",
    answers: [
      {
        id: "2a",
        text: "I would insist on doing what I want, because I worked hard all week and deserve to choose.",
        type: "red",
        insight: "Displays self-centered decision making rather than joint compromise."
      },
      {
        id: "2b",
        text: "I would sit down, listen to her preferences, and find a solution that makes both of us happy.",
        type: "green",
        insight: "Reflects healthy collaborative communication, active listening, and mutual respect."
      },
      {
        id: "2c",
        text: "I would agree to her plan verbally, but act distant and annoyed during the entire weekend.",
        type: "red",
        insight: "Employs passive-aggressive behavior instead of honest communication."
      }
    ]
  },
  {
    id: 3,
    category: "Trust & Freedom",
    question: "Your partner is planning a night out with her close friends, including male acquaintances. How do you react?",
    answers: [
      {
        id: "3a",
        text: "I would encourage her to have a great time and tell her to enjoy herself without worrying.",
        type: "green",
        insight: "Demonstrates secure trust, confidence, and respect for independent social life."
      },
      {
        id: "3b",
        text: "I would demand to know every person attending and send frequent check-in messages all night.",
        type: "red",
        insight: "Signals possessive surveillance and underlying trust issues."
      },
      {
        id: "3c",
        text: "I would tell her I'm uncomfortable with male acquaintances present and ask her not to go.",
        type: "red",
        insight: "Imposes restrictive control based on insecurity."
      }
    ]
  },
  {
    id: 4,
    category: "Respect & Boundaries",
    question: "Your partner expresses that she needs some quiet alone time to unwind after a stressful day. What do you do?",
    answers: [
      {
        id: "4a",
        text: "I take it personally and ask why she doesn't want to spend time with me right now.",
        type: "red",
        insight: "Conflates personal boundaries with personal rejection."
      },
      {
        id: "4b",
        text: "I respect her boundary, give her space, and let her know I'm available whenever she wants to talk.",
        type: "green",
        insight: "Honors emotional boundaries without taking personal space as an offense."
      },
      {
        id: "4c",
        text: "I keep interrupting her alone time to ask questions or talk about my own day.",
        type: "red",
        insight: "Disregards explicit requests for boundaries and quiet rest."
      }
    ]
  },
  {
    id: 5,
    category: "Conflict & Arguments",
    question: "During a heated argument, you realize you made an incorrect assumption. What is your reaction?",
    answers: [
      {
        id: "5a",
        text: "I acknowledge my mistake immediately, apologize sincerely, and refocus on fixing the issue together.",
        type: "green",
        insight: "Shows high emotional maturity, accountability, and valuing the relationship over winning arguments."
      },
      {
        id: "5b",
        text: "I change the subject to something she did wrong in the past to deflect attention away from my mistake.",
        type: "red",
        insight: "Uses defensive deflection and scorekeeping to avoid taking responsibility."
      },
      {
        id: "5c",
        text: "I give her the silent treatment for a day or two so she feels bad for confronting me.",
        type: "red",
        insight: "Uses stonewalling and emotional punishment to manipulate conflict."
      }
    ]
  },
  {
    id: 6,
    category: "Effort & Attention",
    question: "Your partner reaches a major milestone at work or school. How do you respond?",
    answers: [
      {
        id: "6a",
        text: "I congratulate her briefly, but quickly redirect the conversation back to my own achievements.",
        type: "red",
        insight: "Competes for attention rather than genuinely celebrating her achievements."
      },
      {
        id: "6b",
        text: "I celebrate her achievement enthusiastically, plan something special, and express how proud I am.",
        type: "green",
        insight: "Provides active support, enthusiasm, and celebration for her success."
      },
      {
        id: "6c",
        text: "I minimize her achievement by saying it wasn't that big of a deal.",
        type: "red",
        insight: "Diminishes her accomplishments and undermines self-worth."
      }
    ]
  },
  {
    id: 7,
    category: "Loyalty & Honesty",
    question: "Someone outside your relationship flirts with you on social media or in person. What do you do?",
    answers: [
      {
        id: "7a",
        text: "I clearly state that I am in a committed relationship and set a firm boundary right away.",
        type: "green",
        insight: "Upholds strong fidelity, transparent boundaries, and respect for commitments."
      },
      {
        id: "7b",
        text: "I flirt back subtly because enjoying extra attention doesn't hurt anyone as long as nothing physical happens.",
        type: "red",
        insight: "Entertains external romantic validation while breaching emotional trust."
      },
      {
        id: "7c",
        text: "I keep the conversation secret from my partner so it doesn't cause unnecessary drama.",
        type: "red",
        insight: "Chooses secrecy and deception over open loyalty."
      }
    ]
  },
  {
    id: 8,
    category: "Responsibility",
    question: "You forgot an important promise you made to your partner (like picking up something she needed). How do you handle it?",
    answers: [
      {
        id: "8a",
        text: "I own up to forgetting, apologize without making excuses, and immediately go fix the situation.",
        type: "green",
        insight: "Takes immediate responsibility and takes constructive corrective action."
      },
      {
        id: "8b",
        text: "I blame my busy schedule and argue that she should be more understanding.",
        type: "red",
        insight: "Shifts blame away from personal accountability onto external circumstances."
      },
      {
        id: "8c",
        text: "I claim that she never asked me to do it in the first place.",
        type: "red",
        insight: "Resorts to gaslighting and denying past commitments."
      }
    ]
  },
  {
    id: 9,
    category: "Support & Empathy",
    question: "Your partner is overwhelmed with stress and breaks down crying. How do you respond?",
    answers: [
      {
        id: "9a",
        text: "I tell her she is overreacting and that crying won't solve anything.",
        type: "red",
        insight: "Dismisses emotional vulnerability and invalidates genuine distress."
      },
      {
        id: "9b",
        text: "I hold her, listen attentively without interrupting, and offer comforting support.",
        type: "green",
        insight: "Offers safe emotional refuge, warm presence, and validating comfort."
      },
      {
        id: "9c",
        text: "I get uncomfortable and leave the room until she stops crying.",
        type: "red",
        insight: "Abandons partner during heightened emotional distress due to personal discomfort."
      }
    ]
  },
  {
    id: 10,
    category: "Boundaries & Privacy",
    question: "How do you view personal phone privacy within your relationship?",
    answers: [
      {
        id: "10a",
        text: "I respect her phone privacy as a natural right and don't feel the need to secretively check her messages.",
        type: "green",
        insight: "Demonstrates healthy trust, respecting privacy without paranoia."
      },
      {
        id: "10b",
        text: "I believe partners should have open phones, but I periodically check her messages without asking.",
        type: "red",
        insight: "Violates personal boundary through covert snooping."
      },
      {
        id: "10c",
        text: "I demand her phone passcodes and read her chats to make sure she isn't hiding anything.",
        type: "red",
        insight: "Imposes controlling behavior under the guise of transparency."
      }
    ]
  }
];
