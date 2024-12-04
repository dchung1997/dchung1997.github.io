import { Link, useLocation } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import ServicingAndExpenditures from "../../components/charts/Debt/ServicingAndExpenditures";
import Undernutrition from "../../components/charts/Debt/Undernutrition";
import TotalAgricultureSpending from "../../components/charts/Debt/TotalAgriculturalSpending";
import GDPDebt from "../../components/charts/Debt/GDPDebt";


import useTitle from "../../hooks/useTitle";

import debtServicing from "../../assets/data/Food-Affordability/Debt/debt-servicing-expenditures.json";
import undernutritionPrevalence from  "../../assets/data/Food-Affordability/Debt/undernutrition_prevalence_africa.json";
import percentExpenditureAgriculture from "../../assets/data/Food-Affordability/Debt/percentage_expenditure_agriculture_africa.json";
import gdpDebt from "../../assets/data/Food-Affordability/Debt/gdp-debt.json";
import africa_geo from "../../assets/data/Food-Affordability/Climate-Change/africa_outline_with_countries.json";
import world_geo from "../../assets/data/Food-Affordability/Debt/world.json";


function Debt() {
  useTitle("Debt & Future Development");

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <ArticleHeader
          title="Debt & Future Development"
          date={new Date("2024-12-03")}
        />
        <div className="divide-y divide-gray-200">
          <div className="prose max-w-none pb-8 pt-10">
            <ChartWrapper>
              <GDPDebt data={gdpDebt} geo={world_geo} />
            </ChartWrapper>

            <p>
              Debt is an issue that has been a persistent for many countries and
              their growth. Since the pandemic many nations have faced even
              harder hardship in the development of their economies. A region in
              particular that has been impacted by this significantly is
              Sub-Saharan Africa. Unlike other places the debt to gdp ratio of
              countries in the region are fairly small. However, limits to
              borrowing and high interest costs put large burdens on their
              economies.
            </p>

            <ChartWrapper>
              <h2>Credit Rating African Countries</h2>
              <div class="overflow-x-auto scroll-table">
                <table className="table-fixed overflow-auto min-w-full">
                  <tbody>
                    <tr>
                      <th></th>
                      <th>S&P</th>
                      <th>Moody's</th>
                      <th>Rating</th>
                    </tr>
                    <tr>
                      <td>Botswana</td>
                      <td>BBB+</td>
                      <td>A3</td>
                      <td>Low Medium</td>
                    </tr>
                    <tr>
                      <td>Mauritius</td>
                      <td>BBB-</td>
                      <td>Baa3</td>
                      <td>Low Medium</td>
                    </tr>
                    <tr>
                      <td>Morocco</td>
                      <td>BB+</td>
                      <td>Ba1</td>
                      <td>Non-Investment Grade</td>
                    </tr>
                    <tr>
                      <td>Ivory Coast</td>
                      <td>BB</td>
                      <td>Ba2</td>
                      <td>Non-Investment Grade</td>
                    </tr>
                    <tr>
                      <td>South Africa</td>
                      <td>BB-</td>
                      <td>Ba2</td>
                      <td>Non-Investment Grade</td>
                    </tr>
                    <tr>
                      <td>Seychelles</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Namibia</td>
                      <td></td>
                      <td>B1</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Benin</td>
                      <td>BB-</td>
                      <td>B1</td>
                      <td>Non-Investment Grade</td>
                    </tr>
                    <tr>
                      <td>Senegal</td>
                      <td>B+</td>
                      <td>B1</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Rwanda</td>
                      <td>B+</td>
                      <td>B2</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Tanzania</td>
                      <td></td>
                      <td>B1</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Lesotho</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Zambia</td>
                      <td>SD</td>
                      <td>Caa2</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Uganda</td>
                      <td>B-</td>
                      <td>B3</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Cape Verde</td>
                      <td>B</td>
                      <td></td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Togo</td>
                      <td>B</td>
                      <td>B3</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Angola</td>
                      <td>B-</td>
                      <td>B3</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Chad</td>
                      <td>B-</td>
                      <td></td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Kenya</td>
                      <td>B-</td>
                      <td>Caa1</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Madagascar</td>
                      <td>B-</td>
                      <td></td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Swaziland</td>
                      <td></td>
                      <td>B2</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Cameroon</td>
                      <td>B-</td>
                      <td>Caa1</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Egypt</td>
                      <td>B-</td>
                      <td>Caa1</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Gabon</td>
                      <td>N/A</td>
                      <td>Caa2</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Nigeria</td>
                      <td>B-</td>
                      <td>Caa1</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Congo</td>
                      <td>B-</td>
                      <td>B3</td>
                      <td>Highly Speculative</td>
                    </tr>
                    <tr>
                      <td>Tunisia</td>
                      <td>N/A</td>
                      <td>Caa2</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Burkina Faso</td>
                      <td>CCC+</td>
                      <td></td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Mozambique</td>
                      <td>CCC+</td>
                      <td>Caa2</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Republic of the Congo</td>
                      <td>CCC+</td>
                      <td>Caa2</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Ethiopia</td>
                      <td>SD</td>
                      <td>Caa3</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Mali</td>
                      <td></td>
                      <td>Caa2</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Niger</td>
                      <td></td>
                      <td>Caa3</td>
                      <td>Substantial Risks</td>
                    </tr>
                    <tr>
                      <td>Ghana</td>
                      <td>SD</td>
                      <td>Caa2</td>
                      <td>Substantial Risks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <span className="source">
                Source: Trading Economics | Credit Ratings | Africa
              </span>
            </ChartWrapper>

            <p>
              Countries often have to pick and choose what and how they solve
              issues. Often issues like climate change are not an immediate
              priority for nations that struggle to get electricity or clean
              water to households. Debt burdens have taken an larger amount of
              government spending for most countries.
            </p>

            <ChartWrapper>
              <ServicingAndExpenditures data={debtServicing} />
            </ChartWrapper>

            <p>
              For example recently at COP29 developed countries pledged $1.3
              trillion dollars annually by 2035 to help finance developing
              nations clean energy infrastructure. While there has also been
              $300 billion pledged towards public finances the vast majority of
              funding comes from private means. These pledges however don't
              necessarily mean low interest and may cause debt servicing
              spending for developing countries to worsen overtime. That is, if
              these finances are used at all.
            </p>

            <p>
              What exactly does that mean? And how exactly does this relate for
              Food Affordability? These are questions you might be asking
              yourself. These are important things to think about when
              considering other policies is seeing how countries are approaching
              these issues when it comes to funding future programs.
            </p>

            <p>
              The majority of developing countries struggling to deal with food
              insecurity had low credit scores. If we use the pledges given for
              clean energy as an example we see that for many developing nations
              the finances they would be provided would eitherwise by
              unaffordable or would greatly hinder the development of their
              economies.
            </p>

            <p>
              Being put in a situation where you need to choose between feeding
              your population and being put into more debt is a hard situation
              to be in. Unlike in the example in which countries can choose to
              invest in other forms of energy production, that isn't really
              possible in this scenario. Another issue is that funding and
              interest in these programs from other nations can be low. For the
              vast majority of developed countries the food security of another
              nation especially one on another continent from them isn't
              necessarily an issue.
            </p>

            <p>
              Even for relatively basic development many developing countries
              are being forced into debt which they may or may not be able to
              repay. Not because they don't necessarily want to. But because the
              investments may not result in any form of significant economic
              gain which would be required for these high interest loans.This is
              especially becoming problematic in Africa where many countries are
              currently struggling to make repayments. As a result for many
              countries progress is stalling and in many cases reversing for
              some issues.
            </p>

            <ChartWrapper>
              <Undernutrition data={undernutritionPrevalence} />
            </ChartWrapper>

            <p>
              By the year 2050 the population of Africa is expected to double to
              2.5 billion. Without improvements to food systems 350 million
              Africans are expected to be undernourished. As it stands currently
              the number of people sufferring from these conditions is
              increasing even if the proportion of them is decreasing. Though, it's hard
              to call it progress as in the recent decade large amounts of
              progress has reversed.
            </p>

            <p>
              In this series we looked at ways governments have gone about
              addressing thes issues and the potential solutions which
              governments could use to address issues in regards to food
              insecurity and undernutrition. But the problems at their core are
              hard to solve for. The lack of available finances and funding to
              allow for the development of agriculture often aren't there or are
              unaffordable for countries. At the African Union's 4th Climate
              Summit, African Nations called out to the world for help in
              addressing the issue of inadequate funding.
            </p>

            <ChartWrapper>
              <TotalAgricultureSpending data={percentExpenditureAgriculture} geo={africa_geo} id={"agri-spending"}/>
            </ChartWrapper>

            <p>
              The changes needed for future generations are happening too slowly
              if they happening at all. African countries are hesitant to invest
              in agriculture due to the costs involved and the uncertain
              outcomes that will come with many issues like climate change. In
              the countries of South Asia we see how dealing with hunger can
              solve many of the issues related to health outcomes such as child
              mortality and how exactly they dealt with it. It's still possible
              to prevent the deaths of tens if not hundreds of millions of
              people. But funding for these issues often does not exist at the
              scale required to make these changes.
            </p>
          </div>
        </div>
      </main>

      {/* <Sources items={citedSources} /> */}
      <Footer />
    </>
  );
}

export default Debt;
