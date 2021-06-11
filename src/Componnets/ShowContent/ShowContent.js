import React, { useEffect, useState } from 'react';
import './ShowContent.css';
import axios from 'axios';
const url = "https://api.first.org/data/v1/news";
const ShowContent = () => {
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [posPerPage, setPostPerPage] = useState(5);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            console.log(response['data'].data);
            setData(response['data'].data.splice(0,4));
        }
        fetchData();
    }, []);
    const indexOfLastPost = currentPage * posPerPage;
    const indexOfFirstPost = indexOfLastPost - posPerPage;
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
    console.log('current post is ====', currentPost);
    // setPost(currentPost])
    return (
        <div>

            {
                data.map((item) => (
                    <>
                        <div className="main">
                            <div className="container">
                                <div key={item.id}>
                                    <h3 className="title">{item.title}</h3>
                                    <p className="summary">{`${(item.summary || "").substr(0, 160)}...`}</p>
                                    <p className="time">{item.published}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
            <div class="pagination">
                <a href="#" className="active">1</a>
                <a href="#" >2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}

export default ShowContent
