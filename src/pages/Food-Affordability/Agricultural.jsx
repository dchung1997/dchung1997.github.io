import * as d3 from "d3";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import Beeswarm from "../../components/charts/Beeswarm/Beeswarm";

import useTitle from "../../hooks/useTitle";

import country_affordability from "../../assets/data/Food-Affordability/country_affordability_data.json";
import income_consumption_data from "../../assets/data/Food-Affordability/income_consumption_data.json";

function Agricultural() {
  useTitle("Agriculture Subsidies & Rural Development");

  const citedSources = [""];

  const data = country_affordability.data;
  const populationExtent = d3.extent(data, (d) =>
    parseInt(d.value.replace(/,/g, ""))
  );
  const africa = data.filter((d) => d.region === "Africa");
  const extentPercentile = d3.extent(
    income_consumption_data,
    (d) => d["avg_welfare"]
  );

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <ArticleHeader
          title="Agriculture Subsidies & Rural Development"
          date={new Date("2024-11-01")}
        />
        <div className="divide-y divide-gray-200">
          <div className="prose max-w-none pb-8 pt-10">
            <p>
              While Food Insecurity and Hunger are issues that still impact most
              of the world for this article we'd like to focus on a region that
              is disproportionately impacted by it. Sub-Saharan Africa remains
              one of the few regions where a many of the countries are still
              struggling to deal with severe food insecurity.
            </p>
            <div className="grid grid-cols-8 pt-4 pb-8 chart-wrapper">
              <div className="col-start-2 col-span-6 chart card">
                <h2 className="ms-5">Food Affordability Africa</h2>
                <h3 className="ms-5">
                  Diet Cost by Percentage of Daily Income (2017 PPP){" "}
                </h3>
                <img
                  src="/src/assets/images/series/agriculture/legend.png"
                ></img>
                <Beeswarm
                  data={africa}
                  extent={extentPercentile}
                  radius={populationExtent}
                  removeTitle={true}
                />
                <span className="source ms-4">Source: World Bank, UN FAO </span>
              </div>
            </div>
            <p>
              Many governments in Africa are choosing to deal with this issue by
              increasing the funding for education for individuals. Their goals
              are relatively straightforward to improve educational outcomes in
              order to increase the number of possible skilled workers in the
              workforce. But how educational funding is distributed often leaves
              rural areas behind.
            </p>
            <p>
              In 2003 members of the African Union pledged to allocate 10% of
              their annual budgets towards agriculture and rural development
              under the Marputo Declaration it has been more than two decades
              since then and the program has been had mixed success. Of the 55
              member states only a few countries consistently achieved that
              target from 2000 to 2020.
            </p>
            <p>
              In the recent history of the Marputo Declaration investments by
              countries have varied quite significantly. While many countries
              from the 2004 to 2008 had increased government spending by the
              time of the great recession investments into agriculture began to
              decrease.
            </p>
            <p>
              Parts of Africa increased agricultural spending when they could
              while others fell into a slump. But by the COVID-19 Pandemic most
              countries felt the strain on their economies as money began to dry
              up.
            </p>

            <p>Placeholder</p>

            <p>
              Fairly recently under the Nairobi Declaration the African Union
              pledged to triple fertilizer production by 2034. While the
              declaration aimed at spreading awareness on the proper use of
              fertilize and had concrete goals such as reducing and restoring
              degraded land. There was relatively little on how countries would
              go about doing this.
            </p>

            <p>
              With Africa projected to grow to 2.5 billion by 2050 and 4.3
              billion in 2100. Now is a time more than ever for countries to
              recommit towards making the changes necessary to end issues like
              food insecurity and hunger. The Nairobi Declaration could be a way
              for countries to make that change. But for many countries the
              money just isn't there.
            </p>

            <p>
              Without concrete goals and metrics to help track progress for
              countries it can be hard to measure the impacts of programs.
              Issues may not be entirely visible at first glance. Take for
              example in Kenya where the increased usage of fertilizer led to an
              increase yields but came at a significant cost.
            </p>

            <p>
              As of 2024, 63% of Kenya's arable land is now acidic. While
              fertilizer usage has increased throughout Kenya the amount yielded
              has remained the same. This is an especially problematic when you
              consider how much food countries are producing per year.
            </p>

            <p>Placeholder</p>

            <p>
              Per Capita Production of Grains has consistently decreased since
              the 1960s. Theres a lot of reasons behind this, the population of
              Kenya has and is continuing to grow. This is a trend seen in other
              high fertilizer using countries. While the amount of land being
              used for farming has increased because the yield has remained
              relatively unchanged.
            </p>

            <p>
              Meaning that even though the amount of food being produced
              increased due to the amount of people being born there is less
              food per person. Increasing fertilizer usage alone isn't enough to
              increase the yields of crops.
            </p>

            <p>
              On the same note increasing fertilizer production does not
              necessarily make fertilizer more affordable for small scale
              farmers. A key issue missing from the Nairobi Declaration was the
              distribution of fertilizer to small scale farmers.
            </p>

            <p> Placeholder </p>

            <p>
              More needs to be done to address these issues but countries are
              often unable to deal with them. In places like South Asia we see
              that food subsidy programs are very well recieved by a majority of
              people when aimed at large numbers of people. Public Distribution
              Systems like those seen in India and Bangladesh could help
              billions of people in Africa.
            </p>

            <p>
              These programs however were proceeded by large investments into
              agriculture by South Asian countries. Heavy investments into
              fertilizers that made many South Asian countries into the largest
              producers staple crops such a rice and wheat. In Africa this is a
              problem that countries will likely need to solve at the same time.
            </p>

            <p>
              Having a central government offer a stable market rate in which
              farmers can sell goods to can provide a stable and consistent
              source of income. Farmer's Co-ops and Unions could allow for
              collective bargaining with governments to ensure annual increases
              in food prices. Governments can in return offer deliver and pick
              up of goods and services needed. They can help procure fertilizer
              and ensure its delivery to farmers before the start of the farming
              season.
            </p>

            <p>
              These are all issues and things that a Department of Agriculture
              could be responsible for. It would create more jobs to ensure the
              timely delivery and picking up of goods. Something that is often
              desperately needed but out of reach for small scale farmers is
              fertilizer. The distribution of fertilizer to seeds would reduce
              costs for small scale farmers. Governments can also set up
              departments with trained experts to help deal with these issues
              that often come with proper field management. Ensuring the proper
              rotation of crops to manage soil as needed.
            </p>

            <p>Placeholder</p>

            <p>
              Along with this, governments can start public works projects to
              create irrigation systems and ensure access to tools such as
              sprinklers and proper maintanence of fields. Systems like these
              were developed in South Asia throughout the 1900s. In many ways
              many parts of Sub-Saharan Africa are very similar to conditions
              seen in South Asia, though they do vary to some degree by country
              and region.
            </p>

            <p>Placeholder</p>

            <p>
              The issues to deal with water rights and distribution are a bit
              more complex while they are relatively few countries in South Asia
              in Sub-Saharan Africa many countries are dependent on water from
              mountains that may or may not be within their borders. Ethopia and
              Egypt is a case where this is an ongoing issue. In Central and
              Western Africa this plays a significant role in relationships and
              food security.
            </p>

            <p>
              Groups like the African Union could be places where conversations
              for these issues could be held on making fair and equitable
              agreements between nations. With climate change looming and the
              growing population of Africa cooperation between countries is the
              key to prevent the worst from happening.
            </p>

            <p>
              These policies could help reduce the growing gap between Rural and
              Urban areas, but the large investments required for this to happen
              make it unlikely for people such as politicians to be willing to
              implement these policies. As it stands most countries are
              struggling with a variety of issues from clean water to
              electricity. Where these resources goes tends to be towards urban
              centers.
            </p>

            <p>
              There is a lot that could be done to improve the lives of the
              billions who live as subsistence farmers in Africa. Ideas like
              these would be popular with many of Africa's working poor. But
              what is excluded from this deal are individuals in heavily
              urbanized areas.
            </p>
          </div>
        </div>
      </main>

      <Sources items={citedSources} />
      <Footer />
    </>
  );
}

export default Agricultural;
