import React, { useState } from 'react';
import axios from 'axios';

function TestPopup({ onClose }) {
  const [data, setData] = useState('');

  const getSearch = () => {
    axios.get('/api/data')   // vite.config.js에 프록시 설정이 있다면 이렇게 상대경로 사용
      .then((res) => {
        setData(res.data); 
        alert(`백엔드 응답: ${JSON.stringify(res.data)}`); // 응답을 alert로 표시
      })
      .catch((err) => {
        console.error(err);
        alert('백엔드 요청 중 오류가 발생했습니다.');
      });
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫히지 않게
      >
        <h2>팝업 내용</h2>
        <p>이곳은 모달 팝업입니다.</p>

        <button onClick={getSearch}>back 통신</button>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default TestPopup;
