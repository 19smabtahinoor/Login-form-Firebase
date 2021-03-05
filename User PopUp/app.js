

  var firebaseConfig = {
    apiKey: "AIzaSyDG_nglMAL3h9ahMGW38qVcdMv5hQ8OBYE",
    authDomain: "login-form-432c2.firebaseapp.com",
    projectId: "login-form-432c2",
    storageBucket: "login-form-432c2.appspot.com",
    messagingSenderId: "788349172211",
    appId: "1:788349172211:web:cb395802f947f9979f7a86"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//upload profile picture
const img = document.querySelector('#userphoto');
const file = document.querySelector('#fileupload');


file.addEventListener('change', function(){
    const choosedFile = this.files[0];
    if (choosedFile) {
        const reader = new FileReader(); 
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
});


//pop up
const popUp = document.querySelector(".pop-up-text");
const backDrop = document.querySelector(".back-drop");
const okBtn = document.querySelector(".ok-btn");
const signUp = document.querySelector(".submitbtn");

signUp.addEventListener("click",()=>{
    popUp.classList.add("activePopUp");
    backDrop.classList.add("active");
})
// okBtn.addEventListener("click",()=>{
//     popUp.classList.remove("activePopUp");
//     backDrop.classList.remove("active");
// })


//user data
var userName,userEmail,userPhoneNumber,userPassword;
const userData = () =>{
     userName = document.querySelector(".user-name").value;
     userEmail =document.querySelector(".user-email").value;
     userPhoneNumber = document.querySelector(".user-number").value;
     userPassword = document.querySelector(".user-password").value;
}

okBtn.addEventListener("click",()=>{
    popUp.classList.remove("activePopUp");
    backDrop.classList.remove("active");
    userData();
    firebase.database().ref('userData/'+userName).set({
        UserName:userName,
        UserEmail:userEmail,
        UserPhoneNumber:userPhoneNumber,
        UserPassword:userPassword
    })

})