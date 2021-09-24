
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Routes from '../Router';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="content-wrapper">
                <Routes />
            </div>
        </BrowserRouter>
    );
}

export default App;