import { Link, useLocation } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import HorizontalBarChart from "../../components/charts/AnimalEmissions/HorizontalBarChart";
import BarChart from "../../components/charts/AnimalEmissions/BarChart";
import TreeMap from "../../components/charts/AnimalEmissions/TreeMap";

import meat_consumption from "../../assets/data/Animal-Emissions/Consumption/test.json";

import useTitle from "../../hooks/useTitle";

function MeatConsumption() {
  useTitle("Meat Consumption");
  const imagePath = import.meta.env.VITE_IMAGE_PATH;
  const populationData = [
    {
      y:"",
      category: "High Income Countries",
      population: 4217329972,
      percent: "52.5%",
      placement: 0
    },
    {
      y:"",
      category: "Low Income Countries",
      population: 3816245175,
      percent: "47.5%",
      placement: 4217329972 + 3816245175,
    },
  ];

  const meatYields = [
    {
      value: 146.5,
      country: "China",
      year: "2013"
    },
    {
      value: 148.4,
      country: "China",
      year: "2023"
    },
    {
      value: 232.6,
      country: "Brazil",
      year: "2013"
    },  
    {
      value: 245.0,
      country: "Brazil",
      year: "2023"
    }
  ];

  const meatProduction = [
    {
      value: 6130000,
      country: "China",
      year: "2013"
    },  
    {
      value: 7530000,
      country: "China",
      year: "2023"
    },  
    {
      value: 10000000,
      country: "Brazil",
      year: "2013"
    },
    {
      value: 10500000,
      country: "Brazil",
      year: "2023"
    }
  ];

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
              change. As of 2022 High and Upper-Middle Income countries
              currently consume more than 80% of all meat produced globally.
              They are the largest consumers and emittors. While this has been
              gradually changing and is expected to change in the decades to
              come it's important to think about how much meat is being consumed
              throughout the world and its impact on climate change.
            </p>
            <ChartWrapper>
              <h2>Total Annual Meat Consumption by Kilogram</h2>
              <h3>Income Group, World, 2023</h3>
              <HorizontalBarChart data={populationData} />
              <TreeMap data={meat_consumption} group={"type"} />
              <span className="source">
                Source: Food and Agriculture Organization (2023) | FAOSTAT
              </span>
            </ChartWrapper>
            <p>
              High income countries consumed more than seven times the meat per
              capita of low income countries. With high income countries
              consuming around 102kg more annually than those of low income
              ones. Even upper-middle countries consumed 63kgs more than
              lower-income ones. The gap between the meat consumption of rich
              and poor countries is large. Wealthier countries are largely
              responsible for the majority of greenhouse emissions.
            </p>

            <p>
              A reduction in meat consumption by wealthier countries would be a
              positive step towards reducing emissions. Considering how much
              food is wasted, however, this can be a complex process and
              wouldn't necessarily be as simple as increasing a tax. While this
              could be a simple way of reducing emissions it likely would result
              in less favourable views towards climate change.
            </p>

            <ChartWrapper>
              <img
                src={`${imagePath}/series/meat-consumption/per-capita-consumption-meat-type.png`}
              ></img>
            </ChartWrapper>

            <p>
              Previously we talked about how emissions for lower income
              countries of animals had significantly higher amounts of CO2 per
              Kg in comparison to more developed countries. Such as for beef,
              but is it necessarily an issue? Not necessarily. While there are
              outliers such as India. For many countries as they develop the
              emissions of animals is generally expected to decrease. Though
              there are caveats to this and the transition towards this also can
              have many implications of their own. We'll be talking about these
              here.
            </p>

            <ChartWrapper>
              <h2>Greenhouse Gas Emissions Beef Production </h2>
              <h3>CO2 Equivalent Emissions to Beef, World, 2013</h3>
              <img
                src={`${imagePath}/series/animal-emissions/beef-emissions.png`}
              ></img>
              <span className="source">
                Source: Herrero et al., 2013 PNAS 110: 20888-20893
              </span>
            </ChartWrapper>

            <p>
              Let's take for example the beef production in China which
              increased from 6.13 million metric tons in 2013 to 7.53 in 2023.
              The average yield of meat per cattle has remained relatively the
              same going from 146.5kg to 148.4kg of meat per cattle in the same
              period. Over a decade the amount of greenhouse emissions from
              these cattle has likely decreased somewhat but its hard to say if
              it is in a meaningful way. While emissions for China are
              relatively small in comparison to other regions its still a
              concern due to the amount of emissions still being two to three
              times higher than in other areas.
            </p>

            <p>
              Another example would be in Brazil, now one of the largest
              exporters of beef globally. Brazil has seen a considerable
              increase in beef yields over the past decade going from 232.6kg to
              245.0kg on average. While the country faces a lot of other issues
              in regards to climate there is at least some form of progress
              being made. Brazil went from 10 million metric tons in 2013 to
              10.5 million metric tons in 2023. Similar to China it isn't
              necessarily reducing emissions by much. In many ways it seems at
              least that emissions of some animals can get stuck.
            </p>

            <ChartWrapper>
              <h2>Beef Yield and Production</h2>
              <h3>China and Brazile, 2012, 2022</h3>
              <BarChart meatYield={meatYields} meatProduction={meatProduction} id={"yields"}/>
              <span className="source">Source: Food and Agriculture Organization (2023) | FAOSTAT</span>
            </ChartWrapper>

            <p>
              So what's the big deal? For many countries it's believed that
              naturally over time as food systems develop emissions of meat
              products is expected to decrease. But looking at the data it shows
              that in many ways they can get stuck. This can be problematic in a
              lot of different ways especially for countries that struggle with
              food insecurity which is a considerable number of them. Let's look
              at some FAO projections on meat production in the decades to come.
            </p>

            <h2>TODO: Add Burning Meat Component Refactor Remove Circles and use TreeMaps, remove scenarios and use only business as usual.</h2>
          </div>
        </div>
      </main>

      {/* <Sources items={citedSources} /> */}
      <Footer />
    </>
  );
}

export default MeatConsumption;
