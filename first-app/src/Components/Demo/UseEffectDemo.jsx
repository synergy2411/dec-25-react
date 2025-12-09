import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [toggle, setToggle] = useState(false);
  const [show, setshow] = useState(false);

  //   useEffect(() => {
  //     console.log("Effects Work!");
  //   }, []);

  //   useEffect(() => {
  //     console.log("Effects Work!");
  //   }, [show]);

  //   useEffect(() => {
  //     console.log("Effects Work!");
  //     return () => {
  //       console.log("Clean Up!");
  //     };
  //   }, [show]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let notifer = null;
    if (username.trim() !== "") {
      notifer = setTimeout(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
          .then((response) => response.json())
          .then((repos) => setRepos(repos));
      }, 2000);
    }
    return () => {
      clearTimeout(notifer);
    };
  }, [username]);

  return (
    <>
      <h1>Use Effect Demo</h1>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      <button className="btn btn-success" onClick={() => setshow(!show)}>
        Show
      </button>

      {toggle && <p>Toggle is true now</p>}
      {show && <p>Show is true now</p>}
      <hr />

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <hr />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default UseEffectDemo;
