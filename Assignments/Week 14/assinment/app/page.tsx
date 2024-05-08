import Image from "next/image";
import {Navbar as Navbar} from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Welcome to Home Page</h1>
      <p className="my-4">🖱️ Client Page: Interactive client-side rendering in action.</p>
      <p className="my-4">🚀 Server Page: Optimized static content for SEO.</p>
    </div>
  );
}
