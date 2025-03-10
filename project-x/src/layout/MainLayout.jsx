
import TopNavbar from '../components/TopNavbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <TopNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;