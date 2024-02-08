import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getCertifInfo = async () => {
  const certifInfo = await getDocs(collection(db, "certifInfo"));

  let data = [];
  certifInfo.forEach((doc) => {
    return data.push(doc.data());
  });

  return data;
};
export const getProjects = async () => {
  const projects = await getDocs(collection(db, "projects"));

  let data = [];
  projects.forEach((doc) => {
    return data.push(doc.data());
  });

  return data;
};
