import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                <a className="navbar-brand">Navbar</a>
                </Link>
                <div className="navbar-nav">
                    <Link href="/blog">
                    <a className="nav-link">blog</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;