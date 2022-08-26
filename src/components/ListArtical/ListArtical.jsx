import "./Artical.css";
import React from "react";
import Artical from "./Artical";

function ListArtical({ listArticles }) {
    return (
        <div className="list">
            {listArticles.map((item, index) => (
                <Artical key={index} item={item} index={index} />
            ))}
        </div>
    );
};

export default ListArtical;