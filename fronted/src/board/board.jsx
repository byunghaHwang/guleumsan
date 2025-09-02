import React, { useState } from 'react';
import TestPopup from './popup/testPopup';

function Board() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <h2>공지사항</h2>

      <button onClick={openModal}>팝업 열기</button>

      {isOpen && <TestPopup onClose={closeModal} />}
    </>
  );
};

export default Board;
