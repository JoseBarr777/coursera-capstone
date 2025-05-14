import Nav from './root/Nav';
import Footer from './root/Footer';

const RootLayout = ({children}) => {
    return(
        <div className="app-container">
            <Nav />
            <main  className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;