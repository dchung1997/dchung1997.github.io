import { Link, useLocation } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import DivergingBoxPlot from "../../components/charts/Food-Affordability/DivergingBoxPlot";
import YieldGap from "../../components/charts/Child-Mortality/YieldGap";
import CerealYields from "../../components/charts/Child-Mortality/CerealYields";
import GrainProduction from "../../components/charts/Child-Mortality/GrainProduction";

import useTitle from "../../hooks/useTitle";

import income_difference from "../../assets/data/Food-Affordability/income_difference.json";
import annual_change from "../../assets/data/Food-Affordability/annual_change.json";
import cereal_yields_ssa from "../../assets/data/Food-Affordability/Climate-Change/cereal_yields_ssa.json";
import cereal_yields_ssa_countries from "../../assets/data/Food-Affordability/Climate-Change/cereal_yields_ssa_countries.json";
import yield_gap from "../../assets/data/Food-Affordability/Climate-Change/yield_gap.json";
import africa_grain_projection from "../../assets/data/Food-Affordability/Climate-Change/africa-grain-projections.json";
import africa_geo from "../../assets/data/Food-Affordability/Climate-Change/africa_outline_with_countries.json";

function ClimateChange() {
  useTitle("Climate Change & Beyond");

  const citedSources = [""];

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <ArticleHeader
          title="Climate Change & Beyond"
          date={new Date("2024-11-01")}
        />
        <div className="divide-y divide-gray-200">
          <div className="prose max-w-none pb-8 pt-10">
            <p>
              Climate change will likely cause damage to crops. Regular crop
              failures have a high likelihood of causing real damage. A simple
              way of stopping preventable losses would be for governments to use
              their bargaining power in order to procure items such as
              drought-resistant crops or even tools & training such as low-cost
              alternatives to tractors to help farmers with productivity along
              with providing additional education for land management. This
              could increase the number of jobs and allow for specialization.
            </p>
            <p>
              Climate Change could make Public Food Distribution Programs like
              those found in South Asia a necessity. Being self-sufficient is an
              issue for many countries and climate change will only make it
              worse. Budgeting can be an issue that many countries face
              especially lower income and developing ones that need to juggle
              various different issues not just a single one.
            </p>
            <p>
              What and where money is being spent is important. For many
              countries wages have been stagnant for decades. It's a trend which
              could change, wages might increase but with the arrival of climate
              change, many people could also fall back into extreme poverty.
            </p>

            <ChartWrapper>
              <DivergingBoxPlot
                data={income_difference}
                annualDiff={annual_change}
                id={"diverging-box-plot"}
              />
            </ChartWrapper>

            <p>
              While in some areas we saw increases in wages in others countries
              median income was stagnant or decreased. It may be impossible to
              predict the future but by 2030 the global average temperature is
              expected to increase by 1.5°C. It's important to start to think
              about what this could mean. Changes now towards Food Subsidy
              Programs could be the foundation for prevention against the worst
              impacts of climate change and transitioning away from subsistence
              farming.
            </p>

            <p>
              Climate Change notably does not have that significant effect on
              global crop production. However, that isn't the case in developing
              economies especially those in Africa. Our World In Data showed
              that in Kenya the crop production was reduced by 12.5% for maize,
              in theory the achievable yield could be twice or even three times
              what exists, but existing farming practices don't allow for this.
            </p>

            <div className="flex items-center justify-center pb-8">
              <img
                alt="Yield Gaps in Food Systems, Kenya, Maize"
                src="/src/assets/images/series/climate-change/kenya-maize-climate_1350.png"
                className="object-cover w-3/4 card"
              ></img>
            </div>

            <p>
              By as soon as the year 2050 the average temperature could rise up
              to 2.5°C it might not seem like much but it could be the reason
              for a larger conflict. The Institute for Economics and Peace
              estimates in worst case scenario up to 1.2 billion people will at
              risk of being displaced by 2050. Of that according to the World
              Bank 216 million will be internally displaced due to Climate
              Change.
            </p>

            <p>
              There isn't much data available yet on the subject and averages
              tend to be misleading. The studies themselves are often specific
              to wealthier developed regions and there are few studies in the
              regions most impacted by climate change. Some studies suggest that
              under the current climate scenario the yields could be reduced by
              as much as 10-30% by 2050.
            </p>

            <ChartWrapper>
              <h2 className="ms-4">Yield Gap of Staple Grains</h2>
              <h3 className="ms-4">Africa 2022</h3>
              <YieldGap data={yield_gap} geo={africa_geo} id={"yield-gap"} />
            </ChartWrapper>

            <p>
              There's a lot of naunce lost especially considering how different
              the climate can be in parts of Africa. However the main point is
              to show that the attainable yields for countries is still
              significantly higher than the potential loses. But this is only in
              specific cases when extreme climate events do not occur. Which
              given what climate change is doing will likely increase in
              frequency over the years.
            </p>

            <p>
              Climate change will make extreme weather events more common. In
              parts of Africa this can differ between drought, flash flooding,
              and extreme heat. Countries can do a lot to prevent the loss of
              lives due to these disasters but things like crops can still be
              destroyed due to these disasters. Having a stable supply of crops
              is a necessity to prepare for these events to prevent famine and
              food shortages.
            </p>

            <p>
              It's important to note that while food affordability is only one
              issue that many countries could face. It is one of the most
              important as crop failures will force climate refugees from their
              homes into other places. For the majority of these climate
              refugees they will be internally displaced in their home
              countries. This is especially problematic given the slow and
              unequal growth of crop yields in places such as Sub-Saharan Africa
              where the population is expected to grow to 2.1 billion.
            </p>

            <ChartWrapper>
              <h2 className="ms-4">
                Annual Yield Per Hecta Acre, Cereal Yields
              </h2>
              <h3 className="ms-4">Sub-Saharan Africa 1990-2020</h3>
              <CerealYields
                data={cereal_yields_ssa_countries}
                cereal_yields={cereal_yields_ssa}
                id={"cereal-yields"}
              />
              <p className="source ms-4">
                Note: Cereals include wheat, rice, maize, barley, oats, rye,
                millet, sorghum, buckwheat, and mixed grains.
              </p>
            </ChartWrapper>

            <p>
              Data released by the UN FAO showcases the stagnant growth of
              agricultural development in countries. Southern Africa was an
              exception and its mainly because of South Africa. The other
              countries in the region did not experience any growth over the
              three decades. This is a similar trend seen in many countries in
              Sub-Saharan Africa.
            </p>

            <p>
              So why is this happening? Subsistence farming continues to be the
              dominant form of farming in most nations. For the most part
              investments in rural development and agriculture were put aside by
              most countries that has largely been neglected since the 2010s by
              most nations.
            </p>

            <p>
              Let's look at an example where yields for grains do not change and
              that the total number of hectacres farmed by subsistence farmers
              remains largely unchanged. While its unlikely for some countries
              like Ethopia and South Africa to see a decrease in productivity
              for other african countries it can show us what the future could
              look like if countries don't continue to invest in improvements to
              agriculture.
            </p>

            <ChartWrapper>
              <h2 className="ms-4">
                Unchanged Total Production of Grains to Increased Population
              </h2>
              <h3 className="ms-4">Sub-Saharan Africa, 2021 to 2050</h3>
              <GrainProduction
                data={africa_grain_projection}
                geo={africa_geo}
                id={"grain-production"}
              />
            </ChartWrapper>
            <p>
              For African countries there is still a lot which they can do. But
              the cost involved are out of the budget of many African countries.
              Here are three staple crops within Africa and the yield gaps which
              exist today. While a lot of data is missing it shows us the
              progress that has yet to be made.
            </p>
            <p>
              While these issues like would not be solved by the end of the
              decade. Considerable progress can be made and investing more would
              push us towards equitable solutions.
            </p>
          </div>
        </div>
      </main>

      <Sources items={citedSources} />
      <Footer />
    </>
  );
}

export default ClimateChange;
