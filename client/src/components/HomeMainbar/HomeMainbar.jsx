import React from "react";
import "./HomeMainbar.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const navigate = useNavigate()
  const user = 1

  const questionsList = useSelector(state => state.questionsReducer)

  const location = useLocation();

  const checkAuth = () => {
    if (user === null) {
      alert('Your not Loged in, Please log in first')
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
        Ask Question
        </button>
      </div>
      <div> 
        {
          questionsList.data === null ? <h1>Loading...</h1>:
          <>
          <p>{questionsList.data.length} questions</p>
          <QuestionList questionsList = {questionsList.data}/>
          </>
        }
      </div>
    </div>
  );
};

export default HomeMainbar;
