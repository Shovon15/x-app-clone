import { useState } from "react";
import { post } from "../../utils/fetchApi";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../helper/ToastMessage";

const SignupForm = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !userName || !email || !password) {
            // Show error message if email or password is empty
            showErrorToast("all fields are fillable.");
            return;
        }
        const formData = {
            name,
            user_name: userName,
            email,
            password
        };
        console.log(formData)
        try {
            setIsLoading(true);
            const res = await post("/register", formData);
            showSuccessToast(res.data?.message);
            // if (res.data?.token) {
            //     // localStorage.set("token", res.data.token)
            // }

            alert(res.data.message)
            navigate("/login");
        } catch (err) {
            console.log(err)
            showErrorToast(err?.response?.data.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="text-white p-10 flex justify-center items-center min-h-screen">
            <div className="w-[320px] max-w[340px] h min-h-[550px] flex flex-col items-center justify-center  border border-gray-400 rounded-md">
                <p className="text-white font-semibold text-5xl pt-3">X</p>
                <p className="text-white font-bold text-xl py-5">Create your account</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full pb-5">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent h-12 w-[80%] border border-gray-600 rounded-md mx-auto px-2" placeholder="email"
                    />
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="bg-transparent h-12 w-[80%] border border-gray-600 rounded-md mx-auto px-2" placeholder="@user_name"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent h-12 w-[80%] border border-gray-600 rounded-md mx-auto px-2" placeholder="email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-transparent h-12 w-[80%] border border-gray-600 rounded-md mx-auto px-2" placeholder="password"
                    />
                    <button type="submit" className="bg-blue-500 rounded-full py-3 mx-7">
                        {isLoading ? "loading..." : "Submit"}
                    </button>
                </form>
                <p> Already have an account?</p>
                <a href="/login">
                    <p className="underline text-blue-500 ">login</p>
                </a>
            </div>
        </div>
    )
}

export default SignupForm