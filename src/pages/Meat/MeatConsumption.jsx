import { Link, useLocation } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import TreeMap from "../../components/charts/AnimalEmissions/TreeMap";

import meat_consumption from "../../assets/data/Animal-Emissions/Consumption/test.json";

import useTitle from "../../hooks/useTitle";

function MeatConsumption() {
  useTitle("Meat Consumption");
  const imagePath = import.meta.env.VITE_IMAGE_PATH;
  const citedSources = [
    "https://www.fao.org/family-farming/detail/en/c/1634679/",
    "https://ourworldindata.org/food-ghg-emissions",
    "https://www.science.org/doi/10.1126/science.aaq0216",
    "https://ourworldindata.org/environmental-impacts-of-food",
    "https://www.pnas.org/doi/10.1073/pnas.1308149110",
  ];

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <ArticleHeader title="Meat Consumption" date={new Date("2024-12-17")} />
        <div className="divide-y divide-gray-200">
          <div className="prose max-w-none pb-8 pt-10">
            <p>
              Livestock emissions play a large role for issues such as climate
              change. However, the largest consumers of these goods tends to
              come from wealthier countries. While it's gradually changing and
              is expected to change in the decades to come it's important to
              think about how much meat is being consumed throughout the world.
              As it stands in 2024 High and Upper-Middle Income countries
              currently consume more than 80% of all meat produced globally.
            </p>
            <ChartWrapper>
              <h2>Total Annual Meat Consumption</h2>
              <h3>Income Group, World, 2023</h3>
              <TreeMap data={meat_consumption} group={"type"} />
              <span className="source">
                Source: Food and Agriculture Organization (2023)
              </span>
            </ChartWrapper>
            <p>
              High income countries consumed more than seven times the meat per
              capita of low income countries. With high income countries
              consuming around 102kg more annually than those of low income
              ones. That's more than 220 pounds! While the jump from
              upper-middle to lower-middle income countries was around 63kg or
              138lbs.
            </p>
            <ChartWrapper>
              <img
                src={`${imagePath}/series/meat-consumption/per-capita-consumption-meat-type.png`}
              ></img>
            </ChartWrapper>
          </div>
        </div>
      </main>

      {/* <Sources items={citedSources} /> */}
      <Footer />
    </>
  );
}

export default MeatConsumption;
