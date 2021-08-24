import React from 'react';
import styled from 'styled-components';

const TodoList: React.FC = () => {
  return (
    <ul style={{ padding: '20px' }}>
      <Li>
        <span style={{ fontSize: '20px' }}>코드리뷰하기1</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button>icon</button>
          <div>selectBox</div>
          <button>휴지통</button>
        </div>
      </Li>
      <Li>
        <span style={{ fontSize: '20px' }}>컴포넌트설계2</span>
        <div style={{ display: 'flex' }}>
          <button>icon</button>
          <div>selectBox</div>
          <button>휴지통</button>
        </div>
      </Li>
      <Li>
        <span style={{ fontSize: '20px' }}>밥먹기3</span>
        <div style={{ display: 'flex' }}>
          <button>icon</button>
          <div>selectBox</div>
          <button>휴지통</button>
        </div>
      </Li>
      <Li>
        <span style={{ fontSize: '20px' }}>코딩하기4</span>
        <div style={{ display: 'flex' }}>
          <button>icon</button>
          <div>selectBox</div>
          <button>휴지통</button>
        </div>
      </Li>
    </ul>
  );
};

const Li = styled.li`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

export default TodoList;
