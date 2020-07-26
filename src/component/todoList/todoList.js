import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchPostList() {
            const reqUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
            const res = await fetch(reqUrl);
            const resJSON = await res.json();
            console.log({ resJSON });

            const { data } = resJSON;
            setPostList(data);
        }

        fetchPostList();
    }, []);
    return (
        <ul>
            {postList.map((item, index) => {
                return <li key={index}>
                    {item.title}
                </li>
            })}
        </ul>
    );
}

const mapStatetToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStatetToProps, null)(TodoList);
