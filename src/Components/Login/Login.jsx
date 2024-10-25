import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { signInUser,googleLogIn,githubLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                  required
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                  required
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
              <p className="px-3 text-sm dark:text-gray-600">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={()=>googleLogIn()}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <FcGoogle />
              </button>
              
              <button
                onClick={()=>githubLogin()}
                aria-label="Log in with GitHub"
                className="p-3 rounded-sm"
              >
                <FaGithub />
              </button>
            </div>
            <p className="text-base text-center sm:px-6 ">
              Do not have an account?<span>{" "}</span>
              <NavLink to="/register" className="text-green-500">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
