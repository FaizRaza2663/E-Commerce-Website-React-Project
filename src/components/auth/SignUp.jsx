import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../../firebaseConfigue";
import { toast } from "react-toastify";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const signInF = (data) => {
      const {email,password} = data
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        toast.success('Sign Up Successful')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage)
        // ..
      });
    } 

  return (
    <div>
        <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit(signInF)}>
                <input type="email" placeholder="email" {...register("email", { required: true })} /> <br/>
                {errors.email && <span>This field is required</span>} <br/>
                <input type="password" placeholder="password" {...register("password", { required: true })} /> <br/>
                {errors.password && <span>This field is required</span>} <br/>
                <input type="submit" />
            </form>
            <div>
              Already Sign up ? 
              <NavLink to='/signin'>Sign In</NavLink>
            </div>
    </div>
  )
}

export default SignUp