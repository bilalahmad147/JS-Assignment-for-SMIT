// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div>
//         <h1> DOM </h1>
//         <div id="form-content" class="content">
//         <label for="first-name">First Name</label>
//         <input type="text" id="first-name" />
//         <label for="last-name">Last Name</label>
//         <input type="text" id="last-name" />
//         <label for="email">Email</label>
//         <input type="text" id="email" />
//         </div>
//         <div id="main-content" class="content">
//         <p class="render"> First Name : Alex</p>
//         <p class="render" id="lastName">Last Name: Bank</p>
//         <p class="render"> Email : alexbank@example.com</p>
//         <p class="render"> Country : Pakistan </p>
//         <p class="render"> contact : +92 300 1234567</p>
//         </div>
//     </div>
//     <div>
//         <h1>Render Class Data</h1>
//         <p id="data"></p>
//     </div>
//     <script>
//         var mainElem=document.getElementById('main-content');
//         console.log(mainElem.children);
//         var renderElem=document.getElementsByClassName('render');
//         for(var i=0;i<renderElem.length;i++)
//         {
//             console.log(renderElem[i].innerHTML);
//             document.getElementById('data').innerHTML=renderElem[i].innerHTML;
//         }
//         document.getElementById('first-name').value=renderElem[0].innerHTML;
//         document.getElementById('last-name').value=renderElem[1].innerHTML;
//         document.getElementById('email').value=renderElem[2].innerHTML;
//     </script>
// </body>
// </html>



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div>
//         <h1> DOM </h1>
//         <div id="form-content" class="content">
//         <label for="first-name">First Name</label>
//         <input type="text" id="first-name" />
//         <label for="last-name">Last Name</label>
//         <input type="text" id="last-name" />
//         <label for="email">Email</label>
//         <input type="text" id="email" />
//         </div>
//         <div id="main-content" class="content">
//         <p class="render"> First Name : Alex</p>
//         <p class="render" id="lastName">Last Name: Bank</p>
//         <p class="render"> Email : alexbank@example.com</p>
//         <p class="render"> Country : Pakistan </p>
//         <p class="render"> contact : +92 300 1234567</p>
//         </div>
//     </div>
//     <script>
//        var formContent=document.getElementById('form-content');
//        console.log(formContent.nodeType)
//        var lastName=document.getElementById('lastName');
//        console.log(lastName.nodeType);
//        console.log(lastName.childNodes[0].nodeType)
//        lastName.innerHTML='Last Name: Areeb';
//        var mainContent=document.getElementById('main-content');
//        console.log(mainContent.firstElementChild);
//        console.log(mainContent.lastElementChild);
//        console.log(lastName.previousElementSibling);
//        console.log(lastName.nextElementSibling);
//        var email=document.getElementById('email');
//        console.log(email.parentNode)
//        console.log(email.nodeType);
//     </script>
// </body>
// </html>