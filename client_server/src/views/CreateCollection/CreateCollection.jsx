import CreateCollectionView from "./CreateCollectionView";

export default function CreateCollection() {
  const typeCollection = [
    { value: "Hombre", label: "Hombre" },
    { value: "Mujer", label: "Mujer" },
  ];
  const collectionUse = [
    { value: "Metaverso", label: "Metaverso" },
    { value: "Tienda", label: "Tienda" },
    { value: "Fábrica", label: "Fábrica" },
    { value: "Metaverso y Tienda", label: "Metaverso y Tienda" },
    { value: "Metaverso y Fábrica", label: "Metaverso y Fábrica" },
    { value: "Tienda y Fábrica", label: "Tienda y Fábrica" },
    { value: "Todos los usos", label: "Todos los usos" },
  ];

  return (
    <CreateCollectionView
      typeCollection={typeCollection}
      collectionUse={collectionUse}
    />
  );
}
