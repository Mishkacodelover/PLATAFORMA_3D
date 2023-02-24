import CreateCollectionView from "./CreateCollectionView";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import dayjs from "dayjs";

const obj = {
  collectionName: "",
  collectionType: "",
  initialDate: dayjs("DD/MM/YYYY"),
  finishDate: dayjs("DD/MM/YYYY"),
};

export default function CreateCollection({ collection, setCollection }) {
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
    const collectionAdd = {
      ...addCollection,
      initialDate: dayjs(addCollection.initialDate).format("YYYY/MM/DD"),
      finishDate: dayjs(addCollection.finishDate).format("YYYY/MM/DD"),
      userCreated: userId.userCreated,
    };
    const response = await fetch(`http://localhost:8000/collections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collectionAdd),
    });
    try {
      if (response.ok) {
        setAddCollection(obj);
        const newCollection = await response.json();
        if (newCollection) {
          const newList = [...collection];
          newList.push(newCollection);
          setCollection(newList);
        }
      } else {
        alert("El nombre de la colección ya existe");
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
