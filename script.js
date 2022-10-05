'use strict';

// const getCountryAndNeighbour = function (country) {
//   // Render Country
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);

//     // Render neighbour country
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');

//       // Render neighbours's neighbour
//       const neighbour2 = data2.borders?.[0];

//       if (!neighbour2) return;

//       const request3 = new XMLHttpRequest();
//       request3.open('GET', `https://restcountries.com/v2/alpha/${neighbour2}`);
//       request3.send();

//       request3.addEventListener('load', function () {
//         // console.log(this.responseText);
//         const data3 = JSON.parse(this.responseText);
//         console.log(data3);
//         renderCountry(data3, 'neighbour');
//       });
//     });
//   });
// };

// getCountryAndNeighbour('portugal');
// getCountryData('usa');
// getCountryData('russia');

// CALL BACK HELL
// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('2 sec passed');
//     setTimeout(() => {
//       console.log('3 sec passed');
//       setTimeout(() => {
//         console.log('4 sec passed');
//         setTimeout(() => {
//           console.log('5 sec passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promises using fetch API
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// const request = fetch(`https://restcountries.com/v2/name/pakistan`);
// console.log(request);

///////////////////////////////////////////////////////////////////////////////////

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
        </div>
    </article>

  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error(`There are no neighbours`);
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       renderError(`Something went wrong...${err.message}...Try again!!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
///////////////////////////////////////////////////
// const getCountryData = function (country) {
// Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       // console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       // const neighbour = 'dfdf';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       // console.log(data);
//       renderCountry(data, 'neighbour');

//       const neighbour = data.borders?.[0];
//       // const neighbour = 'ddfdf';

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data, 'neighbour');

//       // const neighbour = data.borders?.[0];
//       const neighbour = 'sdfsdf';

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(err.message);
//       renderError(`Something went wrong....${err.message}...Try again!!!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// }
/////////////////////////////////////////////
// btn.addEventListener('click', () => {
//   getCountryData('australia');
// });
/////////////////////////////////////////////
// getCountryData('dfsdf');

// ////// // Coding Challenge

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response) throw new Error('Something went wrong');
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error('Something went wrong...');
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[1]);
//     })
//     .catch(err => {
//       renderError(`${err.message}...Try again!!!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// whereAmI(19.037, 72.873);

// ///// Event loop

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolve promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve('You Won');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = seconds => {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 seconds');
//   });

// const getPromise = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPromise()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Coding Challenge

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     div.appendChild(img);
//     img.src = imgPath;

//     resolve(document.getElementById('images').appendChild('div'));
//     reject('Image not loaded');
//   });
// };

// createImage(
//   'https://www.google.com/search?q=garden+picture&sxsrf=ALiCzsYsGnvcyWfAJgGfoxn-swKePH4lag:1664884415295&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjNuanhwcb6AhVrcGwGHW23CIQQ_AUoAXoECAUQAw&biw=1366&bih=657&dpr=1#imgrc=A1B47CEdV3sM2M'
// );

/*
const wait = seconds => {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imagesContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imagesContainer.append('img');
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Img1 is loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image2 is loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err))
  .finally(() => {
    console.log('Good luck');
  });
*/

// Async Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    const geo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!geo.ok) throw new Error('Problem with fetching coordinates...');
    const dataGeo = await geo.json();
    console.log(dataGeo.country);

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem with fetching country');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);
  }
};

whereAmI();
