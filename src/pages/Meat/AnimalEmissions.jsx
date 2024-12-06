import { Link, useLocation } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import useTitle from "../../hooks/useTitle";


function AnimalEmissions() {
  useTitle("Animal Emissions");

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <ArticleHeader
          title="Animal Emissions"
          date={new Date("1999-99-99")}
        />
        <div className="divide-y divide-gray-200">
          <div className="prose max-w-none pb-8 pt-10">
          </div>
        </div>
      </main>

      {/* <Sources items={citedSources} /> */}
      <Footer />
    </>
  );
}

export default AnimalEmissions;
