// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  Timestamp,
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
    console.log(userRef.birthDate);
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

export const addTransaction = async (amount, productId, uid) => {
  try {
    const tes = doc(fireStore, "transaction", uid);
    const tesData = {
      transactions: {
        transactionAmount: amount,
        transactionDate: new Date(),
        transactionProductId: productId,
      },
    };
    await setDoc(tes, tesData);
    console.log("success");
    return getTransactionData(uid);
  } catch (error) {
    console.log(error);
    return "failed";
  }
};

export const updateTransaction = async (amount, productId, uid) => {
  try {
    const tes = doc(fireStore, "transaction", uid);
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const tesData = {
      transactions: {
        transactionAmount: amount,
        transactionDate: new Date().toDateString(),
        transactionProductId: productId,
      },
    };
    await updateDoc(tes, tesData);
    console.log("success");
    return getTransactionData(uid);
  } catch (error) {
    console.log(error);
    return "failed";
  }
};

export const getTransactionData = async (uid) => {
  try {
    const docRef = await getDoc(doc(fireStore, "transaction", uid));
    return docRef.data();
    // const dummy = {
    //   transactionAmount: +2,
    //   transactionDate: new Date(),
    //   transactionProductId: "a5",
    // };
    // console.log(
    //   transactionRef,
    //   transactionRef.transactions.transactionProductId
    // );
    // return {
    //   transactionRef,
    //   productId: transactionRef.transactions.transactionProductId,
    // };
  } catch (error) {
    console.log("eror");
    return "NotFind";
  }
};

// export const updateTransaction = async (uid) => {
//   try {
//     const tes = doc(fireStore, "transaction", uid);
//     const tesData = {
//       regions: arrayUnion("jakartass"),
//     };
//     await updateDoc(tes, tesData);
//     console.log("success");
//     return getTransactionData(uid);
//   } catch (error) {
//     console.log(error);
//     return "failed";
//   }
// };
