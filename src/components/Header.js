import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        className="w-48 mx-8 my-6 "
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />
      {user && (
        <div className="flex items-center">
          <img
            className="object-contain w-12 mx-2"
            alt="userIcon"
            src="https://occ-0-4005-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201"
          />
          <button
            className="mx-2 mr-6 bg-red-700 h-12 px-6 rounded-xl font-semibold text-gray-100  "
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
