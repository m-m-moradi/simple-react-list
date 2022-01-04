import axios from "axios";
import React from "react";
import User from "../User/user.js";

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
                        return <User name={user.name} email={user.email} phone={user.phone} website={user.website} key={user.id} />;
                    })}
                </ul>
            ) : (
                <img src="../../../rolling.gif"></img>
            )}
        </div>
    );
}
