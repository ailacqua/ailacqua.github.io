import Header from "./components/header";
import Footer from "./components/footer";
import aboutData from "./data/about.json";
import { Nunito } from "next/font/google";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-center bg-slate-900">
      <Header />

      <main className="flex flex-col items-center p-8 space-y-8 min-h-screen">
        <img
          src="/AlexanderIlacqua.png"
          alt="Profile photo"
          className="w-48 h-48 my-2 object-cover rounded-full border-4 border-white shadow-lg"
        />

        <p className="text-white text-3xl font-nunito font-bold text-center max-w-4xl mx-auto">
          Hi, I'm Alex!
          <span className="font-medium font-nunito">{" " + aboutData.blurb}</span>
        </p>

        <div className="flex font-nunito font-semibold space-x-4 mt-4 flex-wrap justify-center">
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full hover:scale-110 transition transform"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com/in/ailacqua"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full hover:scale-110 transition transform"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/ailacqua"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full hover:scale-110 transition transform"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
