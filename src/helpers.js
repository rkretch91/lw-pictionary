export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
const digitalGenerosity = ['Send 5 kind messages to any 5 friends',
                           'Offer a service to someone who needs it (online)',
                           'Write a rainy day letter to a friend. This is a letter they will only open on a day when they are feeling down and need a boost.',
                           'If you have the means, donate $10 to the cause of your choice',
                           'Initiate a Zoom happy hour with a friend or group of friends',
                           'Send a colleague a message complimenting them on their hard work',
                           'Call a sibling',
                           'Call a grandparent',
                           'Call a parent',
                           'Call a family member that could use some love today',
                           'Find an online volunteering opportunity and sign up to do it!',
                           'Find a personal cause on GoFundMe and donate',
                           'Tell someone what you admire about them',
                           'Promote a small business - ex. buy take away from your favorite restaurant',
                           'Plant a tree via onetreeplanted.org - only costs a dollar',
                           'Workout for at least 10 minutes today (try Freeletics)',
                           'Be fully present during a conversation today - put your phone away',
                           'Identify your biggest phobia and do something today to fix it',
                           'Give three compliments to a stranger online',
                           'Pamper yourself today - ex. take a bath',
                           'Dance to your favorite song and scream the lyrics outloud',
                           'Spend 30 minutes learning a new skill today or developing one',
                           'Spend 30 minutes learning a language today (try Duolingo)',
                           'Send in an appication for something (a job, university, other program)',
                           'Do something creative for an hour',
                           'Find one inspiring person and call or write them',
                           'Turn off your phone for the whole day (if not possible, once this week)',
                           'Go for a twenty minute walk in a direction you normally don’t go in',
                           'Spend 30 minutes writing about whatever today',
                           'Cook yourself something unusual or special today',
                           'If you haven’t started yet, start meditating for 30 days today (Headspace is a great app)',
                           'Do a chore for someone without them noticing',
                           'Write your neighbors a nice letter and pop it in their mailbox',
                           'Call an old friend',
                           'Send five friends or family members messages about their strongest qualities to boost their confidence',
                           'Get your voice out there today (an opinion, your music, your love for someone) in whatever way (message, video, in-person)',
                           'Do a yoga class online today',
                           'Sit with a glass of wine or a cup of tea and relax',
                           'Read a book today or a positive article',
                           'Tell an old teacher/colleagues/etc how much they inspired you',
                           'Come up with a home project today and do it for a little while'
];
  const generatedMessage = `${rando(digitalGenerosity)}`
  return generatedMessage;
}
