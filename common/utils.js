import firestore from '../config/firebase'

export class LocalStorage {
  static get (key) {
    return window.localStorage.getItem(key)
  }

  static set (key, item) {
    window.localStorage.setItem(key, item)
  }
}

export class Firestore {
  static async fetchData (collection) {
    const snapshot = await firestore.collection(collection).get()

    return snapshot.docs.map(doc => doc.data())
  }

  static addData (data, collection) {
    return firestore.collection(collection).doc(data.id).set(data)
  }

  static updateData (data, collection) {
    return firestore.collection(collection).doc(data.id).update(data)
  }
}
