import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <div className="navbar-nav">
                    <a className="nav-link" href="/blog">blog</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;