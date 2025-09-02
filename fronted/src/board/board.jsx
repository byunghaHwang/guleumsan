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
      

      

      {isOpen && <TestPopup onClose={closeModal} />}
    </>
  );
};

export default Board;
