import { useForm } from "react-hook-form";
import { auth, onAuthStateChanged, signInWithEmailAndPassword } from "../../firebaseConfigue";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";












const SignIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);


    // ---------------Auth Change------------------
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                navigate('/')
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    })





    // -----------Login auth----------

    const signInF = (data) => {
        const { email, password } = data
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                toast.success('Sign In Successfull')

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });

    }


    return (
        <div>
            <h1>Sign In Form</h1>
            <form onSubmit={handleSubmit(signInF)}>
                <input type="email" placeholder="email" {...register("email", { required: true })} /> <br />
                {errors.email && <span>This field is required</span>} <br />
                <input type="password" placeholder="password" {...register("password", { required: true })} /> <br />
                {errors.password && <span>This field is required</span>} <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignIn