var firebaseConfig = {
    apiKey: "AIzaSyB2UQGtYE4v-TcdKNGUD40ct8De9ty5of8",
    authDomain: "project1-e23a1.firebaseapp.com",
    projectId: "project1-e23a1",
    storageBucket: "project1-e23a1.appspot.com",
    messagingSenderId: "505790100248",
    appId: "1:505790100248:web:7c112f1f73856b5534246d",
    measurementId: "G-4BLDY50FVB"
  };
  firebase.initializeApp(firebaseConfig);
  
  var dbRef=firebase.database().ref().child("students")
  function insertData() {
    var studname=document.getElementById("studname").value;
    var rollno=document.getElementById("rollno").value;
    dbRef.child(rollno).set(
        {
            studname:studname,
            rollno:rollno
        })
        console.log("Data Inserted");
  }
  function deleteData()
  {
    var id=window.prompt("Enter roll number to be deleted");
    dbRef.child(id).remove();
    console.log("Data Deleted");
  }
  function updateData()
  {
    var id=document.getElementById("rollno").value;
    var newname=document.getElementById("studname").value;
    dbRef.child(id).update({studname:newname})
    console.log("Data Updated");
  }
  function loadData()
  {
    console.log("Reading Data");
    var table=document.createElement("TABLE");
    table.border="2"
    row=table.insertRow(-1);
    cellH1=row.insertCell(-1);
    cellH2=row.insertCell(-1);
    cellH1.innerHTML="<b>NAME<b>"
    cellH2.innerHTML="<b>ROLL NUMBER<b>"
    dbRef.on("value",(snap)=>
    {
      snap.forEach((data)=>
      {
        row=table.insertRow(-1);
        c1=row.insertCell(-1);
        c2=row.insertCell(-1);
        c1.innerHTML=data.val().studname;
        c2.innerHTML=data.val().rollno;
      })
    })
    var div=document.getElementById("table");
    div.append(table);
  }