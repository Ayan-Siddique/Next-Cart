import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name) return;

    login({ name });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="border p-6 rounded-md w-80">
        <h2 className="text-lg font-semibold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 mb-4 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 text-white py-2 rounded"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
