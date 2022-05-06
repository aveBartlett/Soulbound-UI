import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Landing from "../src/components/Landing";
import BackgroundImage from "../src/components/BackgroundImage";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center fixed w-full h-full z-20 items-center">
        <div className="flex flex-col min-h-screen items-stretch min-w-fit w-11/12">
          <Header />
          <main className="flex-grow flex">
            <Landing />
          </main>
          <div className="flex justify-end">
            <Footer />
          </div>
        </div>
      </div>
      <BackgroundImage />
    </div>
  );
}
