import React from 'react';

let style = {
  padding: 0
};

let btn = {
  cursor: 'pointer'
};

let complete = {
  textDecoration: 'line-through'
};

const CompleteList = (props) => (
  <ul className="siimple-list" style={style}>
    {props.complete.map((todo, i)=>{
      return (
        <li key={i} className="siimple-list-item siimple--bg-white">
          <span style={complete}>{todo.title}</span>
          <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleCompleteRemove(i)}>Delete</span></li>
      )
    })}
  </ul>
);

export default CompleteList;
