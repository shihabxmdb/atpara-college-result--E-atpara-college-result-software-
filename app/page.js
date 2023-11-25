import Image from "next/image";
import imgBody from "../app/img/conv.jpg";
import favicon from "../app/favicon.ico";

export default function Home() {
  return (
    <div className="bg-[#475569] text-white">
      <nav className="bg-slate-600 shadow-xl">
        <div className="container mx-auto ">
          <div className="sm:flex align justify-between items-center ">
            <div className="p-5 text-xl text-center">LOGO</div>
            <div>
              <ul className="sm:flex  text-xl text-center border-t sm:border-none">
                <li className="p-5  hover:text-[#FF5833] hover:pointer">
                  Contact Us
                </li>
                <li className="p-5 pl-8 hover:text-[#FF5833] ">Resulr</li>
                <li className="p-5 pl-8 hover:text-[#FF5833] ">Login</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <img src={{ favicon }} />
        </div>
      </main>
      <footer className="bg-[#23272E] p-5 text-center text-white">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
