import CreateCollectionView from "./CreateCollectionView";
import { useState } from "react";

const obj = [
  {
    collectionName: "",
    collectionType: "",
    initialDate: "",
    finishDate: "",
    userCreated: "",
  },
];

export default function CreateCollection() {
  const [addCollection, setAddCollection] = useState(obj);

  function handleCollection(event) {
    setAddCollection({
      ...addCollection,
      [event.target.name]: event.target.value,
    });
  }

  async function addCollectionData(event, addCollection) {
    event.preventDefault();
    const response = await fetch(`http://localhost:8000/collections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCollection),
    });
    try {
      if (response.ok) {
        setAddCollection(obj);

        // const fiscData = await response.json();
        // if (fiscData) {
        //   setFiscalData(fiscData);
        // }
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CreateCollectionView
      handleCollection={handleCollection}
      addCollection={addCollection}
      addCollectionData={addCollectionData}
    />
  );
}
