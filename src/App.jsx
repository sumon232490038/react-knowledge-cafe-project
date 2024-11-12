import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const [markAsRead, setMarkAsRead] = useState(0);
  const handleMarkAsRead = (time) => {
    const newMarkAsRead = markAsRead + time;
    setMarkAsRead(newMarkAsRead);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex w-11/12 mx-auto gap-4">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleBookmarks={handleBookmarks}
        ></Blogs>
        <Bookmarks markAsRead={markAsRead} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
