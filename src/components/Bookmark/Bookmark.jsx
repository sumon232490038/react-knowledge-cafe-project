import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-gray-300 rounded text-xl font-bold my-3 py-5">
      <h1>{bookmark.title}</h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.array.isRequired,
};

export default Bookmark;
