import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <he className="flex  mx-auto w-11/12 justify-between items-center my-4 border-b-2 pb-6">
      <h1 className="text-3xl font-bold">Knowlage Cafe</h1>
      <img src={profile} alt="" />
    </he>
  );
};

export default Header;
