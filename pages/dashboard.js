import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import Head from "next/head";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  if (loading) return <h1>Loading</h1>;
  if (!user) route.push("/auth/login");
  if (user)
    return (
      <>
        <Head>
          <title>Authentication via Google and Facebook</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mx-auto max-w-6xl">
          <h1>Witaj na pokładzie {user.displayName}</h1>
          <button
            onClick={() => auth.signOut()}
            className="flex items-center py-2 px-4 bg-black rounded-md text-white hover:bg-gray-700 mt-2"
          >
            Wyloguj się <AiOutlineLogout className="ml-2" />
          </button>
        </div>
      </>
    );
}
