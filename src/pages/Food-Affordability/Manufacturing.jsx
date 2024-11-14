import { Link, useLocation } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import Urbanization from "../../components/charts/Manufacturing/Urbanization";
import ChildObesity from "../../components/charts/Manufacturing/ChildObesity";
import ExtremePoverty from "../../components/charts/Manufacturing/ExtremePoverty";
import Accessibility from "../../components/charts/Manufacturing/Accessibility";
import TimeSaved from "../../components/charts/Manufacturing/TimeSaved";
import CropRotation from "../../components/charts/Manufacturing/CropRotation";

import useTitle from "../../hooks/useTitle";

import urbanization_data from "../../assets/data/Food-Affordability/Manufacturing/urbanization_data.json";
import urbanization_data_after from "../../assets/data/Food-Affordability/Manufacturing/urbanization_data_after.json";
import urbanization_no_data from "../../assets/data/Food-Affordability/Manufacturing/urbanization_no_data.json";

import geo from "../../assets/data/Food-Affordability/Climate-Change/africa_outline_with_countries.json";

function Manufacturing() {
  useTitle("Manufacturing and Urban Development");

  const citedSources = [
    "https://population.un.org/wpp/",
    "https://www.statista.com/statistics/1254364/poverty-headcount-ratio-in-africa-by-area-of-residence/",
    "https://extension.sdstate.edu/storage-life-vegetables",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC6819980/",
    "https://www.mckinsey.com/capabilities/sustainability/our-insights/green-energy-in-africa-presents-significant-investment-opportunities",
    "https://www.iea.org/reports/a-vision-for-clean-cooking-access-for-all",
    "https://www.fao.org/plant-production-protection/",
    "https://doi.org/10.2134/agronj2010.0211",
  ];

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <ArticleHeader
          title="Manufacturing & Urban Development"
          date={new Date("2024-11-01")}
        />
        <div className="divide-y divide-gray-200">
          <div className="prose max-w-none pb-8 pt-10">
            <p>
              It's estimated that approximately 60% of Africa's population is
              expected to live in urban areas by 2050. The urbanization of
              Africa is a growing trend and one that has been ongoing since the
              1960s. For food subsidy programs to work there needs to be a way
              to include these urban centers.
            </p>

            <ChartWrapper>
              <Urbanization
                firstData={urbanization_data}
                lastData={urbanization_data_after}
                noData={urbanization_no_data}
                geo={geo}
              />
            </ChartWrapper>

            <p>
              More often than not the policy makers behind these decisions need
              to draft policies that are seen favorably by the people who live
              in them. In order to ensure continued development and investment
              into these food programs urbanized areas need to be included in
              these conversations.
            </p>

            <p>
              For a lot of Africans living in urban areas the issues they deal
              with are different from those in rural areas. In rural areas 47%
              of households lived in extreme poverty while only 7% of urban one
              did. Food is generally more affordable in urban areas and is often
              not the main priority for people who live in these areas.
            </p>

            <ChartWrapper>
              <ExtremePoverty />
            </ChartWrapper>

            <p>
              Obesity is a growing problem in African countries while its not as
              severe in other regions like the Americas its still an issue.
              Malnutrition still remains a problem even in urban households for
              most of Africa. Issues like stunting still remain even as
              households have more access to calorically dense food. What's
              often neglected are fruits and vegetables in many cases even
              though issues like extreme poverty have ended food is still
              unaffordable.
            </p>

            <p>
              There are often many underlying issues as to why this is the case.
              Often, refrigeration is not as widely available. Infrastructure
              for the transporation of goods to the storage of it in warehouses
              or grocery stores do not have the adequate means of keeping
              certain kinds of fruits and vegetables stocked simply because they
              may go bad during transportation or have significantly reduced
              shelf lifes.
            </p>

            <p>
              While many staple foods such as sweet potatoes or carrots have
              long shelf lives many others don't necessarily have the same
              amount. Often the conditions for these fruits and vegetables can
              prevent them from being stocked at many places and for others
              making it unaffordable for many households. These are commonly
              known as food deserts.
            </p>

            <ChartWrapper>
              <h3 className="font-bold text-2xl">Staple Foods</h3>

              <table className="table-fixed">
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Environment</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Storage Life</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cassava (fresh) </td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>85%-90%</td>
                    <td>2-3 days</td>
                  </tr>
                  <tr>
                    <td>Cassava (dried) </td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>85%-90%</td>
                    <td>5-6 months</td>
                  </tr>
                  <tr>
                    <td>Beets</td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>95-98%</td>
                    <td>4-10 months</td>
                  </tr>
                  <tr>
                    <td>Potatoes</td>
                    <td>Humid</td>
                    <td>45°F</td>
                    <td>95%</td>
                    <td>2-9 months</td>
                  </tr>
                  <tr>
                    <td>Carrots</td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>95-98%</td>
                    <td>5-6 months</td>
                  </tr>
                  <tr>
                    <td>Radishes</td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>95-98%</td>
                    <td>3-4 weeks</td>
                  </tr>
                  <tr>
                    <td>Sweet Potatoes</td>
                    <td>Warm and Humid</td>
                    <td>50-60°F</td>
                    <td>90-95%</td>
                    <td>6-9 months</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="font-bold text-2xl">Vegetables</h3>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Environment</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Storage Life</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Asparagus</td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>95-98%</td>
                    <td>2-3 weeks</td>
                  </tr>
                  <tr>
                    <td>Broccoli</td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>95-98%</td>
                    <td>2-3 weeks</td>
                  </tr>
                  <tr>
                    <td>Cabbage</td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>95-98%</td>
                    <td>1-6 months</td>
                  </tr>
                  <tr>
                    <td>Lettuce and Other Greens</td>
                    <td>Cool and Humid</td>
                    <td>32-36°F</td>
                    <td>95-98%</td>
                    <td>1-2 weeks</td>
                  </tr>
                  <tr>
                    <td>Onions (Bulbs)</td>
                    <td>Cool and Dry</td>
                    <td>32-40°F</td>
                    <td>65%</td>
                    <td>6-9 months</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="font-bold text-2xl">Fruits</h3>

              <table className="table-fixed">
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Environment</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Storage Life</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Eggplants</td>
                    <td>Warm and Humid</td>
                    <td>50-54°F</td>
                    <td>90-95%</td>
                    <td>1-2 weeks</td>
                  </tr>
                  <tr>
                    <td>Peppers</td>
                    <td>Humid</td>
                    <td>45°F</td>
                    <td>95%</td>
                    <td>2-3 weeks</td>
                  </tr>
                  <tr>
                    <td>Squash (Summer)</td>
                    <td>Humid</td>
                    <td>45°F</td>
                    <td>95%</td>
                    <td>1-2 weeks</td>
                  </tr>
                  <tr>
                    <td>Tomatoes</td>
                    <td>Warm and Humid</td>
                    <td>50-60°F</td>
                    <td>90-95%</td>
                    <td>2-14 days</td>
                  </tr>
                  <tr>
                    <td>Watermelon</td>
                    <td>Warm and Humid</td>
                    <td>50-60°F</td>
                    <td>90-95%</td>
                    <td>2-3 weeks</td>
                  </tr>
                </tbody>
              </table>
              <span className="source">
                {" "}
                Source: South Dakota State, Storage Life of Vegetables, Rhoda
                Burrows{" "}
              </span>
            </ChartWrapper>

            <p>
              Often the existence of food deserts can increase the rate of
              overweight and obese individuals. It has become especially
              problematic in children. Where in urban areas overweight and
              obesity rates were more than double those found in rural areas
              according to WHO criteria. Approximately 22.6% of school aged
              children were overweight or obese with only 8.4% in rural areas.
            </p>

            <ChartWrapper>
              <ChildObesity />
            </ChartWrapper>

            <p>
              Something as simple as canned foods could greatly increase the
              available of healthy and nutritious meals in households. This can
              be especially important as refrigeration and electricity are often
              inaccessible to rural areas where infrastructure is expensive and
              unaffordable. Canned fruits and vegetables could greatly increase
              the lifespan of these ingredients and make them affordable and
              available to households.
            </p>

            <p>
              In the case of Sub-Saharan Africa manufacturing is even more
              important due to the lack of refrigeration in most rural areas. By
              the year 2050 its estimated that 1.2 billion Africans will be
              without any form of electricity. On the same note 920 million
              Africans lack access to clean cooking. That also could double to
              1.8 billion people.
            </p>

            <ChartWrapper>
              <Accessibility />
            </ChartWrapper>

            <p>
              Manufacturing is not only a core step in increasing food security
              for African households. But also in the practice of cleaner
              cooking practices. It might not be unreasonable to take this a
              step further and distribute these goods as premade meals to
              households. From soups to packaged meals. In many areas access to
              safe drinking water is limited these same systems could be used to
              distribute these goods.
            </p>

            <p>
              This would also significantly save the amount of time rural
              households would spend on a variety of issues. Approximately 4 in
              5 African households spend an average of 5 hours per day oncooking
              related tasks. If the time the average African spent was reduced
              from 5 hours a day on cooking to 1 hour it would free up the
              schedule for many African household keepers to spend on more
              economically productive tasks. This could possibly allow for an
              increased role of women in society for places such as businesses.
              Allowing for increased economic mobility of households.
            </p>

            <ChartWrapper>
              <TimeSaved />
            </ChartWrapper>

            <p>
              Along with this the additional procurement of fruits and
              vegetables allows a government to better allow for the management
              of fields and soil. As fields cannot consistently output the same
              crops and maintain the health of the soil. Crop rotations are
              important to maintain and preserve top soil. This could allow
              farmers to reduce deforestation especially in vulnerable areas
              like the Congo Rainforest while also allowing for a consistent and
              reliable source of income for farmers. Giving them the ability to
              participate economically and not just subsist.
            </p>

            <p>
              This would allow for governments to better manage food security as
              another issue that is often overlooked is when farmers choose to
              farm more profitable crops over less profitable ones. Crop
              rotations can be ignored for more profitable practices in the
              short term even at the harm of future crop yields. As the majority
              of small scale farmers do not have advanced degrees they often
              have limited knowledge on these issues. On the same note It could
              also potentially allow for farmers to be paid for the usage of
              cover crops when needed to preserve yield quality.
            </p>

            <p>
              Crop rotations also have varying different types and kinds
              depending on the crop and climate. For example in a tropical
              climate crops can grow year round. Meaning that instead of a
              yearly basis for crop rotations it is instead a continual process.
              This however does not necessarily mean that complex crop rotations
              are happening if they are happening at all. An example would be a
              one year rotation or 2 crop rotation for example Corn and Soybeans
              that overtime will result in long term issues such as topsoil
              erosion, reduced yields, and weeds.
            </p>

            <p>
              Every year up to 40 percent of crops are lost due to plant pests
              and diseases. Crop Rotations are important to prevent the worst
              case scenarios for farmers in which they loss a significant
              portion or a majority of their harvest. For example in a 1 year
              crop rotation if pests or disease impact 1 type of crop up to 50%
              of the crops are impacted. Multi-year crop rotations allow for
              better management of pests and disease while offsetting loses for
              farmers. However, these can get complex quickly and access to
              seeds often leave large barriers to entry.
            </p>

            <ChartWrapper>
              <CropRotation />
              <span className="source ms-12">
                Note: For illustrative purposes. Actual crop rotations may vary
              </span>
            </ChartWrapper>

            <p>
              A study from the University of Minnesota found that crop rotations
              could increase yields for small scale farmers by as much as 41%
              for corn yields. This however doesn't necessarily mean that it
              results in large yield increases but in many cases can increase
              yields where soil otherwise may be improperly managed.
            </p>

            <ChartWrapper>
              <h2>Average Corn Yields with Crop Rotations</h2>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th>Management system</th>
                    <th>Weed management</th>
                    <th>Nutrient application</th>
                    <th>2 Year Rotation</th>
                    <th>4 Year Rotation</th>
                    <th>Percent Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Organic</td>
                    <td>Tillage only</td>
                    <td>Manure</td>
                    <td>113 bushels per acre</td>
                    <td>142 bushels per acre</td>
                    <td>25%</td>
                  </tr>
                  <tr>
                    <td>Zero-input</td>
                    <td>Tillage only</td>
                    <td>None</td>
                    <td>55 bushels per acre</td>
                    <td>77 bushels per acre</td>
                    <td>41%</td>
                  </tr>
                  <tr>
                    <td>High-input</td>
                    <td>Tillage + broadcast herbicide</td>
                    <td>Broadcast fertilizer</td>
                    <td>151 bushels per acre</td>
                    <td>146 bushels per acre</td>
                    <td>0%*</td>
                  </tr>
                  <tr>
                    <td>Low-input</td>
                    <td>Tillage + banded herbicide</td>
                    <td>Banded fertilizer</td>
                    <td>123 bushels per acre</td>
                    <td>139 bushels per acre</td>
                    <td>13%</td>
                  </tr>
                </tbody>
              </table>
              <span className="source">
                Source: Agronomic Performance of Cropping Systems with
                Contrasting Crop Rotations and External Inputs, ASA{" "}
              </span>
              <br />
              <span className="source">
                Note: * Not statistically significant.{" "}
              </span>
            </ChartWrapper>

            <p>
              Something as simple as government subsidies could incentivize
              farmers to make changes towards these practices. However, more
              often than not there are issues due to lack of transportation and
              existing infrastructure that results in spoilage of many of these
              crops during transportation are the reason why this isn't
              possible.
            </p>

            <p>
              Government planning could allow for the to urbanization of areas
              and create new cities. It could potentially lay the groundwork for
              future industries as well. For companies areas where there are
              already skilled individuals and already developed infrastructure
              make for ideal locations to start businesses. As these programs
              scale up they would likely provide tens of millions of jobs
              throughout Africa alone.
            </p>

            <p>
              This could help control the urban sprawl in many countries and
              allow for controlled city planning and development of
              manufacturing and distribution networks to support them. As
              heatwaves increase the need for city planning is becoming
              increasingly more important manufacturing could open the door for
              increased development and infrastructure for rural areas. Which
              currently is not happening nor is it expected to.
            </p>

            <p>
              There are many ways that governments can work towards improving
              the lives of both rural and urban areas. Allowing for the future
              development of Africa in the decades to come while also allowing
              for the upward mobility of those that exist today. The issues that
              Africa faces today are ones that need to be dealt with
              simultaneously. But more often than not for governments there
              isn't enough funding to allow for this.
            </p>
          </div>
        </div>
      </main>

      <Sources items={citedSources} />
      <Footer />
    </>
  );
}

export default Manufacturing;
