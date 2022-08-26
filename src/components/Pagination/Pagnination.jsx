import "./Pagination.css";
import React from 'react';

const Pagnination = ({ numberPage, setPage }) => {
    const handlePrev = () => {
        setPage((numberPage) => {
            return numberPage > 0 ? numberPage - 1 : 0;
        });
    };

    const handleNext = () => {
        setPage(numberPage + 1);
    };
    return (
        <div className="page">
            <button onClick={handlePrev}> ⬅️ </button><span>{numberPage + 1}</span><button onClick={handleNext}> ➡️ </button>
        </div>
    );
};

export default Pagnination;