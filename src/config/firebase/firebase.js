import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: 'AIzaSyAgP2qoFrGlQ4iXMfeOyycCHUQXLW92QjI',
  authDomain: 'tikiapp-44c95.firebaseapp.com',
  projectId: 'tikiapp-44c95',
  storageBucket: 'tikiapp-44c95.appspot.com',
  messagingSenderId: '956483405181',
  appId: '1:956483405181:web:255ec763de2a54bb2ff814',
  measurementId: 'G-W65HM3JG6X',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const upload = async (file) => {
  const fileRef = ref(storage, uuidv4() + '.png');
  await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);
  return photoURL;
};
