// Highly sensitive infomation here
// don't share

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhwHVg5y1gBYan0MHX_nr-KNMrj536mOA",
  authDomain: "youthopia2023.firebaseapp.com",
  projectId: "youthopia2023",
  storageBucket: "youthopia2023.appspot.com",
  messagingSenderId: "109541949397",
  appId: "1:109541949397:web:c42407a9f18dbeed37c75c",
  measurementId: "G-MMQKQ1D3ES",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app, "gs://youthopia2023.appspot.com");
export default storage;
