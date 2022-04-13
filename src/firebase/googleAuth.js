import { auth } from "./";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const authGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const user = await signInWithPopup(auth, provider);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { authGoogle };
