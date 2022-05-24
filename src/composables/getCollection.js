import { projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const getCollection = (collection) => {
  // documents and error not global variable because this composables is expected to work on multiple instances
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore.collection(collection)
  .orderBy('createdAt')

  // fire when there are changes
  collectionRef.onSnapshot((snap) => {
    let results = []
    snap.docs.forEach(doc =>{
			// doc.data().createdAt to make sure data exist by not using the local snap
			doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
		})
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch data'
  })

  return {documents, error}
}

export default getCollection