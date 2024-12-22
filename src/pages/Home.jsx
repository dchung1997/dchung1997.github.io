import { Link } from "react-router-dom";

import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import Articles from "../components/ui/Series/Articles";

import useTitle from "../hooks/useTitle";

function Home() {
  useTitle("311");
  const imagePath = import.meta.env.VITE_IMAGE_PATH;
  const articles = [
    {
      title: "Food Affordability",
      link: "/food-affordability",
      time: "6m",
    },
    {
      title: "Child Mortality & Undernutrition",
      link: "/food-affordability/child-mortality",
      time: "8m",
    },
    {
      title: "Climate Change & Beyond",
      link: "/food-affordability/climate-change",
      time: "5m",
    },
    {
      title: "Agricultural Subsidies & Rural Development",
      link: "/food-affordability/agriculture",
      time: "6m",
    },
    {
      title: "Manufacturing & Urban Development",
      link: "/food-affordability/manufacturing",
      time: "5m",
    },
    {
      title: "Debt & Future Development",
      link: "/food-affordability/debt",
      time: "4m",
    },
  ];

  const meatSeries = [
    {
      title: "Animal Emissions",
      link: "/meat",
      time: "6m",
    },
    {
      title: "Meat Consumption",
      link: "/meat/consumption",
      time: "5m",
    },
    {
      title: "Factory Farming",
      link: "/meat/factory-farms",
      time: "5m",
    },
  ];

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <div className="divide-y divide-gray-200">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            {/* Latest Series Here / Banner / Should Only Link to Series*/}
            <div className="py-8 gap-4 grid">
              {/* Image left then details right. */}
              <div>
                <article>
                  <p className="text-1xl pb-1 text-left font-extrabold text-gray-600">
                    Latest Series
                  </p>
                  <Link to="/meat">
                    <p className="text-2xl font-extrabold hover:underline" >
                      Animal Emissions & Meat
                    </p>
                    <div className="pt-8 pb-8">
                      <img
                        src={`${imagePath}/series/emissions.png`}
                        className="object-cover md:w-auto"
                      ></img>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2">
                      <div>
                      <p className="text-2x1 font-extrabold">Summary</p>
                      <p className="pt-2 text-sm hover:underline mr-4">
                        Globally, livestock and animals are responsible for 37%
                        of all human-caused methane emissions and 65% of all
                        agriculturally related nitrogen emissions. Two of the
                        most significant causes of non-CO2 greenhouse emissions
                        are methane and nitrogren emissions. Those that tended
                        to do with the practice of farming animals and livestock
                        along with the feeding of livestock. These practices
                        alone contribute more than enough to surpass the limits
                        required by the Paris Accords of increasing the average
                        global temperature by 1.5ºC. Reducing these emissions is
                        a crucial step towards to greener and cleaner world.
                        But, the issues regarding this are complex.
                      </p>
                      </div>
                      <Articles articles={meatSeries} />
                    </div>

                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="pt-3 text-right text-sm leading-6 text-gray-500">
                        2024-12-06
                      </dd>
                    </dl>
                  </Link>
                </article>
              </div>
            </div>

            <hr/>

            <div className="py-8 gap-4 grid sm:grid-cols-1 md:grid-cols-2">
              {/* Image left then details right. */}
              <div>
                <Link to="/food-affordability">
                  <img
                    src={`${imagePath}/series/food-affordabilty-diet.png`}
                    className="object-cover md:w-auto"
                  ></img>
                </Link>
              </div>
              <div>
                <article>
                  <p className="text-1xl pb-1 text-left font-extrabold text-gray-600">
                    Interactive Series
                  </p>
                  <Link to="/food-affordability" className="hover:underline">
                    <p className="text-2xl font-extrabold">
                      Food Affordability & Undernutrition
                    </p>
                    <p className="pt-2 text-sm">
                      In 2023 around 2.33 billion people around the world faced
                      moderate to severe food insecurity. While most countries
                      are still struggling to deal with food security in some
                      form, in developing regions its impacts are proving to be
                      much worse. In this series, we'll be looking at these
                      issues and the problems many governments today are facing.
                      Along with what they are doing and could do given
                      additional funding.
                    </p>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="pt-3 text-right text-sm leading-6 text-gray-500">
                        2024-10-31
                      </dd>
                    </dl>
                  </Link>
                </article>
                <Articles articles={articles} />
              </div>
            </div>

            {/* 
              Series One Main Image then Articles 
              Similar to before except with a list of articles on topics and read times.
          */}



            {/* Something on the side of other shorts? */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
