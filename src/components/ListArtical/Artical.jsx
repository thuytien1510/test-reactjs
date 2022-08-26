import moment from 'moment';
import React, { useEffect, useState } from 'react'

export default function Artical({ item, index }) {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(item.favoritesCount);
    const [show, setShow] = useState(false);

    const handleLike = () => {
        setLike(!like)
    };

    useEffect(() => {
        like ? setLikeCount(likeCount + 1) : setLikeCount(count => count - 1);
    }, [like]);

    const handleChange = () => {
        setShow(!show);
    };

    return (
        <div>
            <div key={index}>
                <div className="top" >
                    <div className="infor">
                        <img src={item.author.image} alt="" className="avatar" />
                        <div className="text">
                            <h1>{item.author.username}</h1>
                            <p>{moment(item.createdAt).format("MMMM Do YYYY")}</p>
                        </div>
                    </div>
                    <button style={
                        like ? { backgroundColor: "#5cb85c", color: "#fff" } : {}
                    } onClick={handleLike} >♥ {likeCount}</button>
                </div>
                <div className="post">
                    <h2>{item.title}</h2>
                    <p>{show ? item.description : item.description.slice(0, 50) + "..."}</p>
                </div>
                <div className="bottom">
                    <button className="read" onClick={handleChange}>{!show ? "Read more..." : "Hide"}</button>
                    <div>
                        {item.tagList.map((elm, index) => (
                            <button className="tag" key={index}>
                                {elm}
                            </button>
                        ))}
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}
