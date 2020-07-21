// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         form{
//             display: flex;
//             flex-direction: column;
//             width:300px;
//             height:250px;
//             justify-content: space-evenly;
//             margin:130px auto;
//             padding:10px;
//             background-color: lightslategray;
//             border-radius: 6px;
//         }
//         input{
//             padding:5px;
//         }
//     </style>
// </head>
// <body>
//     <form onsubmit="displayData()">
//         <label>Username</label>
//         <input type="text" placeholder="Enter Username or Email..." id='user'>
//         <label>Password</label>
//         <input type="password" placeholder="Enter Password..." id='pass'>
//         <input type='submit' value='Signup'>
//     </form>
//     <script>
//         function displayData(e){
//             var userName=document.getElementById('user').value;
//             var password=document.getElementById('pass').value;
//            alert("Your Username is "+userName+"\n"+"Your Password is "+password);
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
//             width:450px;
//             padding:15px;
//             margin:70px auto;
//             background-color: rgb(176, 189, 202);
//         }
//         h2{
//            font-weight: initial;
//         }
//         #hide{
//             display:none;
//         }
//     </style>
// </head>
// <body>
//     <div id='container'>
//         <h2>Where does it come from?</h2>
//         <p>
//             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<div id='hide'> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            
//             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
//         </p>
//         <button onclick="fullReadText()">Read Text</button>
//     </div>
//     <script>
//         function fullReadText(){
//             document.getElementById('hide').style.display='block';
//         }
//     </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="fontawesome/css/all.min.css" type="text/css">
//     <title>Document</title>
//     <style>
//         h2{
//             text-align: center;
//         }
//         #container{
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//             width: 350px;
//             min-height: 500px;
//             background-color: lightslategrey;
//             box-sizing: border-box;
//             padding: 10px;
//             margin:30px auto;
//             border-radius: 5px;
//         }
//         form{
//             display: flex;
//             flex-direction: column;
//             justify-content: space-evenly;
//             height:120px;
//             background-color: rgb(154, 170, 187);
//             padding:5px;
//             border-radius: 3px;
//         }
//         input{
//             padding: 6px;
//         }
//         table{
//             width:100%;
//             min-height: 120px;
//             background-color:  rgb(154, 170, 187);
//             padding:5px;
//             border-radius: 3px;
//         }
//         table tr{
//             display: flex;
//             justify-content: space-between;
//             background-color: rgb(182, 190, 197);
//             padding:3px;
//         }
//         tr:first-child{
//             background-color: lightslategray;
//         }
//     </style>
// </head>
// <body>
//     <div id='container'>
//         <div>
//             <div>
//                 <h2>Student Management System</h2>
//             </div>
//             <div>
//                 <h3>Student Record</h3>
//                 <table id="table">
//                     <tr><th>Index</th><th>Name</th><th>Class</th><th>Action</th></tr>
//                 </table>
//             </div>
//         </div>
//         <div>
//             <h3>Add Student Record</h3>
//             <form>
//                 <input type="text" id="studentName" placeholder="Enter Student Name...">
//                 <input type="number"  id="className" placeholder="Enter Class Name...">
//                 <input type='button' value="Add Record" onclick="addStudentRecord()">
//             </form>
//         </div>
//     </div>
//     <script>
//         var number=0;
//         var cell;
// 		function addStudentRecord() {
//             if(cell==undefined) {
//                 number=number+1;
//                 var studentName=document.getElementById("studentName").value;
//                 var className=document.getElementById("className").value;
//                 var button='<span><input type="button" value="X" onclick="deleteStudentRecord(this)"><input type="button" value="#" onclick="updateStudentRecord(this)"></span>';
//                 var record={number,studentName,className,button};
//                 var table=document.getElementById('table');
//                 var addRow=table.insertRow(-1);
//                 var cellIncrement=0;
// 				for(var property in record)
// 				{
// 					var addCol=addRow.insertCell(cellIncrement++);
// 					addCol.innerHTML=record[property];
//                 }
//             }
//             else {
//                 cell[1].innerHTML=document.getElementById("studentName").value;
//                 cell[2].innerHTML=document.getElementById("className").value;
//                 cell=undefined;
//             }
// 		 }

// 		function deleteStudentRecord(deleteBtn){
// 			var index=deleteBtn.parentNode.parentNode.parentNode.rowIndex;
//             document.getElementById("table").deleteRow(index);
// 		}

// 		function updateStudentRecord(updateBtn){
//             var index=updateBtn.parentNode.parentNode.parentNode.rowIndex;
//             cell=document.getElementById('table').rows[index].cells;
//             document.getElementById("studentName").value=cell[1].innerHTML;
//             document.getElementById("className").value=cell[2].innerHTML;
//         }
//     </script>
// </body>
// </html>