import EditCollectionView from "./EditCollectionView";

// import dayjs from "dayjs";
// import { useState } from "react";

// const obj = {
//   collectionName: "",
//   collectionType: "",
//   initialDate: dayjs("2022-04-07"),
//   finishDate: dayjs("2022-04-07"),
// };

export default function EditCollection({
  editCollection,
  collectionEdited,
  setEditCollection,
  updateCollection,
}) {
  // const [editCollection, setEditCollection] = useState(obj);

  // function collectionEdited(event) {
  //   setEditCollection({
  //     ...editCollection,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // async function updateCollection(event) {
  //   event.preventDefault();
  //   const newCollection = {
  //     ...editCollection,
  //     initialDate: dayjs(editCollection.initialDate).format("YYYY/MM/DD"),
  //     finishDate: dayjs(editCollection.finishDate).format("YYYY/MM/DD"),
  //   };

  //   const response = await fetch(`http://localhost:8000/collections/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newCollection),
  //   });
  //   try {
  //     if (response.ok) {
  //       setEditCollection(obj);
  //       handleCloseEditCollection();
  //       console.log(response);
  //       //  const collectionEdited = await response.json();
  //       // if (collectionEdited) {
  //       //   setAllUser(userEdited);
  //       // }
  //     } else {
  //       console.log("error al editar valor");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <EditCollectionView
        editCollection={editCollection}
        collectionEdited={collectionEdited}
        setEditCollection={setEditCollection}
        updateCollection={updateCollection}
      />
    </>
  );
}
