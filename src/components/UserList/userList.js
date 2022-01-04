import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    return (
        <div>
            {post ? (
                <ul className="list-group">
                    {post.map((user) => {
                        return <li className="list-group-item" key={user.id}>{user.name}</li>;
                    })}
                </ul>
            ) : (
                <img src='../../../ripple.gif'></img>
            )}
        </div>
    );
}
