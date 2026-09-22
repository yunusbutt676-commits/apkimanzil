import { Suspense } from "react";
import PropertiesClient from "./PropertiesClient";

export default function PropertiesPage() {
  return (
    <Suspense fallback={null}>
      <PropertiesClient />
    </Suspense>
  );
}