import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">

      </div>
      <footer className="bg-gray-900 text-gray-300 py-6 px-4 text-center">
        <Footer />
      </footer>
    </div>
  );
}
