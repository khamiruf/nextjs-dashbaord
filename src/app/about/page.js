import Navbar from "@/components/Navbar";

export const metadata = {
    title: "About Us",
    description: "Learn more about our blog and team",
};

export default function About() {
    return (
        <div>
            <Navbar />
            <header>
                <h1>About Us</h1>
                <p>Welcome to Shelf Indulgence, where we review the best books. Stay tuned!</p>
                <p>Our mission is to provide in-depth book reviews and recommendations for all book lovers.</p>
            </header>
        </div>
    );
}