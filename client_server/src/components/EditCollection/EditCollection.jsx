import EditCollectionView from "./EditCollectionView";
import { useAuthContext } from "../../contexts/AuthContext";

export default function EditCollection() {
  const { authorization } = useAuthContext();

  async function setCollection(event, values) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:8000/collections/${authorization.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    try {
      if (response.ok) {
        console.log(response);
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <EditCollectionView setCollection={setCollection} />
    </>
  );
}
