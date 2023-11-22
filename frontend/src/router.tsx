import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { DownloadPage } from "./pages/DownloadPage";

export enum ERoutes {
  HOME = "/",
  DOWNLOAD = "download",
}

export const router = createBrowserRouter([
  {
    path: ERoutes.HOME,
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ERoutes.DOWNLOAD,
        element: <DownloadPage />,
      },
    ],
  },
]);
