import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList/userList.js";

function App() {
    return (
        <div className="App">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <UserList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
