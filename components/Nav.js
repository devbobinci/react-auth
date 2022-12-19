import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import Image from "next/image";
import logo from "../assets/key.png";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10 max-w-6xl mx-auto">
      <Link href={"/"}>
        <a>
          <Image
            src={logo}
            height={48}
            width={48}
            className="cursor-pointer"
            alt="logo"
          />
        </a>
      </Link>
      <ul>
        {!user && (
          <Link legacyBehavior href={"/auth/login"}>
            <a className="py-2 px-4 text-lg bg-black hover:bg-gray-700 text-white rounded-lg font-medium ml-8">
              Dołącz
            </a>
          </Link>
        )}
        {user && (
          <div className="cursor-pointer">
            <Link legacyBehavior href={"/dashboard"}>
              <img
                src={user.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
                className="rounded-full w-12"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
