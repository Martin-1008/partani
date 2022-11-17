// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYC2gQqKE4COxkqb1dLmYnr6T_dSD1AKY",
  authDomain: "partani-4069a.firebaseapp.com",
  projectId: "partani-4069a",
  storageBucket: "partani-4069a.appspot.com",
  messagingSenderId: "441710178384",
  appId: "1:441710178384:web:8d3bc2d72ad8700e916155",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);

export { auth, fireStore };

export const userSignIn = async (email, password) => {
  console.log("testing");
  const userSigned = await signInWithEmailAndPassword(auth, email, password);
  console.log(userSigned.user.uid);
  return getData(userSigned.user.uid);
};

export const userRegister = async (
  nama,
  email,
  password,
  nomorTelepon,
  tanggalLahir,
  jenisKelamin,
  provinsi,
  kota,
  kecamatan,
  alamatLengkap,
  kodePos
) => {
  console.log(email, password);
  const userSignUp = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return await AddDatabase(
    userSignUp.user.uid,
    nama,
    email,
    nomorTelepon,
    tanggalLahir,
    jenisKelamin,
    provinsi,
    kota,
    kecamatan,
    alamatLengkap,
    kodePos
  );
};

export const AddDatabase = async (
  uid,
  nama,
  email,
  nomorTelepon,
  tanggalLahir,
  jenisKelamin,
  provinsi,
  kota,
  kecamatan,
  alamatLengkap,
  kodePos
) => {
  try {
    const tes = doc(fireStore, "users", uid);
    const tesData = {
      name: nama,
      email: email,
      phoneNumber: nomorTelepon,
      birthDate: tanggalLahir,
      gender: jenisKelamin,
      province: provinsi,
      city: kota,
      district: kecamatan,
      fullAddress: alamatLengkap,
      postCode: kodePos,
    };
    await setDoc(tes, tesData);
    return getData(uid);
  } catch (error) {
    const user = auth.currentUser;
    deleteUser(user);
    console.log(error);
    return "failed";
  }
};

export const getData = async (uid) => {
  try {
    const docRef = await getDoc(doc(fireStore, "users", uid));
    const userRef = docRef.data();
    return { userRef, uid: uid };
  } catch (error) {
    return "NotFind";
  }
};

export const updateData = async (
  nama,
  nomorTelepon,
  tanggalLahir,
  jenisKelamin,
  uid
) => {
  const tes = doc(fireStore, "users", uid);

  const tesData = {
    name: nama,
    phoneNumber: nomorTelepon,
    birthDate: tanggalLahir,
    gender: jenisKelamin,
  };
  await updateDoc(tes, tesData);
  return getData(uid);
};
