import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDEnxYSs-FkZyIi3aw9qkP4pVgzP_3bFK4',
  authDomain: 'pops-worldwide-31f68.firebaseapp.com',
  databaseURL: 'https://pops-worldwide-31f68.firebaseio.com',
  projectId: 'pops-worldwide-31f68',
  storageBucket: 'pops-worldwide-31f68.appspot.com',
  messagingSenderId: '949600745389',
  appId: '1:949600745389:web:f63da4de191d01fafcd324'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase.firestore()
