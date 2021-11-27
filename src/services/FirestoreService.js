import { getDocs, collection, orderBy, query } from "firebase/firestore";

export default class FirestoreService {
  constructor(firestore) {
    this.firestore = firestore;
    this.unsubscribe = {};
  }

  async getDocsInCollectionInOrder(collectionName, order) {
    let docs = [];
    const querySnapshot = await getDocs(
      query(collection(this.firestore, collectionName), orderBy(order))
    );
    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    return docs;
  }
}
