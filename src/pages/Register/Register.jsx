import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  //   const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;

    if (!name.trim() || !email.trim() || !password.trim() || !url.trim()) {
      toast.error("Please Fill out all fields");
      return;
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   toast.error("Please Enter a Valid Email");
    //   return;
    // }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password Must Contain an uppercase letter");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            toast.success("Created User Successfully");
            console.log("User created successfully:", user);
            form.reset();
          })
          .catch((error) => {
            toast.error(error.message);
            console.error("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error creating user:", error);
      });
  };

  return (
    <div>
      <div>
        <div
          className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto rounded-2xl min-h-max"
          style={{
            backgroundImage: `url('https://source.unsplash.com/random/640x480'),linear-gradient(
                0deg,
                rgba(44, 7, 5, 0.6) 0%,
                rgba(44, 7, 5, 0) 100%
              )`,
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            opacity: "1",
          }}
          //   "url('https://source.unsplash.com/random/640x480')"
        >
          <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-800">
              <h1 className="text-3xl font-bold text-center text-white mb-4">
                Register
              </h1>
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="block text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="email" className="block text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="block text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="url" className="block text-white">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="url"
                    id="url"
                    placeholder="Photo Url"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                  Register Now
                </button>
              </form>
              <p className="text-xs text-center sm:px-6 dark:text-white">
                Already have an account?
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="underline dark:text-white ml-2"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
