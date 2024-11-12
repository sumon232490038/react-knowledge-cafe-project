import PropTypes from "prop-types";
import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  const {
    cover,
    title,
    reading_time,
    author_img,
    hashtags,
    author_name,
    posted_date,
  } = blog;
  return (
    <div className="mb-20  border-b pb-6 space-y-2">
      <img className="w-[845px] h-[450px] rounded-2xl" src={cover} alt="" />
      <div className="flex justify-between items-center my-4">
        <div className="flex space-x-5 items-center mt-4">
          <img
            className="w-[60px] h-[60px] rounded-full object-cover"
            src={author_img}
            alt=""
          />
          <div>
            <h1>{author_name}</h1>
            <small>{posted_date}</small>
          </div>
        </div>
        <div className="space-x-4 items-center flex ">
          <span>{reading_time} min read</span>
          <button className="text-2xl " onClick={() => handleBookmarks(blog)}>
            <CiBookmarkCheck />
          </button>
        </div>
      </div>
      <h1 className="text-2xl">{title}</h1>
      <p>
        {hashtags.map((tag, idx) => (
          <span key={idx}>
            <a href=""> {tag}</a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-700 underline "
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
