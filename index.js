console.error(new Date);
// https://www.programmingwithbasics.com/2020/05/rest-api-in-javascript.html
// fetch('https://api.mocki.io/v1/b13e0144X', { method: 'POST', headers: {
// 'x-api-key': '9ff709f9-a598-4934-9f9b-cbb889ecbc03' } })
// .then(response => response.json())
// .then(data => console.log(data));

fetch('https://api.mocki.io/v1/b13e0144X')
  .then((response) => {
    console.log(response.data)
  });