import CollectionByIdView from "./CollectionByIdView";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CollectionById() {
  const [collectionId, setCollectionId] = useState(null);

  const { id } = useParams();

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/falsePiece/collection/${id}`
        );
        const data = await response.json();

        setCollectionId(data);
      }
      fetchData();
    },
    [id]
  );
  return (
    <>
      <CollectionByIdView collectionId={collectionId} />
    </>
  );
}
