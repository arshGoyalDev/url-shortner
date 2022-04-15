import { auth } from "./";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const authGoogle = async (type) => {
  const provider = new GoogleAuthProvider();
  try {
    const user = await signInWithPopup(auth, provider);

    if (type === 'createUser') {
      return user.user;
    }

    // console.log(user);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { authGoogle };
