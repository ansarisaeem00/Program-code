var firebaseConfig = {
    apiKey: "AIzaSyAVk_ZGVogzIbzBpIAeVRobBZwL5xrIAys",
    authDomain: "thesak-contactform.firebaseapp.com",
    databaseURL: "https://thesak-contactform.firebaseio.com",
    projectId: "thesak-contactform",
    storageBucket: "thesak-contactform.appspot.com",
    messagingSenderId: "458394659370",
    appId: "1:458394659370:web:46c0f1ea958fe1be28f153",
    measurementId: "G-S0Q6D54SHS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    const addUserBtnUI = document.getElementById("add-user-btn"); 
    addUserBtnUI.addEventListener("click", addUserBtnClicked);


const dbRef = firebase.database().ref();
  const messageRef = dbRef.child('Messages');
const addUserInputsUI = document.getElementsByClassName("user-input");


let newUser = {};

for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
    let key = addUserInputsUI[i].getAttribute('data-key');
    let value = addUserInputsUI[i].value;
    newUser[key] = value;
}

messageRef.push(newUser, function () {
      console.log("data has been inserted");
    })

