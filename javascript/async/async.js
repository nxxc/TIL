// async & await
// claer style of using promise :)

// 1. async
async function fetchUser() {
  return 'nxxc';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return '🍎';
}

async function getBanana() {
  await delay(2000);
  return '🍌';
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple}+${banana}`;
}

pickFruits().then(console.log);

// 3. useFul Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join('+')
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
