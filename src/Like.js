
import './App.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';

const { useState, useReducer } = React;



const initialState = {
  likes: 100,
  dislikes: 5
}

const appReducer = (state, action) => {
  switch(action.type) {
    case 'HANDLE_LIKE':
      return {
        ...state,
        likes: state.likes + action.payload
      }
    case 'HANDLE_DISLIKE':
      return {
        ...state,
        dislikes: state.dislikes + action.payload
      }
    default:
      return state
  }
}

const Button = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { likes, dislikes } = state
  const [status, setStatus] = useState(null)
  
  const handleClickLike = () => {
    if (status==='like') {
      setStatus(null)
      dispatch({
        type: 'HANDLE_LIKE',
        payload: -1,
      })
    } else {
      setStatus('like')
      if (status==='dislike') {
        dispatch({
          type: 'HANDLE_DISLIKE',
          payload: -1,
        })
      }
      dispatch({
        type: 'HANDLE_LIKE',
        payload: 1,
      })
    }
  }
  
  const handleClickDislike = () => {
    if (status==='dislike') {
      setStatus(null)
      dispatch({
        type: 'HANDLE_DISLIKE',
        payload: -1,
      })
    } else {
      setStatus('dislike')
      if (status==='like') {
        dispatch({
          type: 'HANDLE_LIKE',
          payload: -1,
        })
      }
      dispatch({
        type: 'HANDLE_DISLIKE',
        payload: 1,
      })
    }
  }
  
  return (
    <div className='container'>  
      <button className={status==='like'? 'btn active' : 'btn'} onClick={handleClickLike}> 
        
        <button primary>👍</button>
        
        <span>{likes}</span>
      </button>
      
      <button className={status==='dislike'? 'btn active' : 'btn'} onClick={handleClickDislike}> 
        <button primary>👎</button>
        <span>{dislikes}</span>
      </button>
    </div>
  )
  
}



ReactDOM.render(<Button />, document.getElementById('root'))



export default Button;