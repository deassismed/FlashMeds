import { useState } from "react";
import { AdminPage } from "./pages/AdminPage";
import { HomePage } from "./pages/HomePage";
import { StudyPage } from "./pages/StudyPage";

type AppPage = "home" | "study" | "admin";

export default function App() {
  const [page, setPage] = useState<AppPage>("study");

  if (page === "study") {
    return <StudyPage onBack={() => setPage("home")} />;
  }

  if (page === "admin") {
    return <AdminPage onBack={() => setPage("home")} />;
  }

  return <HomePage onNavigate={setPage} />;
}
