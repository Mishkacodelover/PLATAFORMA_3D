import CreateCollectionView from "./CreateCollectionView";

export default function CreateCollection({
  addCollectionData,
  addCollection,
  handleCollection,
  setAddCollection,
}) {
  return (
    <CreateCollectionView
      addCollectionData={addCollectionData}
      addCollection={addCollection}
      handleCollection={handleCollection}
      setAddCollection={setAddCollection}
    />
  );
}
