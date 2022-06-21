import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center bg-mainColor">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-darkBlue px-2 text-sm rounded rotate-12 absolute text-white">
          Page Not Found
        </div>
        <Link to="/home">
            <button className="mt-5">
            <div className="relative inline-block text-sm font-medium text-darkBlue group active:text-veryDarkBlue focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple group-hover:translate-y-0 group-hover:translate-x-0" />
                <span className="relative block px-8 py-3 bg-veryLightGray border border-current">
                <router-link to="/">Go Home</router-link>
                </span>
            </div>
            </button>
        </Link>
        </div>
    );
}