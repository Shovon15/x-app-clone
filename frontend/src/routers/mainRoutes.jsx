import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/main";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    element={
                        <PrivateRoute>
                            <MainLayout />
                        </PrivateRoute>
                    }>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
                            <p className="text-center font-bold text-5xl text-white">X</p>
                            <p className="text-center font-bold text-3xl text-white">Page not found</p>
                            {/* <PiSmileySadThin className="text-color-primary w-12 h-12" /> */}
                            <Link to="/">
                                <button className="bg-blue-500 py-2 px-4 rounded-full text-white font-semibold mt-3">Home</button>
                            </Link>
                        </div>
                    }
                />
            </Routes>

        </BrowserRouter>
    )
}

export default MainRoutes