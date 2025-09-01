import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function TestPopup({onClose}){

    const [data, setData] = useState('')

    const getSearch = () => {
        axios.get('/api/data')
        .then(res => console.log('res >>> ', setData(res.data)))
        .catch(err => console.log(err))
    };

    return (
    <>
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
    </>
  )

};

export default TestPopup;