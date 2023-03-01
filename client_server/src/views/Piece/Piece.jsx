import PieceView from "./PieceView";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const falsePiece = {
  size: "",
  color: "",
  fabric: "",
  clotheType: "",
  code: "",
};

export default function Piece() {
  const [resource, setResource] = useState(null);
  const [pattern, setPattern] = useState(null);
  const [addPiece, setAddPiece] = useState(falsePiece);
  const [collection, setCollection] = useState(null);
  const [addPattern, setAddPatern] = useState(null);
  const [addResource, setAddResource] = useState(null);
  const [addCollection, setAddCollection] = useState(null);

  const { authorization } = useAuthContext();

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/images/all-images/${authorization.id}`
        );
        const data = await response.json();
        setResource(data);
      }
      fetchData();
    },
    [authorization.id]
  );

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/pattern/all-patterns/${authorization.id}`
        );
        const data = await response.json();
        setPattern(data);
      }
      fetchData();
    },
    [authorization.id]
  );

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

  function handlePiece(event) {
    setAddPiece({
      ...addPiece,
      [event.target.name]: event.target.value,
    });
  }

  function patternAdded(id) {
    const patt = pattern.find((item) => item.id === id);
    setAddPatern(patt);
  }

  function resourceAdded(id) {
    const res = resource.find((item) => item.id === id);
    setAddResource(res);
  }

  function collectionAdded(id) {
    const col = collection.find((item) => item.id === id);
    setAddCollection(col);
  }

  async function addFalsePiece(
    event,

    addPiece
  ) {
    event.preventDefault();

    const newPiece = {
      ...addPiece,
      collection: addCollection,
      resource: addResource,
      pattern: addPattern,
      userCreated: authorization.id,
    };

    const response = await fetch(`http://localhost:8000/falsePiece`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPiece),
    });
    try {
      if (response.ok) {
        setAddPiece(newPiece);
      } else {
        console.log("error añadir pieza");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PieceView
      addPiece={addPiece}
      addFalsePiece={addFalsePiece}
      collection={collection}
      handlePiece={handlePiece}
      pattern={pattern}
      resource={resource}
      patternAdded={patternAdded}
      resourceAdded={resourceAdded}
      collectionAdded={collectionAdded}
    />
  );
}
