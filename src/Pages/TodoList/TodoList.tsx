import React from 'react';

const TodoList = () => {
  return (
    <ul>
      <li>
        <span>코드리뷰하기</span>
        <div>
          <button>icon</button>
          <div>selectBox</div>
          <button>휴지통</button>
        </div>
      </li>
      <li>
        <span>컴포넌트설계</span>
        <div>
          <button>icon</button>
          <div>selectBox</div>
          <button>휴지통</button>
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
