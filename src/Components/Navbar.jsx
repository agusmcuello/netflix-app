import { Link, useNavigate} from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-zinc-100 pr-4">Cuenta</button>
          </Link>
            <button onClick={handleLogout} className="bg-red-600 px-5 py-2 cursor-pointer text-zinc-100">
              Cerrar sesión
            </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-zinc-100 pr-4">Inicia sesión</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-5 py-2 cursor-pointer text-zinc-100">
              Registrate
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
