import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import LoginNavbar from "../LoginNavbar";
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  text-align: center;
`
const Result = () => {
  const [score, setScore] = useState(0);
  const [passGrade, setPassGrade] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const id = params;

  useEffect(() => {
    console.log("check")
    getExamNames();
  }, [setScore])

  const getExamNames = async () => {
    const { data } = await axios.get(`http://localhost:5000/userexams/exam/${id.id}`);
    setScore(data);
    getPassGrade();
  }

  const getPassGrade = async () => {
    const { data } = await axios.get(`http://localhost:5000/exam/exam/${id.id}`);
    setPassGrade(data);
    setIsLoading(false);
  }
  if (isLoading) {
    return (
      <>
        <LoginNavbar />
        <div style={{ verticalAlign: "middle", display: "flex", border: "16px solid #f3f3f3", borderRadius: "50%", borderTop: "16px solid #3498db", width: "120px", height: "120px", WebkitAnimation: "spin 2s linear infinite" }}></div>
      </>)
  }
  return (
    <>
      <LoginNavbar />
      <Container>
        <h1 style={{ color: "#ffffff" }}>Good work practicing! Go back to the dashboard to retake this quiz and try for a higher score!</h1>
        {/* <span style={{ color: "#ffffff" }}>Final Score : {score[0]?.grade}</span> <br />
        {passGrade[0]?.passGrade < score[0]?.grade ? (<><span>congratulations you passed the exam</span><br /><img src="https://i.ibb.co/7vPw6r4/Png-Item-30479.png" style={{ height: "200px", width: "300px", marginLeft: "auto", marginRight: "auto" }} /></>) : (<><span>sorry you failed the exam</span><br /><img src="https://www.onlygfx.com/wp-content/uploads/2020/05/fail-stamp-7.png" style={{ height: "200px", width: "300px", marginLeft: "auto", marginRight: "auto" }} /></>)} */}
        <Link to="/dashboard">
          <button
            variant="contained"
            background=""
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20, cursor: "pointer", backgroundColor: "#DC143C", color: "#ffffff", width: 250, height: 100, borderRadius: 5 }}
          >
            Go to dashboard
          </button>
        </Link>
      </Container>
    </>
  );
};
export default Result;