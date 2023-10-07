import { Link, useLocation, useNavigate } from "react-router-dom";
import logimg from "../../assets/login.json";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Lottie from "lottie-react";
import google from "../../assets/google.png";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const LogIn = () => {

useTitle('Log In')
    const { signInEmailUser ,googleLogIn,resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error ,setError] =useState('')

  const from = location.state?.pathname || "/";

  const emailRef = useRef(null);

//email login
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInEmailUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'log-in successful',
            showConfirmButton: false,
            timer: 1500
          })
        
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        // ..
      });
  };

//google login
  const handleGoogleSignIn = () => {
    googleLogIn()
        .then((result) => {
            // Signed in
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'log-in successful',
                showConfirmButton: false,
                timer: 1500
              })
            // ...
        })
        .catch((error) => {
            console.log(error);
            setError(error.message);
            // ..

        });
}

// reset password
const handleResetPassword = () => {
    console.log(emailRef.current.value);
    if(emailRef.current.value ===''){
        setError('please enter your email')
        return
    }
    resetPassword(emailRef.current.value)
    .then(() => {
        // Password reset email sent!
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Password reset email sent',
            showConfirmButton: false,
            timer: 1500
          })
      })
      .catch((error) => {
       
        const errorMessage = error.message;
        setError(errorMessage)
        // ..
      });

}



    return (
        <>
            <div className="hero min-h-screen bg-[#dbeafe] py-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 lg:pr-20">
        <Lottie animationData={logimg} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          {error &&  <p className='mb-3 text-red-600'> {error}  </p>}
            <h1 className="text-3xl text-center font-bold"> Please Login </h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                 
                 ref={emailRef}
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" onClick={handleResetPassword} className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-main mb-3"
                  type="submit"
                  value="Log-In"
                />
              </div>

              <p className="my-4">
                new to ToyHero Universe{" "}
                <Link
                  className=" text-orange-500"
                  state={location.state}
                  to="/register"
                >
                  {" "}
                  Sign-up
                </Link>{" "}
              </p>
            </form>

            <div className="divider">OR sign-In with</div>

            <div className=" flex justify-center items-center gap-4">
                  <span
                    onClick={handleGoogleSignIn}
                    className="  cursor-pointer"
                  >
                    <img className="h-10 w-10" src={google} alt="" />
                  </span>
                 
                </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default LogIn;