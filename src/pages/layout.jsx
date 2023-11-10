import { Outlet, Link } from 'react-router-dom';
const layout = () =>{
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/movies">movies</Link>
                </li>
                <li>
                    <Link to="/series">series</Link>
                </li>
                
            </ul>
        </nav>
        <Outlet />
    </div>
}


export default layout;