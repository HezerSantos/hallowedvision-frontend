import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
import routes from "./routes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoadingScreen } from "./App.js";
import config from "../config.json";
import { Boot } from "./services/apiService.js";
import { HelmetProvider } from "react-helmet-async"; //This for changing html meta

const typedConfig = config as Boot;

const router = createBrowserRouter(routes);

const BaseApp = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Suspense fallback={<LoadingScreen />}>
          <RouterProvider router={router} />
        </Suspense>
      </HelmetProvider>
    </Provider>
  );
};
createRoot(document.getElementById("root")!).render(
  <>
    {typedConfig.strictMode ? (
      <StrictMode>
        <BaseApp />
      </StrictMode>
    ) : (
      <BaseApp />
    )}
  </>,
);
