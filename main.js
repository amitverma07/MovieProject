
// const buttonData = document.querySelector('#button');
// const getlist = document.querySelector('#users');


//   // console.log(xhrReq.responseText);

//  // if(formData === 'True') {
//   buttonData.addEventListener('click', function(e) { 
//     const formData  = document.querySelector('#form');
//     const data = JSON.parse(this.responseText);
//     const xhrReq = new XMLHttpRequest();
//     xhrReq.open('GET', `http://www.omdbapi.com/?s=${formData.value}&apikey=32456202`);
//     getlist.insertAdjacentHTML('beforeend', `<li>${data.title}</li>`, `<li>${data.type}</li>`, `<li>${data.poster}</li>`);
//     ///console.log(formData);
//     xhrReq.onload = handleSucess;
//     xhrReq.send();
//     e.preventDefault();
//   })
// //}


// // function handleError() {
// //   console.log("Error Occured");
// // }

// //const xhrReq = new XMLHttpRequest();
// //xhrReq.open('GET', 'http://www.omdbapi.com/?s=${formData}&apikey=32456202');
// // xhrReq.onload = handleSucess;
// // xhrReq.onerror = handleError;
// //xhrReq.send();


const buttonData = document.querySelector('#button');

buttonData.addEventListener('click', function (e) {
  e.preventDefault();
  const formData = document.querySelector('#box');
  console.log(formData.value);
  const getlist = document.querySelector('#movies');
  console.log(getlist);
  const xhrReq = new XMLHttpRequest();

  xhrReq.open('GET', `http://www.omdbapi.com/?s=${formData.value}&apikey=32456202`);

  xhrReq.onload = () => {
    const data = JSON.parse(xhrReq.responseText);
    console.log(data);
      data.Search.forEach(user => {
      getlist.insertAdjacentHTML('beforeend',
        `<li>${user.Title}</li> 
        <li><img src = "${user.Poster}" ></li>`);
    });
  }

  xhrReq.send();
})