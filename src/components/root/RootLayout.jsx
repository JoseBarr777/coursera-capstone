import Nav from './Nav';
import Footer from './Footer';

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