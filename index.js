const delayedPromise = (value, delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};


const promises = [
  delayedPromise('Promise 1', 1000),
  delayedPromise('Promise 2', 2000),
  delayedPromise('Promise 3', 1500),
  delayedPromise('Promise 4', 3000),
  delayedPromise('Promise 5', 500),
];


Promise.all(promises)
  .then(results => {
    console.log('Усі проміси виконались:');
    console.log(results);
  });





const randomDelay = value => {
  const delay = Math.floor(Math.random() * 4000) + 1000;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};


const racePromises = [
  randomDelay(1),
  randomDelay(2),
  randomDelay(3),
  randomDelay(4),
  randomDelay(5),
];


Promise.race(racePromises)
  .then(result => {
    console.log('Найшвидший проміс:', result);
  });