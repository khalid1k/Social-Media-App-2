import Link from "next/link";
const NavMenu = () => {
    return (
        <div className="navMenu  items-center">
            <ul className="flex justify-center items-center space-x-5 text-lg font-bold ">
                <li>
                    {" "}
                    <Link href={"/PostsUI"} className="hover:text-slate-300">
                        CreatePost
                    </Link>
                </li>
                <li>
                    <Link href={"/signUp"} className="hover:text-slate-300">
                        sigIn
                    </Link>
                </li>

                <li>
                    <Link href={"/viewPost"} className="hover:text-slate-300">
                        View Post
                    </Link>
                </li>
                <li>Home</li>
            </ul>
        </div>
    );
};
export default NavMenu;
