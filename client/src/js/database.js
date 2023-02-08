import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {;
console.log('Post to the database');
const dbJates = await openDB('jate', 1);
const tx = dbJates.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.put({id: 1, value: content});
const result = await request;
console.log('By god you did it, data saved to the database ', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{
console.log('You better get this from the database');
const dbJates = await openDB('jate', 1);
const tx = dbJates.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const request = store.getAll();
const result = await request;
console.log('You got it from the database ', result);
return result;
};
initdb();
