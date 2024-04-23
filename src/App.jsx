import { useState } from "react";
import "./App.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold mb-4">Admin Login</h1>
            
          </div>
          <div className="card flex-shrink-0 lg:w-[600px] md:w-[500px] w-[300px] mt-6 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="absolute top-3 right-4 w-[]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-bold">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
