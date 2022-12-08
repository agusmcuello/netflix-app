import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const { user, logIn } = UserAuth();
  

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://img.freepik.com/free-photo/people-watching-streaming-service-together_23-2149007882.jpg?w=996&t=st=1670425023~exp=1670425623~hmac=9993d961decd710fdda6e2237966f183edc0eadd724a7636e4854c32dc86287e"
        alt="background-netflix"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-zinc-100">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Iniciar sesión</h1>
            <form
              onSubmit={handleSubmit}
              className=" w-full flex flex-col py-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Dirección de correo"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Contraseña"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Iniciar sesión
              </button>
              {error ? <p className="p-3 mb-4 bg-red-500">{error}</p>:null}
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input type="checkbox" className="mr-2" /> Recuerdame
                </p>
                <p>¿Necesitas ayuda?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-400">¿Nuevo en Netflix?</span>{" "}
                <Link to="/signup">Registrate</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
