import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList/userList.js";

function App() {
    return (
        <div className="App">
            <div className="container" style={{"margin-top": "100px"}}>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <UserList />
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
