
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { FacebookAuthProvider, getAuth, signInWithPopup, GoogleAuthProvider } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.7.1/firebase-auth.min.js";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCTFeohcPrcEFW92RcKonycWBeBbInrt8k",
//   authDomain: "test345-532b1.firebaseapp.com",
//   projectId: "test345-532b1",
//   storageBucket: "test345-532b1.appspot.com",
//   messagingSenderId: "811647038548",
//   appId: "1:811647038548:web:00195dd75fa560dae9e9c1"
// };
//第三方登入--google
const firebaseConfig = {
  apiKey: "AIzaSyBTonKBa6VwTiIxqv-Iz2P-nwLwT3yBMbA",
  authDomain: "test777-696e9.firebaseapp.com",
  projectId: "test777-696e9",
  storageBucket: "test777-696e9.appspot.com",
  messagingSenderId: "1065945733708",
  appId: "1:1065945733708:web:f1af3f4e907c00e9a8b2e9"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

auth.useDeviceLanguage();

const googleLogin = document.getElementById("test");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
})

//第三方登入Line

// const linelog = document.getElementById("line");
// linelog.addEventListener("click")
$('#line').on('click', function (e) {
  console.log("issss");
  let client_id = '2002545122';
  let redirect_uri = 'http://127.0.0.1:5500/login.html';
  let link = 'https://access.line.me/oauth2/v2.1/authorize?';
  link += 'response_type=code';
  link += '&client_id=' + client_id;
  link += '&redirect_uri=' + redirect_uri;
  link += '&state=login';
  link += '&scope=openid%20profile';
  window.location.href = link;

});

//第三方登入--facebook




const fbLogin = document.getElementById("fb");


fbLogin.addEventListener("click", function () {
  const auth = getAuth();
  const providerFb = new FacebookAuthProvider();

  signInWithPopup(auth, providerFb)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });


})




//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyBZ04tXh2TgZuRwtIShsUw-MVMzyoqGOHM",
//     authDomain: "big-project-test-409314.firebaseapp.com",
//     projectId: "big-project-test-409314",
//     storageBucket: "big-project-test-409314.appspot.com",
//     messagingSenderId: "135316896854",
//     appId: "1:135316896854:web:87e370d6352c9789930ff7",
//     measurementId: "G-18130YSZV3"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


{/* <script type="module">
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";



const firebaseConfig = {
    apiKey: "AIzaSyC6KOo4lTCkgLKhCsJDYOV_TqnQ0shFn1k",
    authDomain: "test-5d1b7.firebaseapp.com",
    projectId: "test-5d1b7",
    storageBucket: "test-5d1b7.appspot.com",
    messagingSenderId: "521081910720",
    appId: "1:521081910720:web:d3525ea4019f426acf8425"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.useDeviceLanguage();
const googleLogin = document.getElementById("google");

googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
})
</script> */}