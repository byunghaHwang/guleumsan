import React, { useState } from 'react';
import classNames from 'classnames';

import TestPopup from './popup/testPopup';

function Board() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
        <div classNames={'testSt'}>
            <h2>문의사항</h2>
        </div>
        <div classNames={'testSt'}>
            <button onClick={openModal}>팝업 열기</button>
        </div>
{/* bg-white p-4 rounded shadow mb-6 flex flex-col md:flex-row gap-4 items-center */}
        <div className="bg-white p-4 rounded shadow mb-6 flex flex-col md:flex-row gap-4 items-center">
            <input
                type="text"
                placeholder="검색어 입력"
                
                
                className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
            />
            <select
                
               
                className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4"
            >
                <option value="">카테고리 선택</option>
                <option value="tech">기술</option>
                <option value="design">디자인</option>
                <option value="business">비즈니스</option>
            </select>
        </div>
      

      

      {isOpen && <TestPopup onClose={closeModal} />}
    </>
  );
};

export default Board;
