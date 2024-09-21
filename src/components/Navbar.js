import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;