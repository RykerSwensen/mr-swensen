import Home from "./pages/Home";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateQuiz from "./pages/CreateQuiz";
import Configure from "./pages/Configure";
import { useSelector } from "react-redux";
import QuizController from "./pages/QuizController";
import Result from "./components/quizHandler/Result";
import Anlyze from "./pages/Analyze";
import Reports from "./pages/Reports";
import ExamReview from "./pages/ExamReview";
import NotFound from "./pages/NotFound";
 import About from './components/about'
 import Contact from './components/contact'
// // import Layout from './components/layout'
 import Portfolio from './components/portfolio'
 import Dashboard2 from './components/dashboard'
 import Resume from './components/resume'
import './App.scss'
// import "./styles/App.css"



function App() {
  var currentUserUid;

  const userId = useSelector((state) => state.user.currentUser);
  if (userId == null) {
    console.log("no auth")
  } else {
    currentUserUid = userId.user._id
  }

  const RequireAuth = ({ children }) => {
    return currentUserUid ? (children) : <Navigate to="/login" />
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Dashboard2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/examreview/:id" element={<RequireAuth><ExamReview /></RequireAuth>} />
        <Route path="/create/:id" element={<RequireAuth><CreateQuiz /></RequireAuth>} />
        <Route path="/configure/:id" element={<RequireAuth><Configure /></RequireAuth>} />
        <Route path="/reports" element={<RequireAuth><Reports CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/anlyze/:id" element={<RequireAuth><Anlyze CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/quiz/:id" element={<RequireAuth><QuizController CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/result/:id" element={<RequireAuth><Result /></RequireAuth>} />
        <Route path='*' element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;