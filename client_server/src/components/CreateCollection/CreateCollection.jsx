import CreateCollectionView from "./CreateCollectionView";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import dayjs from "dayjs";

const obj = {
  collectionName: "",
  collectionType: "",
  initialDate: dayjs("2022-04-07"),
  finishDate: dayjs("2022-04-07"),
};

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
    const collection = {
      ...addCollection,
      initialDate: dayjs(addCollection.initalDate).format("YYYY/MM/DD"),
      finishDate: dayjs(addCollection.finishDate).format("YYYY/MM/DD"),
      userCreated: userId.userCreated,
    };
    const response = await fetch(`http://localhost:8000/collections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collection),
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
      setAddCollection={setAddCollection}
    />
  );
}
