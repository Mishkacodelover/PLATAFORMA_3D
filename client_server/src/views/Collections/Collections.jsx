import CollectionView from "./CollectionView";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import dayjs from "dayjs";

const obj = {
  collectionName: "",
  collectionType: "",
  initialDate: dayjs("01/03/2023"),
  finishDate: dayjs("01/03/2023"),
};

const objUse = {
  uses: "",
  description: "",
};

export default function Collections() {
  const { authorization } = useAuthContext();
  const [collection, setCollection] = useState(null);
  const [editCollection, setEditCollection] = useState(obj);
  const [idCollection, setIdCollection] = useState(null);
  const [createCollection, setCreateCollection] = useState(false);
  const [openEditCollection, setOpenEditCollection] = useState(false);
  const [value] = useState({ isDelete: false });
  const [addCollection, setAddCollection] = useState(obj);
  const [alert, setAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [use, setUse] = useState(objUse);
  const [openCollectionUse, setOpenCollectionUse] = useState();

  const userId = { userCreated: authorization.id };

  const handleOpenEditCollection = function (id) {
    setOpenEditCollection(true);
    setIdCollection(collection.find((item) => item.id === id));
  };
  const handleCloseEditCollection = () => setOpenEditCollection(false);

  const handleCollectionOpen = function () {
    if (createCollection === false) {
      setCreateCollection(true);
    } else if (createCollection === true) {
      setCreateCollection(false);
    }
  };

  const handleOpenCollectionUse = function (id) {
    setOpenCollectionUse(true);
    setIdCollection(collection.find((item) => item.id === id));
  };

  const handleCloseCollectionUse = () => setOpenCollectionUse(false);

  function handleUse(event) {
    setUse({
      ...use,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/collections/all-collections/${authorization.id}`
        );
        const data = await response.json();

        setCollection(data);
      }
      fetchData();
    },
    [authorization.id]
  );

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
        setAlert(true);
        setCreateCollection(false);
      } else {
        alert("El nombre de la colección ya existe");
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function collectionEdited(event) {
    setEditCollection({
      ...editCollection,
      [event.target.name]: event.target.value,
    });
  }

  async function updateCollection(event, editCollection) {
    event.preventDefault();
    const newCollection = {
      ...editCollection,
      initialDate: dayjs(editCollection.initialDate).format("YYYY/MM/DD"),
      finishDate: dayjs(editCollection.finishDate).format("YYYY/MM/DD"),
    };

    const response = await fetch(
      `http://localhost:8000/collections/${idCollection.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCollection),
      }
    );
    try {
      if (response.ok) {
        setEditCollection(obj);
        setOpenEditCollection(false);
        console.log(response);
        const editList = await response.json();
        if (editList) {
          setCollection(editList);
          const userIndexToUpdate = collection.findIndex(
            (userToEdit) => userToEdit.id === editCollection.id
          );
          const newUserList = [...collection];
          newUserList[userIndexToUpdate] = editList;
          setCollection(newUserList);
        }
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCollection(id) {
    const response = await fetch(`http://localhost:8000/collections/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    try {
      if (response === 200) {
        console.log(response);
        setDeleteAlert(true);

        const editList = await response.json();
        if (editList) {
          setCollection(editList);
        }
      } else {
        console.log("error al eliminar la colección");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addCollectionUse(event, use) {
    event.preventDefault();
    const useAdd = {
      ...use,
      collection: idCollection.id,
    };
    const response = await fetch(`http://localhost:8000/collectionUse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(useAdd),
    });
    try {
      if (response.ok) {
        setUse(obj);
        handleCloseCollectionUse();
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(
  //   function () {
  //     async function fetchData() {
  //       const response = await fetch(
  //         `http://localhost:8000/collectionUse/collectionName/${collection.id}`
  //       );
  //       const data = await response.json();

  //       setCollectionUse(data);
  //     }
  //     fetchData();
  //   },
  //   [collection.id]
  // );

  return (
    <CollectionView
      addCollection={addCollection}
      addCollectionData={addCollectionData}
      alert={alert}
      collection={collection}
      collectionEdited={collectionEdited}
      createCollection={createCollection}
      deleteCollection={deleteCollection}
      deleteAlert={deleteAlert}
      editCollection={editCollection}
      handleCollection={handleCollection}
      handleCollectionOpen={handleCollectionOpen}
      handleCloseEditCollection={handleCloseEditCollection}
      handleOpenEditCollection={handleOpenEditCollection}
      openEditCollection={openEditCollection}
      setAddCollection={setAddCollection}
      setEditCollection={setEditCollection}
      setAlert={setAlert}
      updateCollection={updateCollection}
      use={use}
      handleUse={handleUse}
      openCollectionUse={openCollectionUse}
      handleCloseCollectionUse={handleCloseCollectionUse}
      handleOpenCollectionUse={handleOpenCollectionUse}
      addCollectionUse={addCollectionUse}
    />
  );
}
