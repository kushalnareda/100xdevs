import Link from "next/link";

export function Navbar(){
    return (
        <div className="flex gap-20 justify-center my-20">
            <Link href="/" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex justify-center items-center border-4 border-gray-400 px-12 py-6 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-semibold text-lg shadow-lg">
                Home
            </Link>
            <Link href="/static-page" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex justify-center items-center border-4 border-gray-400 px-12 py-6 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-semibold text-lg shadow-lg">
                Server Page
            </Link>
            <Link href="/app/interactive-page" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex justify-center items-center border-4 border-gray-400 px-12 py-6 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-semibold text-lg shadow-lg">
                Client Page
            </Link>
        </div>
    );
}

