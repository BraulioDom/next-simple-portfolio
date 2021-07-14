import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="container py-4">
                {children}
            </main>
        </div>
    )
}

export default Layout;