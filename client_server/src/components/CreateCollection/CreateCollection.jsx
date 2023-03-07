import CreateCollectionView from "./CreateCollectionView";

export default function CreateCollection({
  addCollectionData,
  addCollection,
  handleCollection,
  setAddCollection,
  handleToggle,
}) {
  return (
    <CreateCollectionView
      addCollectionData={addCollectionData}
      addCollection={addCollection}
      handleCollection={handleCollection}
      setAddCollection={setAddCollection}
      handleToggle={handleToggle}
    />
  );
}
