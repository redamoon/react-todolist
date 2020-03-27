import React from 'react';

let style = {
  padding: 0
};

let btn = {
  cursor: 'pointer'
};

const List = (props) => (
  <ul className="siimple-list" style={style}>
    {props.todos.map((todo, i)=>{
      return <li key={i} className="siimple-list-item siimple--bg-white">{todo.title} <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span></li>
    })}
  </ul>
);



export default List;
