import CreateCollectionView from "./CreateCollectionView";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const obj = [
  {
    collectionName: "",
    collectionType: "",
    // initialDate: "",
    // finishDate: "",
  },
];

export default function CreateCollection() {
  const [addCollection, setAddCollection] = useState(obj);

  const { authorization } = useAuthContext();
  const userId = { userCreated: authorization.id };

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
      body: JSON.stringify(addCollection, userId),
    });
    try {
      if (response.ok) {
        setAddCollection(obj);
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
