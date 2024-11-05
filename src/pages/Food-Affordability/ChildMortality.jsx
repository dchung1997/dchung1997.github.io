import { Link, useLocation } from "react-router-dom";
import * as d3 from "d3";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import DotChart from "../../components/charts/Food-Affordability/DotChart";
import DeathStackedBarChart from "../../components/charts/Child-Mortality/DeathStackedBarChart";
import NeoNatalDeaths from "../../components/charts/Child-Mortality/NeoNatalDeaths";
import SouthAsiaNeoNatal from "../../components/charts/Child-Mortality/SouthAsiaNeoNatal";

import useTitle from "../../hooks/useTitle";

import child_mortality_data from "../../assets/data/Food-Affordability/Child-Mortality/child_mortality.json";
import child_infant_deaths from "../../assets/data/Food-Affordability/Child-Mortality/child_infant_deaths.json";
import south_asia_stunting from "../../assets/data/Food-Affordability/Child-Mortality/south_asia_stunting.json";
import neo_natal_bangladesh from "../../assets/data/Food-Affordability/Child-Mortality/neonatal_bangladesh.json";
import neo_natal_pakistan from "../../assets/data/Food-Affordability/Child-Mortality/neonatal_pakistan.json";
import neo_natal_india from "../../assets/data/Food-Affordability/Child-Mortality/neonatal_india.json";

function FoodAffordability() {
  useTitle("Child Mortality & Undernutrition");

  const citedSources = ["https://data.unicef.org/topic/child-survival/under-five-mortality/", "https://ourworldindata.org/vaccination", "https://ourworldindata.org/child-mortality", 
  "https://ourworldindata.org/causes-of-death", "https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/child-mortality-and-causes-of-death", "https://www.sciencedirect.com/topics/medicine-and-dentistry/newborn-death",
  "https://ourworldindata.org/fertility-rate", "https://data.unicef.org/resources/data_explorer/unicef_f/", "https://ourworldindata.org/stunting-definition", 
  "https://www.who.int/news/item/16-08-2016-true-magnitude-of-stillbirths-and-maternal-and-neonatal-deaths-underreported", "https://nfsa.gov.in/portal/PDS_page", "https://nfsa.gov.in/portal/nfsa-act",
  "https://socialprotection.org/discover/programmes/public-food-distribution-system-pfds", "https://lpr.adb.org/resource/national-food-security-policy-2018-pakistan",
  "https://pib.gov.in/PressReleasePage.aspx?PRID=1941387", ];

  const cleaned_child_mortality_data = child_mortality_data.map((d) => {
    d.Year = new Date(d.Year);
    return d;
  });

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <ArticleHeader
          title="Child Mortality & Undernutrition"
          date={new Date("2024-11-01")}
        />
        <div className="divide-y divide-gray-200">
          <div className="prose max-w-none pb-8 pt-10">
            <p>
              Malnutrition especially undernutrition is often a comorbidity that
              worsens infectious diseases such as the common flu to malaria. It
              does this by weakening the immune system reducing its ability to
              fight infections. It's especially a problem among young children
              and elderly individuals and tends to be a common issue in
              increasing hospitalization of those impacted.
            </p>
            <p>
              To better understand the issue first let's look at Child Mortality
              rates over years. For the past three decades Child Mortality rates
              have gone down. It's a trend seen everywhere and its due to a
              variety reasons vaccines, medical advancements, and improvements
              to public infrastructure. Increasing the availability of things
              such as clean water and vaccines have saved lives.
            </p>
            <ChartWrapper>
              <DotChart
                data={cleaned_child_mortality_data}
                fx={"region"}
                title={"Child Mortality Rate Under 5 by Region"}
                id={"regional"}
              />
            </ChartWrapper>
            <p>
              While both Infant and Child Mortality Rates have and will continue
              to go down due to things such as the malaria vaccine and the
              promotion of safer medical and health practices like the
              introduction of clean water and sanitation. There are limitations
              to this.
            </p>

            <div className="flex items-center justify-center pb-8">
              <img
                src="/src/assets/images/series/child-mortality/infant-mortality-vaccines.png"
                className="object-cover w-3/4 card"
              ></img>
            </div>
            <p>
              Today approximately 1.54 million child deaths attributed to
              malnutrition are caused due to low birth weights. They're often
              infants who don't make it past the first few days of their life
              and they make up the majority of infant deaths. The issue itself
              is largely preventable.
            </p>

            <div className="flex items-center justify-center pb-8">
              <img
                alt="Undernutrition Deaths Chart"
                src="/src/assets/images/series/child-mortality/child-deaths-malnutrition-by-risk.png"
                className="object-cover w-3/4 card"
              ></img>
            </div>
            <p>
              Some things to note are neonatal preterm birth, neonatal asphyxia
              & trauma, neonatal sepsis & infection, and congenital birth
              defects. Neonatal Preterm Birth and Neonatal Asphyxia & Trauma
              tend to go together.
            </p>

            <div className="flex items-center justify-center pb-8">
              <img
                alt="Children Under 5 Cause of Death Death"
                src="/src/assets/images/series/child-mortality/causes-of-death-in-children-under-5.png"
                className="object-cover w-3/4 card"
              ></img>
            </div>

            <p>
              In the case of Neonatal Preterm Birth mothers who suffer from
              undernutrition can become anemic. Meaning they have low levels of
              oxygen in their blood. This can be life threatening and can cause
              issues such as low birth weights and preterm births. Meanwhile
              Neonatal Sepsis & Infection and Congenital Birth Defects are often
              made worse by undernutrition instead of being directly caused by
              it. About 85% of deaths of Neonatal Sepsis occur within the first
              24 hours of a child being born. In which a low birth weight
              significantly reduces the odds of survival.
            </p>

            <p>
              Similarly congenital birth defects are often caused by
              undernutrition. 9 out of 10 children born with serious birth
              defects are in low to middle income countries. Though there are
              other factors as well that contribute such as access to medical
              health care. Genetics made only a small number of cases.
            </p>

            <p>
              The majority of cases involving neonatal deaths occur because of
              the health and wellbeing of the mother. Reductions to child
              mortality now and in the future will be dependent on the condition
              of mothers. Meaning that undernutrition of adults not just
              children needs to be addressed to lower these rates.
            </p>

            <p>
              There have been many studies talking about ways of reducing infant
              deaths and child mortality talking about the effects of things
              such as Kangaroo care, but these don't solve the implicit issues
              that exist for the deaths that are occurring. Some places have
              recommended giving mothers yogurt or probiotics before child birth
              to reduce the chances of death. But that's can be like brushing
              your teeth before going to dentist after not brushing for years.
            </p>
            <div className="flex items-center justify-center pb-8">
              <img
                alt="Neonatal Deaths by Region"
                src="/src/assets/images/series/child-mortality/neonatal-deaths-by-region.png"
                className="object-cover w-3/4 card"
              ></img>
            </div>
            <p>
              The total number of neonatal deaths over the past 30 years has
              gone down im almost every region with the exception of Africa
              where it stayed the same. There could be many reasons for why this
              is occurring one of which being the number of under reported
              deaths but the population of places like South Asia and
              Sub-Saharan Africa went up significantly.
            </p>

            <p>
              In 1990 Sub-Saharan Africa had 516 million people living in it but
              in 2023 there were an estimated 1.24 billion. On the other hand in
              South Asia had 1.14 billion and grew to 1.94 billion.
              Approximately 63.7% of South Asia lived in rural areas in 2023
              while in Sub-Saharan Africa 57% lived in one. Its likely that the
              number of prenatal deaths aren't being reported on due to the age
              of the children while still being counted as a live birth. The
              World Health Organization estimates that the rates could by off by
              30% globally and up to 70% in some countries.
            </p>

            <p>
              There are more problems than just this. Censuses often have around
              a 10 year time period. In between a household could have more
              children to replace the ones that they've lost. Roughly 2/3rds of
              Africans are subsistence farmers. Technology could help deal with
              these issues allowing for the registration of newborn children and
              making it easier to record outcomes. Currently it's hard to say
              exactly how many children are dying each year but many groups such
              as the World Health Organization believe that current numbers
              could be large underestimates.
            </p>

            <p>
              Prenatal deaths are an issue and one which mostly originates with
              the mother. Life saving treatments do exist in some form for some
              cases but often, the weight of a child can determine their outcome
              and they may not matter in the short term as 75% of known neonatal
              deaths occur within the first 7 days with 36% in the first 24
              hours. Meaning most treatments do not work on these children.
            </p>

            <ChartWrapper>
              <DeathStackedBarChart
                data={child_infant_deaths}
                id={"DeathsStacked"}
              />
            </ChartWrapper>

            <p>
              From 2000 to 2022 neonatal deaths consistently accounted for 4 in
              10 deaths in children under the age of 5. While the number of
              child deaths under the age 5 has noticably decreased over the
              years the percentage of infant deaths under the age of 1 has taken
              a larger share.
            </p>

            <p>
              It's hard to say why this is happening but one possible reason is
              because of the number of total births has increased in the regions
              impacted. But this doesn't do a good job to explain the decrease
              in South Asian infant mortality rates that were cut by half.
            </p>
            <div className="flex items-center justify-center pb-8">
              <img
                alt="Timeline of Annual Total Births by Region"
                src="/src/assets/images/series/child-mortality/annual-number-of-births-by-world-region.png"
                className="object-cover w-3/4 card"
              ></img>
            </div>
            <p>
              At the start of the 2000s South Asia had a total of 1.87 million
              deaths but by 2022 that number had more than halved to 790,000.
              During the same period Africa's deaths stayed the same. So what
              caused South Asia to see these changes that didn't happen in
              Sub-Saharan Africa?
            </p>
            <div className="flex items-center justify-center pb-8">
              <img
                alt="Neonatal Deaths Barchart 1990 and 2022"
                src="/src/assets/images/series/child-mortality/neonatal-deaths-barchart.png"
                className="object-cover w-3/4 card"
              ></img>
            </div>

            <p>
              Food Subsidy Programs were overhauled in many parts of South Asia
              starting from the 2000s. The most notable of them all is India and
              its Public Distribution system which was overhauled in the late
              90s under the Targeted PDS plan that subsidized food and household
              essentials such as wheat, rice, suger and kerosene oil for 60
              million low income households.
            </p>

            <p>
              For households that lived under India's poverty line they were
              eligible for a monthly stipend of 10 or 20kgs of rice or wheat.
              For households above the Indian poverty the line they are able to
              buy food grains at 50% the cost of procurement (transportation and
              market rate). It was like this brief until 2002 in which the 50%
              subsidy was removed and instead a fixed price was initiated for
              staple grains based on 2002 prices. By 2013 prices were amended
              again this time they were made even cheaper with it being fixed at
              ₹3, ₹2, ₹1 for Rice, Wheat, and Millet. With India abandoning the
              poverty line metric completely in favor of allow states to decide
              instead.
            </p>

            <p>
              Bangladesh implemented a similar program under the same name but
              is fundamentally a different process. Involving specific policies
              to prevent severe food insecurity. Both nations decreased neonatal
              deaths by more than half over the period of two decades.
            </p>

            <p>
              Bangladeshes Public Food Distribution System is a combination of 8
              seperate programs aimed at various goals. A notable difference is
              its focus on targeted relief programs offered by the Bangladeshi
              government to its most vulnerable. However it also features a
              subsidy for food as well which recieved a similar level of funding
              to the targeted campaigns however not at the level of India's
              program.
            </p>

            <p>
              A country that did not undergo the same changes as Bangladesh and
              India was Pakistan which saw a minor decrease in neonatal deaths
              during the same time period as the two nations. Pakistan did not
              make any significant changes in reforms to their Public Food
              Distribution System until the start of 2018 under the National
              Food Security Policy.
            </p>

            <ChartWrapper>
              <h3 className="ms-4 pt-4">
                Neonatal Deaths, South Asia, 1990 to 2020
              </h3>
              <div className="w-full">
                <SouthAsiaNeoNatal
                  data={neo_natal_india}
                  title={"Total Number of Neonatal Deaths"}
                  subtitle={"India, 2000-2020"}
                  width={800}
                  id={"India"}
                  color={"orange"}
                />
              </div>
              <div className="display flex">
                <SouthAsiaNeoNatal
                  title={"Total Number of Neonatal Deaths"}
                  subtitle={"Bangladesh, 2000-2020"}
                  data={neo_natal_bangladesh}
                  fSize={14}
                  id={"Bangladesh"}
                  color={"blue"}
                />
                <SouthAsiaNeoNatal
                  data={neo_natal_pakistan}
                  title={"Total Number of Neonatal Deaths"}
                  subtitle={"Pakistan, 2000-2020"}
                  fSize={14}
                  id={"Pakistan"}
                  color={"red"}
                />
              </div>
            </ChartWrapper>

            <p>
              So why is it that both Bangladesh and India halved their neonatal
              deaths while Pakistans neonatal death rate only saw a small
              decrease? Can it be fully explained by the food programs above?
              Not exactly. Droughts were fairly common in Pakistan from 1998-2002
              there was a persistant drought meanwhile from 2020 to 2022 caused
              substantial damage along with unprecidented rainfall in 2010 and
              2022. Flooding is also becoming more and more common in
              Bangladesh. Climate change is having a signficiant impact on the
              region. However, Bangladesh is significantly more prepared for
              these events that Pakistan is.
            </p>

            <p>
              Stunting rates could possibly tell us how far countries have
              progressed but suprisingly Bangladesh had the lowest rate at
              around 26% while Pakistan and India were similarly placed at
              around 33%. So what does this tell us? While Public Food Programs
              helped with food insecurity and hunger they didn't necessarily
              have the nutritional requirements to prevent stunting. One thing
              that stands out is that fish is a staple of Bengali cuisine
              meanwhile in India and Pakistan it is far less popular.
            </p>

            <ChartWrapper>
              <NeoNatalDeaths data={south_asia_stunting} id={"NeoNatal"} />
            </ChartWrapper>

            <p>
              India and Bangladesh show us two very different but similar
              approaches in reducing neonatal deaths while also reducing hunger
              and poverty. India with subsidized staple foods and Bangladesh
              with specific policies aimed towards disadvantaged groups and
              those in rural areas. Along with both having some form of general
              subsidy, at the end of the day they both worked.
            </p>

            <p>
              The costs of these programs however were not equal. Bangladeshes
              programs costs a total of around 1.132 billion (2023-2024) while
              India's subsidy cost around 13.8 billion annually (2019-2020).
              India's Public Distribution System helps more than 800 million
              people every year. Meanwhile there were 34.4 million recipients
              from Bangladeshes program. India also decided to add a minimum
              amount free food for all qualifying households under their
              program, however this greatly increased the cost of the program as
              seen below.
            </p>

            <div className="grid grid-cols-8 pt-4 pb-8">
              <div className="card col-start-2 col-span-6 p-8">
                <h3 className="text-xl font-bold">Food Distribution Program Costs</h3>
                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>Total Cost Public Food Distribution Programs</th>
                      <th> Bangladesh </th>
                      <th> India </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Before</b>
                      </td>
                      <td>1.132 Billion </td>
                      <td>13.8 Billion</td>
                    </tr>
                    <tr>
                      <td>
                        <b>After</b>
                      </td>
                      <td>1.132 Billion</td>
                      <td>33.0 Billion</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>
                        {" "}
                        Cost Per Person of Public Food Distribution Programs{" "}
                      </th>
                      <th> Bangladesh </th>
                      <th> India </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b> Before </b>
                      </td>
                      <td>32.91</td>
                      <td>17.25</td>
                    </tr>
                    <tr>
                      <td>
                        <b>After</b>
                      </td>
                      <td>32.91</td>
                      <td>41.25</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>
                        {" "}
                        Total Number of Individuals Recieving Any Form Of
                        Assistance{" "}
                      </th>
                      <th> Bangladesh </th>
                      <th> India </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Total</b>
                      </td>
                      <td>34,414,000</td>
                      <td>800,000,000</td>
                    </tr>
                  </tbody>
                </table>
                <span className="source">
                  Sources: Ministry of Finance. n.d. Social Security Programs:
                  Fiscal Year 2023-24. Bangladesh & Revealing the Hidden
                  Production Costs of India’s Public Distribution System, Tata
                  Cornell Institute & Ministry of Consumer Affairs, Food &
                  Public Distribution India{" "}
                </span>
              </div>
            </div>
            <p>
              It's important to note that the two programs have seperate goals
              as India's program is a flat subsidy while Bangladesh's program is
              aimed around targeted intervention and humanitarian relief along
              with a work program in areas without many job prospects. Though
              the program has shifted away from parts over the years like the
              work program. What's notable here is how its impacts helped to
              also reduce extreme poverty.
            </p>

            <p>
              Overall, when we account for the total cost per person India's
              program before the inclusion of free rice it was significantly
              cheaper almost by 50%. This however changes when accounting for
              the free rice that was added recently. What's interesting to note
              is that India's Public Food Distribution Program technically still
              provides free food.
            </p>

            <p>
              When we consider this, the budget for India's Public Food
              Distribution Program is only slightly higher than that of
              Bangladeshes though only slightly. However there are many
              problems. The main reason why the subsidy worked in India is
              because it produces large quantities of grains and does not need
              to purchase large quantities of food on the global market to feed
              its own population.
            </p>

            <p>
              With that considered for farmers the selling of these grains can
              come at fixed costs in 2023 the Indian government procured rice at
              a rate of 23.07 per 100kg. Or about 0.23 per kg. During that same
              period rice cost around 0.55 per kg so around twice the amount. It
              wouldn't be unrealistic to see governments enact food subsidy
              programs based on similar ideas or reselling goods for half the
              cost of procurement.
            </p>
            <p>
              But does it make economic sense for governments to spend large
              amounts of money to solve issues like hunger and food insecurity?
              How exac
            </p>
          </div>
        </div>
      </main>

      <Sources items={citedSources} />
      <Footer />
    </>
  );
}

export default FoodAffordability;
