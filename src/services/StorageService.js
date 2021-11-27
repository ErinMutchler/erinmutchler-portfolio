import { ref, getDownloadURL } from "firebase/storage";

export default class StorageService {
  constructor(storageRef) {
    this.storageRef = storageRef;
  }

  getFileURL(path) {
    return getDownloadURL(ref(this.storageRef, path));
  }
}
