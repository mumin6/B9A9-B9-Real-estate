import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("User Created Successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register now!</h1>
            
          </div>

          <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
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
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo-url"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  {...register("photo")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                  />
                  <span
                    className="text-2xl  absolute  right-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>

                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            <p className="px-4 text-center ">
              Already have an account?<span>{ " "}</span>
              <NavLink to="/login" className="text-green-500">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Register;
