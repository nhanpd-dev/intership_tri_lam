import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useGlobalStore } from "./hooks/useGlobal"
import AppRoutes from "./routes";

function App() {
  const { testSaga } = useGlobalStore();
  useEffect(() => {
    testSaga();
  }, []);
  return <AppRoutes />
}

export default App;
