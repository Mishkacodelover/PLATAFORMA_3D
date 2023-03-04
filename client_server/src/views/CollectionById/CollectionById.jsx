import CollectionByIdView from "./CollectionByIdView";
import { useState, useEffect } from "react";

export default function CollectionById() {
  const [collectionId, setCollectionId] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/falsePiece/collection/${collectionId.collectionId}`
        );
        const data = await response.json();

        setCollectionId(data);
      }
      fetchData();
    },
    [collectionId]
  );
  return (
    <>
      <CollectionByIdView collectionId={collectionId} />
    </>
  );
}
