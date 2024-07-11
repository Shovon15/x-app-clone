import { useState } from "react"
import { post } from "../../utils/fetchApi";
import { showErrorToast, showSuccessToast } from "../../helper/ToastMessage";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            // Show error message if email or password is empty
            showErrorToast("Email and password fields cannot be empty.")
            return;
        }
        const formData = {
            email, password
        };
        try {
            setIsLoading(true);
            const res = await post("/login", formData);
            showSuccessToast(res.data?.message);
            if (res.data?.token) {
                localStorage.set("token", res.data.token)
            }

            alert(res.data.message)
            navigate("/");
        } catch (err) {
            console.log(err)
            showErrorToast(err?.response?.data.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="text-white p-10 flex justify-center items-center min-h-screen">
            <div className="w-[320px] max-w[340px] h-72 min-h-[420px] flex flex-col items-center justify-center  border border-gray-400 rounded-md">
                <p className="text-white font-semibold text-5xl pt-3">X</p>
                <p className="text-white font-bold text-xl py-5">Login your account</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full pb-5">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent h-12 w-[80%] border border-gray-600 rounded-md mx-auto px-2" placeholder="email" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="bg-transparent h-12 w-[80%] border border-gray-600 rounded-md mx-auto px-2" placeholder="password" />
                    <button type="submit" className="bg-blue-500 rounded-full py-3 mx-7">
                        {isLoading ? "loading..." : "Submit"}
                    </button>
                </form>
                <p> Don&apos;t have an account?</p>
                <a href="/signup">
                    <p className="underline text-blue-500 "> signup</p>
                </a>
            </div>
        </div>
    )
}

export default LoginForm