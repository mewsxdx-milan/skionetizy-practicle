import React from "react";
// import {  } from "react-router-dom";
import {
    BrowserRouter,
    Switch,
    useLocation,
    Routes, Route, Link
  } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li>
                <Link to="/task1">Task 1(Crud operation)</Link>
                <div>
                    <p>
                        write code to use axios api request on Create, read ,update ,delete in reactjs
                And submit the code and output of the screenshots
                    </p>
                    <p>
                        You dont have to update the data in database, just load the data and update it in localhost
                    </p>
                </div>
            </li>

            <li style={{"marginTop" : "10px"}}>
                <Link to="/task2">Task 2</Link>
                <div>
                    <p>
                    Write the reactjs and vanilla css code(no bootstrap, or no material ui) for the above UI
Use resuable components like comment.js
And have comments.js as parent component.
                    </p>
                </div>
            </li>
        </ul>
    );
}

export default Header;