import React from 'react';

let style = {
  maxWidth: '700px'
};

let btn = {
  cursor: 'pointer'
};

const List = (props) => (
  <ul className="siimple-list">
    <li className="siimple-list-item siimple--bg-white" style={style}>Item 1 <span className="siimple-tag siimple-tag--error siimple-hover" style={btn}>Delete</span></li>
    <li className="siimple-list-item siimple--bg-white" style={style}>Item 2 <span className="siimple-tag siimple-tag--error siimple-hover" style={btn}>Delete</span></li>
    <li className="siimple-list-item siimple--bg-white" style={style}>Item 3 <span className="siimple-tag siimple-tag--error siimple-hover" style={btn}>Delete</span></li>
  </ul>
);



export default List;
