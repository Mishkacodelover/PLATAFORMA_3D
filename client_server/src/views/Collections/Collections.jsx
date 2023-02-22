import CollectionView from "./CollectionView";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Collections() {
  const { authorization } = useAuthContext();
  const [collection, setCollection] = useState(null);
  const [createCollection, setCreateCollection] = useState(false);
  const [openEditCollection, setOpenEditCollection] = useState(false);

  const handleOpenEditCollection = () => setOpenEditCollection(true);
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

  return (
    <CollectionView
      collection={collection}
      createCollection={createCollection}
      handleCollection={handleCollection}
      openEditCollection={openEditCollection}
      handleCloseEditCollection={handleCloseEditCollection}
      handleOpenEditCollection={handleOpenEditCollection}
    />
  );
}
