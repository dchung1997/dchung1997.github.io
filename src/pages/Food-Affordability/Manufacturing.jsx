import { Link, useLocation } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import useTitle from "../../hooks/useTitle";

function Manufacturing() {
  useTitle("Climate Change");

  const citedSources = [""];

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

            <img
              alt="Africa Urbanization, 1960 to 2020."
              src="/static/images/food-affordability/africa-urbanization.png"
              className="w-full h-auto"
            />

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

            <img
              alt="Share of Population Extreme Poverty, Africa, 2018 to 2024."
              src="/static/images/food-affordability/population-extreme-poverty.png"
              className="w-full h-auto"
            />

            <p>
              Obesity is a growing problem in African countries while its not as
              severe in other regions like the Americas its still an issue.
              Malnutrition still remains a problem even in urban households for
              most of Africa. Issues like stunting still remain even as
              housholds have more access to calorically dense food. What's often
              neglected are fruits and vegetables in many cases even though
              issues like extreme poverty have ended food is still unaffordable.
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

            <p>
              Often the existence of food deserts can increase the rate of
              overweight and obese individuals. It has become especially
              problematic in children. Where in urban areas overweight and
              obesity rates were more than double those found in rural areas
              according to WHO criteria. Approximately 22.6% of school aged
              children were overweight or obese with only 8.4% in rural areas.
            </p>

            <img
              alt="Overweight and Obese Children Ages 5 to 11."
              src="/static/images/food-affordability/overweight-obese-africa.png"
              className="w-full h-auto"
            />

            <p>
              Something as simple as canned foods could greatly increase the
              available of healthy and nutritious meals in households. Today
              nearly four in five Africans cook over open fires and biomass
              stoves spending on average five hours a day on tasks related to
              cooking. If instead the average household only needed to spend an
              hour a day on these tasks it would allow people especially women
              to spend more time on other things.
            </p>

            <p>
              This however goes beyond a typical food distribution systems but
              in places like Bangladesh they've recently begun to roll out
              vegetable sales. It might not be so far to see the inclusion of
              the manufacturing sector whether as government owned corporations
              or private industry. Canned fruits and vegetables would greatly
              increase the lifespan of these ingredients and make them
              affordable and available to households.
            </p>

            <p>
              It might not be unreasonable to take this a step further and
              distribute these goods as premade meals to households. From soups
              to packaged meals. In many areas access to safe drinking water is
              limited these same systems could be used to readily distribute
              these goods as well.
            </p>

            <p>
              Along with this the additional procurement of fruits and
              vegetables allows a government to better allow for the management
              of fields and soil. As fields cannot consistently output the same
              crops and maintain the health of the soil. Crop rotations are
              important to maintain and preserve top soil.
            </p>

            <img
              alt="Crop Rotation Plan"
              src="/static/images/food-affordability/crop-rotation.svg"
              className="w-full h-auto"
            />
            <span className="source">
              Crop Rotation Plans By: Lizzie Harper, lizzieharper.co.uk{" "}
            </span>

            <p>
              Government run operations could allow for the to urbanization of
              areas and create new cities. It could potentially lay the
              groundwork for future industries as well. For companies areas
              where there are already skilled individuals and already developed
              infrastructure make for ideal locations to start businesses. As
              these programs scale up they would likely provide tens of millions
              of jobs throughout Africa alone.
            </p>

            <p>
              There are many ways that governments can work towards improving
              the lives of both rural and urban areas. Allowing for the future
              development of Africa in the decades to come while also allowing
              for the upward mobility of those that exist today. The issues that
              Africa faces today are ones that need to be dealt with
              simultaneously.
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
