// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <a href="#" onclick="alert('You click on a link!')">Click Me!</a>
// </body>
// </html>


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         #images{
//             display: flex;
//             justify-content: space-evenly;
//         }
//         #images img{
//             width:250px;
//             height:350px;
//             border:1px solid lightblue;
//             cursor:pointer;
//         }
//         h1,div{
//             color:lightblue;
//         }
//     </style>
// </head>
// <body>
//     <h1>Mobile Phone Lookup</h1>
//     <div id="images">
//     <div>
//     <img src="phone-img/Phone1.jpg" alt="phone-1" onclick="message()">
//     <div>Phone-1</div>
//     </div>
//     <div>
//     <img src="phone-img/Phone2.jpg" alt="phone-2" onclick="message()">
//     <div>Phone-2</div>
//     </div>
//     <div>
//     <img src="phone-img/Phone3.png" alt="phone-3" onclick="message()">
//     <div>Phone-3</div>
//     </div>
//     <div>
//     <img src="phone-img/Phone4.jpg" alt="phone-4" onclick="message()">
//     <div>Phone-4</div>
//     </div>
//     </div>
//     <script>
//         function message(){
//             alert('Thanks for purchasing phone for us')
//         }
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
//     <table id="table">
//         <tr><th>Index</th><th>Name</th><th>Class</th><th>Action</th></tr>
//         <tr><td>0</td><td>Jhone</td><td>10</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>1</td><td>JDoe</td><td>9</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>2</td><td>Jho</td><td>8</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>3</td><td>Jhe</td><td>7</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>4</td><td>Jhee</td><td>6</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>5</td><td>Umair</td><td>10</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>6</td><td>Areeb</td><td>4</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>7</td><td>Shah</td><td>10</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>8</td><td>Goof</td><td>8</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>9</td><td>Jhdd</td><td>6</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//         <tr><td>10</td><td>Jhone</td><td>7</td><td><input type="button" value="Delete" onclick="del(this)"></td></tr>
//     </table>
//     <script>
//         function del(deleteBtn){
//             var index=deleteBtn.parentNode.parentNode.rowIndex;
//             document.getElementById('table').deleteRow(index);
//         }
//     </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         #image{
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             width:100%;
//             height:96vh;
//         }
//     </style>
// </head>
// <body>
//     <div id="image">
//         <img src="./phone-img/Phone1.jpg" alt="Phone-1" onmouseover="setImage()" onmouseout="firstImage()" id='im'>
//     </div>
//     <script>
//         function setImage(){
//             document.getElementById("im").src="./phone-img/Phone2.jpg"
//         }
//         function firstImage(){
//             document.getElementById("im").src="./phone-img/Phone1.jpg"
//         }
//     </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
 
//         #container{
//             display:flex;
//             flex-direction: column;
//             justify-content: center;
//             align-items:center;
//             height:60vh;
//             width:40%;
//             background-color:red;
//         }
//         #counter{
//             width:200px;
//             height: 20px;
//             border: 1px solid white;
//         }
//         #container div{
//             margin:20px;
//         }
//     </style>
// </head>
// <body>
//     <div id="container">
//         <div id="counter">
//             0
//         </div>
//         <div id="btn">
//             <span>
//                 <button onclick="increment()">Increment</button>
//                 <button onclick="decrement()">Decrement</button>
//             </span>
//         </div>
//     </div>
//     <script>
//         function increment(){
//             var val=document.getElementById('counter').innerHTML;
//             document.getElementById('counter').innerHTML=Number(val)+1;
//         }
//         function decrement(){
//             var val=document.getElementById('counter').innerHTML;
//             document.getElementById('counter').innerHTML=Number(val)-1;
//         }
//     </script>
// </body>
// </html>