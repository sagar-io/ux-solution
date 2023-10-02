import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid"

const firebaseConfig = {
  apiKey: "AIzaSyAxUEVNI2iR5h8m_qpYd34c8owQ49th4Gc",
  authDomain: "ecommerce-webapp-io.firebaseapp.com",
  projectId: "ecommerce-webapp-io",
  storageBucket: "ecommerce-webapp-io.appspot.com",
  messagingSenderId: "139035575001",
  appId: "1:139035575001:web:0fff68b7662508c176b4c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app)

class Firebase {
  auth: any;
  constructor() {
    this.auth = auth
  }
  signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      return result.user
    } catch (err) {
      console.log(`Error while signIn with Google: ${err}`)
    }
  }

  signOut = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.log(`Error while signout: ${err}`)
    }
  }

  addCartDataToDB = async (id: string, data: any) => {
    const noid: any = nanoid()
    const dbData = {
      [noid]: data
    }
    try {
      await updateDoc(doc(db, "cartItems", id), dbData)
    } catch (err) {
      console.log(`Error while uploading cart data: ${err}`)
    }
  }
  readCartDataFromDB = async (id: string) => {
    try {
      const snap = await getDoc(doc(db, "cartItems", id))
      return snap.data();
    } catch (err) {
      console.log(`Error while loading cart data: ${err}`)
    }
  }
}

export default Firebase