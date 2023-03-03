import PieceView from "./PieceView";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const falsePiece = {
  size: "",
  color: "",
  fabric: "",
  clotheType: "",
  clotheName: "",
};

export default function Piece() {
  const [resource, setResource] = useState(null);
  const [pattern, setPattern] = useState(null);
  const [addPiece, setAddPiece] = useState(falsePiece);
  const [collection, setCollection] = useState(null);
  const [avatar, setAvatar] = useState();
  const [patternChecked, setPatternChecked] = useState(null);
  const [resourceChecked, setResourceChecked] = useState(null);
  const [collectionChecked, setCollectionChecked] = useState(null);
  const [alert, setAlert] = useState(false);
  const { authorization } = useAuthContext();

  const handlePattern = (value) => () => {
    setPatternChecked(value);
  };

  const handleResource = (value) => () => {
    setResourceChecked(value);
  };

  const handleCollection = (value) => () => {
    setCollectionChecked(value);
  };

  function handlePiece(event) {
    setAddPiece({
      ...addPiece,
      [event.target.name]: event.target.value,
    });
  }

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

  async function addFalsePiece(
    event,
    addPiece,
    collectionChecked,
    patternChecked,
    resourceChecked
  ) {
    event.preventDefault();

    const newPiece = {
      ...addPiece,
      collection: collectionChecked,
      resource: resourceChecked,
      pattern: patternChecked,
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
        setAddPiece(falsePiece);
        setAlert(true);
        setTimeout(() => setAlert(false), 2000);
      } else {
        console.log("error añadir pieza");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/images/avatar/${authorization.id}`
        );
        const data = await response.json();
        setAvatar(data);
      }
      fetchData();
    },
    [authorization.id]
  );

  return (
    <PieceView
      alert={alert}
      addPiece={addPiece}
      addFalsePiece={addFalsePiece}
      avatar={avatar}
      collection={collection}
      handlePiece={handlePiece}
      pattern={pattern}
      resource={resource}
      patternChecked={patternChecked}
      handlePattern={handlePattern}
      resourceChecked={resourceChecked}
      handleResource={handleResource}
      collectionChecked={collectionChecked}
      handleCollection={handleCollection}
    />
  );
}
