import { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched:", data);
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
   // useEffect hanya dijalankan sekali saat komponen dimount
   
  if (loading) {
    return <p>Loading...</p>; // Tampilkan loading jika data belum tersedia
  }

  return (
    <div>
      <h2>Daftar Postingan</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
