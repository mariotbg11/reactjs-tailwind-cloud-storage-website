import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cloud from "./components/Cloud";
import Newsletter from "./components/Newsletter";
import Plans from "./components/Plans";
import Review from "./components/Review";
import Footer from "./components/Footer";
import datareview from "./datareview";

function App() {
  const review = datareview.map((item) => {
    return <Review key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Cloud />
      <Newsletter />
      <Plans />
      <div className="w-full pt-20 pb-32 px-4 bg-white">
        <h2 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold mb-24">
          What our Clients say
        </h2>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4">
          {review}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
