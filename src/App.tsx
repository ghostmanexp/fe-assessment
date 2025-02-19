import { useEffect } from "react";
import AppRoutes from "./routes";
import { useSavedProperties } from "./store/useSavedProperties";


function App() {
  const { savedProperties } = useSavedProperties();

  useEffect(() => {
    document.title = savedProperties.length > 0
      ? `Software Mind Real Estate (${savedProperties.length} saved)`
      : "Software Mind Real Estate";
  }, [savedProperties.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      <AppRoutes />
    </div>
  );
}

export default App;