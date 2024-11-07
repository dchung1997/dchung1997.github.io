import { Link, useLocation } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import DivergingBoxPlot from "../../components/charts/Food-Affordability/DivergingBoxPlot";

import useTitle from "../../hooks/useTitle";

import income_difference from "../../assets/data/Food-Affordability/income_difference.json";
import annual_change from "../../assets/data/Food-Affordability/annual_change.json";

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

            <p> Placeholder for yield gap here. </p>

            <p>
              There's a lot of naunce lost especially considering how different
              the climate can be in parts of Africa. However the goal of the
              studies themselves attempt to show that the attainable yields for
              countries is still significantly higher than the potential loses.
            </p>

            <p>
              Climate change will make extreme weather events more common. In
              parts of Africa this can differ between drought, flash flooding,
              and extreme heat. Countries can do a lot to prevent the loss of
              lives due to these disasters but things like crops can still be
              destroyed due to these disasters.
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

            <div className="flex items-center justify-center pb-8">
              <img
                alt="Cereal Yields Annual Per Hecta Acre, Sub Saharan Africa"
                src="/src/assets/images/series/climate-change/cereal-yields-annual.PNG"
                className="object-cover w-3/4 card"
              ></img>
            </div>

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
              dominant form of farming in most nations. Investments in rural
              development and agriculture were put aside by most countries that
              has largely been neglected since the 2010s by most nations.
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
          </div>
        </div>
      </main>

      <Sources items={citedSources} />
      <Footer />
    </>
  );
}

export default ClimateChange;