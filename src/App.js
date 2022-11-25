import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FinishPage from "./pages/Finish/FinishPage";
import TodoListPage from "./pages/TodoList/TodoListPage";
import SprintPlanPage from "./pages/SprintPlan/SprintPlanPage";
import SprintTodoPage from "./pages/SprintTodo/SprintTodoPage";
import SprintIntroPage from "./pages/SprintIntro/SprintIntroPage";
import RetroPage from "./pages/RetroPage/RetroPage";
import Footer from "./components/Footer/Footer";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import BackLayout from "./layouts/BackLayout";

function App() {
    const location = useLocation();

    return (
        <>
            <ProgressBar location={location} />
            <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route element={<BackLayout />}>
                    <Route path="todoList" element={<TodoListPage />} />
                    <Route path="sprintPlan" element={<SprintPlanPage />} />
                    <Route path="sprintTodo" element={<SprintTodoPage />} />
                    <Route path="sprintIntro" element={<SprintIntroPage />} />
                    <Route path="retro" element={<RetroPage />} />
                    <Route path="finish" element={<FinishPage />} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
