import { fetchPages } from "@/lib/notion";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Link from "next/link";
import { CldImage } from 'next-cloudinary';

export default async function Page() {
  const response = await fetchPages();

  // Check if the response is valid
  if (!response || response.results.length === 0) {
    return (
      <div>
        <Navbar />
        <Header />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h2>Bookshelf is Empty</h2>
          <p>
            Looks like you're out of books to review. Time to go hunting for your next favorite read!
          </p>
        </div>
      </div>
    );
  }

  const posts = response.results;

  return (
    <div>
      <Navbar />
      <Header />
      <table>
        <tbody>
          {posts.map((post) => {
            // Extract the fields from the Notion database response
            const coverImageUrl = post.properties['Cover Image']?.url || null; // Now using URL type
            const slug = post.properties.Slug.rich_text[0]?.plain_text;
            const title = post.properties.Title.title[0]?.plain_text || "Untitled";
            const description = post.properties.Description?.rich_text[0]?.plain_text || "No description available";
            const author = post.properties.Author?.rich_text[0]?.plain_text || "Unknown";

            return (
              <tr key={post.id}>
                <td>
                  <Link href={`/posts/${slug}`}>
                    {coverImageUrl && (
                      <img
                        src={coverImageUrl} // Using a regular img tag
                        width="100"
                        height="150"
                        alt={title}
                      />
                    )}
                  </Link>
                </td>
                <td>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>Author: {author}</p>
                </td>
                <td>
                  <Link href={`/posts/${slug}`}>Read Reviews</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}