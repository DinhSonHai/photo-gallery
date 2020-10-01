import { useState, useEffect } from 'react';

import {
  projectFirestore,
  projectStorage,
  timestamp,
} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name); //create reference to a file inside default firebase storage
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ name: file.name, url, createdAt });
        setUrl(url);
      }
    ); //put file to reference
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
