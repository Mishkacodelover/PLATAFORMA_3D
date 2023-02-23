import CollectionView from "./CollectionView";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Collections() {
  const { authorization } = useAuthContext();
  const [collection, setCollection] = useState(null);
  const [createCollection, setCreateCollection] = useState(false);
  const [openEditCollection, setOpenEditCollection] = useState(false);
  const [value, setValue] = useState({ isDelete: false });

  const handleOpenEditCollection = function () {
    setOpenEditCollection(true);
  };
  const handleCloseEditCollection = () => setOpenEditCollection(false);

  const handleCollection = function () {
    if (createCollection === false) {
      setCreateCollection(true);
    } else if (createCollection === true) {
      setCreateCollection(false);
    }
  };

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

  async function deleteCollection(id) {
    const response = await fetch(`http://localhost:8000/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    try {
      if (response.ok) {
        console.log(response);
        // handleClose();

        // const editList = await response.json();
        // if (editList) {
        //   setAllUser(editList);
        // }
        // setAllUser(null);
      } else {
        console.log("error al eliminar la colección");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CollectionView
      collection={collection}
      setCollection={setCollection}
      createCollection={createCollection}
      handleCollection={handleCollection}
      openEditCollection={openEditCollection}
      handleCloseEditCollection={handleCloseEditCollection}
      handleOpenEditCollection={handleOpenEditCollection}
    />
  );
}
