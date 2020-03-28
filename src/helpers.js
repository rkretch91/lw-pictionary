export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
const digitalGenerosity = ['Send 5 kind messages to any friend',
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
                           'Find a personal cause on GoFundMe and donate'
];
  const generatedMessage = `${rando(digitalGenerosity)}`
  return generatedMessage;
}
