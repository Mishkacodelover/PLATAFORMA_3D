import EditCollectionView from "./EditCollectionView";

export default function EditCollection({
  editCollection,
  collectionEdited,
  setEditCollection,
  updateCollection,
}) {
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
