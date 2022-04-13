import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoShhkhpkKDq9Ce33rtK1etdzV6mFkLSI",
  authDomain: "url-shortener-7b83e.firebaseapp.com",
  projectId: "url-shortener-7b83e",
  storageBucket: "url-shortener-7b83e.appspot.com",
  messagingSenderId: "953393313541",
  appId: "1:953393313541:web:95675f0b2a25fecda9296c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
