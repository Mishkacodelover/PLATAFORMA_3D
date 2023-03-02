import FinalPieceView from "./FinalPieceView";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function FinalPiece() {
  const [piece, setPiece] = useState();
  const { authorization } = useAuthContext();

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/falsePiece/piece-img/${authorization.id}`
        );
        const data = await response.json();
        setPiece(data);
      }
      fetchData();
    },
    [authorization.id]
  );

  return <FinalPieceView piece={piece} />;
}
