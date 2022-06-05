import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import RootPage from "pages";
import Projects from "pages/projects";
import Skills from "pages/skills";
import Experience from "pages/experiences";
import ToDoList from "pages/projects/todolist";
import SuitGame from "pages/projects/suitgame";
import TicTacToe from "pages/projects/tictactoe";
import MusicPlayer from "pages/projects/musicplayer";

const AppRoutes: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<RootPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />

      {/* Projects */}
      <Route path="/projects/todolist" element={<ToDoList />} />
      <Route path="/projects/suitgame" element={<SuitGame />} />
      <Route path="/projects/tictactoe" element={<TicTacToe />} />
      <Route path="/projects/musicplayer" element={<MusicPlayer />} />
    </Routes>
  );
};

export default AppRoutes;
