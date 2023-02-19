import GraficResourcesView from "./GraficResourecesView";
import { useState, useEffect } from "react";

export default function GraficResources() {
  const [resource, setResource] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/images/all-images`);
      const data = await response.json();
      setResource(data);
    }
    fetchData();
  }, []);
  return <GraficResourcesView resource={resource} />;
}
