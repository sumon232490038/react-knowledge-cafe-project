import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, markAsRead }) => {
  return (
    <div className="md:w-1/3 text-center ">
      <div className="mb-5 border-2 rounded-lg py-5 bg-[#f0edfe]">
        <h1 className="text-[#6047EC] font-bold text-xl">
          Spent time on read :{markAsRead} min
        </h1>
      </div>
      <div className="bg-gray-400 p-2 h-full">
        <h1 className="text-2xl">Bookmarks:{bookmarks.length}</h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark bookmark={bookmark} key={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  markAsRead: PropTypes.number.isRequired,
};

export default Bookmarks;
