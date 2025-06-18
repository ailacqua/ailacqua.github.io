import Header from "../components/header";
import Footer from "../components/footer";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function ComingSoon() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-center bg-slate-900">
      <Header />

      <main className="flex flex-col items-center p-8 space-y-8 min-h-screen">
        <h1
            className="font-bold font-poppins text-3xl text-gray-100 text-center my-6 hover:text-slate-400"
            data-title="TECHNICAL SKILLS"
          >PAGE COMING SOON!</h1>
      </main>
      <Footer />
    </div>
  );
}