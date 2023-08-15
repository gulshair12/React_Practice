import { Link } from "react-router-dom";
import Button from "../../components/Button/button";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar/navbar";
function Register() {
  return (
    <>
    <Navbar/>
      <div className="Register">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-lg">
            <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h3 className="text-center text-2xl mb-5">Register</h3>

              <div className="mb-4">
                <Input label="FirstName" name="firstName" id="firstName" />
              </div>

              <div className="mb-4">
                <Input label="LastName" name="lastName" id="lastName" />
              </div>

              <div className="mb-4">
                <Input label="Email" name="email" id="email" />
              </div>

              <div className="mb-6">
                <Input label="Password" name="password" id="password" />
              </div>

              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  size="large"
                  variant="primary"
                  className="flex items-center justify-center w-full"
                >
                  Login
                </Button>
              </div>
              <p className="flex items-center justify-center mt-3">
                Already a user?
                <Link className="underline text-sky-600 ml-1" to={"/"}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
