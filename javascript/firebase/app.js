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

  const dbRef = firebase.database().ref();
  const messageRef = dbRef.child('Messages');


  const messageListUI = document.getElementById("messageList");
  messageRef.on("child_added", snap => {
      let user = snap.val();
      let $li = document.createElement("li");
      $li.innerHTML = user.name;
      $li.setAttribute("child-key", snap.key);
      $li.addEventListener("click", userClicked) messageListUI.append($li);
  });



      function userClicked(e) {
        var userID = e.target.getAttribute("child-key");
        const userRef = dbRef.child('Messages/' + userID);
        const userDetailUI = document.getElementById("messageDetail");
        messageDetailUI.innerHTML = ""
        userRef.on("child_added", snap => {
            var $p = document.createElement("p");
            $p.innerHTML = snap.key + " - " + snap.val() messageDetailUI.append($p);
        });
    }

