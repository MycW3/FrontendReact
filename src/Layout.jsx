import { Outlet, Link } from "react-router-dom";
import './App.css';

//platilla principal de la Appp
const Layout = () => {
    return (
        <div className="app">
            <h1><Link to="/">Netflix</Link></h1>
            <Outlet />
        </div>
    );
}

export default Layout;