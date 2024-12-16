import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scrollama, Step } from "react-scrollama";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ArticleHeader from "../../components/ui/ArticleHeader/ArticleHeader";
import ChartWrapper from "../../components/ui/ChartWrapper/ChartWrapper";
import Sources from "../../components/ui/Sources/Sources";

import SolarSystem from "../../components/charts/AnimalEmissions/SolarSystem";

import useTitle from "../../hooks/useTitle";

function AnimalEmissions() {
  useTitle("Animal Emissions");
  const imagePath = import.meta.env.VITE_IMAGE_PATH;
  const citedSources = ["https://ourworldindata.org/food-ghg-emissions", "https://www.science.org/doi/10.1126/science.aaq0216", "https://ourworldindata.org/environmental-impacts-of-food", "https://www.pnas.org/doi/10.1073/pnas.1308149110"]
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <ArticleHeader title="Animal Emissions" date={new Date("2024-12-16")} />
        <div className="divide-y divide-gray-200">
          <div className="prose max-w-none pb-8 pt-10">
            <div id="system">
              <figure className="sticky">
                <SolarSystem index={currentStepIndex} />
              </figure>
              <div className="sampleScroller">
                <Scrollama offset={0.5} onStepEnter={onStepEnter}>
                  <Step data={0} key={0}>
                    <div
                      style={{
                        padding: "10vh 0",
                        opacity: 0.99,
                      }}
                    >
                      <p>
                        The year is 2022. The COVID-19 pandemic is nearing its
                        peak. As the world continues to recover from disruptions
                        to the global economy. A new record is set as global
                        greenhouse emissions increase to 53.8 (Gt CO2eq). While
                        global emissions continue to rise, no country is close
                        to reaching the 1.5°C limit set up by the Paris Climate
                        Agreement in 2015.
                      </p>
                    </div>
                  </Step>
                  <Step data={1} key={1}>
                    <div
                      style={{
                        padding: "40vh 0",
                        margin: "30vh 0",
                        opacity: 0.99,
                      }}
                    >
                      <p>
                        Under the Climate Paris Accords 195 of the 196 nation
                        states represented in the UN came to an agreement of
                        limiting global emissions to just under 1.5°C. An
                        ambitious target set by the nations around the world.
                        However, as of 2024 no major country has come close to
                        reaching this target. It's estimated that in order for
                        there to be a 67% chance of staying under the 1.5°C
                        limit. Total global emissions from 2020-2100 would need
                        to stay under 500 billion tons of CO2 eq. (Gt CO2eq.) As
                        of 2024 most scientists predict that we will pass this
                        metric within the next 5 years.
                      </p>
                    </div>
                  </Step>
                  <Step data={2} key={2}>
                    <div
                      style={{
                        padding: "40vh 0",
                        margin: "30vh 0",
                        opacity: 0.99,
                      }}
                    >
                      <p>
                        Similarly for there to be a 50% chance of staying under
                        the 1.5°C limit set by the accords, global emissions
                        would need to stay under 705 billion tons of CO2
                        equivalent emissions. Estimates today by scientists put
                        us at breaking this limit by the mid 2030s.
                      </p>
                    </div>
                  </Step>
                  <Step data={3} key={3}>
                    <div
                      style={{
                        padding: "40vh 0",
                        margin: "30vh 0",
                        opacity: 0.99,
                      }}
                    >
                      <p>
                        As it currently stands the Meat & Dairy Industry is set
                        to produce approximately 811 billion tons of emissions
                        between 2020 and 2100. With Meat and Dairy accounting
                        for around 14.5% of all emissions and more than half of
                        all global food emissions. Meat and Dairy Emissions
                        alone set up a future where the Paris Climate Accords
                        are never met.
                      </p>
                    </div>
                  </Step>
                  <Step data={4} key={4}>
                    <div
                      style={{
                        padding: "40vh 0",
                        margin: "30vh 0",
                        opacity: 0.99,
                      }}
                    >
                      <p>
                        Accounting for just the total food emissions alone the
                        carbon budgets for staying under 1.5°C is out of reach.
                        While there is hardly anything left for anything else
                        under 2°C. Without cuts to total food emissions reaching
                        the 1.5°C limit set by the Paris Climate Accord is
                        fundamentally impossible.
                      </p>
                    </div>
                  </Step>
                  <Step data={5} key={5}>
                    <div
                      style={{
                        padding: "50vh 0",
                        margin: "30vh 0",
                        opacity: 0.99,
                      }}
                    >
                      <p>
                        With total food emissions reaching 1356 Gt by 2100
                        assuming that there was 67% chance to avoid 2.0°C. There
                        would only be 49 Gt remaining for non-food based
                        emissions. In 2022 global energy emissions alone reached
                        a new high of 53.8 Gt. On the current trajectory we
                        could break 2.0°C could happen as early as the 2040s.
                        With food and especially animal related emissions
                        contributing a significant factor to this.
                      </p>
                    </div>
                  </Step>
                  <Step data={6} key={6}>
                    <div
                      style={{
                        padding: "40vh 0",
                        margin: "30vh 0",
                        opacity: 0.99,
                      }}
                    >
                      <p>
                        Is it really possible to stay under the 1.5°C limit set
                        by the Paris Climate Accord? By the mid 21st century we
                        could use up the remaining 1816 Gts of our carbon budget
                        left for a 50% chance to stay under 2.0°C. The world is
                        getting warmer at anunsustainable rate. Without any
                        change to current emission rates the average world
                        temperature could easily surpace 3-4°C by the year 2100.
                      </p>
                    </div>
                  </Step>
                </Scrollama>
              </div>
            </div>
            <div
              style={{
                padding: "40vh 0 0 0",
                margin: "40vh 0 0 0",
              }}
            >
              <p>
                Globally it's estimated that food production is responsible for
                one-quarter of the world's greenhouse gas emissions. With
                animals being responsible for approximately 37% of all
                human-caused methane emissions and 65% of all agriculturally
                related nitrogen emissions. More than half of all food related
                emissions are related to the use of animals.
              </p>
              <div className="flex items-center justify-center pb-8">
                <img
                  src={`${imagePath}/series/animal-emissions/food-emissions.png`}
                  className="object-cover w-3/4 card"
                ></img>
              </div>

              <p>
                It shouldn't be too suprising to see that in comparison to the
                vast majority of crops emissions from animals such as cows and
                chickens to fish and seafood contribute so heavily towards
                greenhouse gas emissions. There can be other issues as well such
                as overfishing that is already an issue in many parts of the
                world. But even considering this emissions of livestock can be
                unequal.
              </p>

              <div className="flex items-center justify-center pb-8">
                <img
                  src={`${imagePath}/series/animal-emissions/food-emissions-supply-chain.png`}
                  className="object-cover w-3/4 card"
                ></img>
              </div>

              <p>
                When we take a look at total greenhouse emissions per kg of beef
                something interesting to note is how much of a difference
                developing countries had in emissions in comparison to more
                developed ones. In a study from 2013 we see places such as Latin
                America emissions for beef production were producing almost two
                times more emissions per kg of beef. For those in with even less
                developed infrastructure the amount changes to as much as ten
                times the amount of emissions.
              </p>

              <ChartWrapper>
                <h2>Greenhouse Gas Emissions Beef Production </h2>
                <img
                  src={`${imagePath}/series/animal-emissions/beef-emissions.png`}
                ></img>
                <span className="source">Source: Herrero et al., 2013 PNAS 110: 20888-20893</span>
              </ChartWrapper>

              <p>
                Issues like these are important to point out especially
                considering the needs of developing economies. The production of
                beef like many other meats is expected to increase considerably
                according to projections done by groups like the FAO. But the
                emissions for many of these animals aren't as simple as they
                seem and reducing emissions is an issue that should concern us
                all to reduce the impacts of climate change.
              </p>

              <p>
                For many of these countries a transition can be unaffordable. In
                many cases while the number of animals is increasing as a result
                of growing populations. However, it's still important to note
                issues such as sampling biases and to note that the study in
                question is more than a decade old now.
              </p>

              <p>
                These are issues that currently are being ignored or looked over
                as the majority of the focus by most organizations is on the
                reduction of fossil fuel based green house emissions. Which are
                very important and make up a significant portion of greenhouse
                emissions. But food emissions is still an issue even if it can
                be hard to talk about given that for many countries it can be
                about their future development in dealing with issues such as
                hunger and food insecurity.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Sources items={citedSources} />
      <Footer />
    </>
  );
}

export default AnimalEmissions;
