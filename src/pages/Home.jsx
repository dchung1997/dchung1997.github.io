import { Link } from 'react-router-dom';

import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";

function Home() {
  // Series and Articles.
  return (
    <>
      <Header />
      <main className="mb-auto border-b border-gray-400">
        <div className="divide-y divide-gray-200">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            {/* Latest Series Here / Banner / Should Only Link to Series*/}
            <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2">
              {/* Image left then details right. */}
              <div>
                <Link to="/food-affordability">                  
                  <img src='/src/assets/images/series/food-affordabilty-diet.png' className="object-cover md:w-auto" ></img>
                </Link>
              </div>
              <div>
                <article>
                  <p className="text-1xl pb-1 text-left font-extrabold text-gray-600">
                    Latest Series
                  </p>
                  <Link to="/food-affordability" className="hover:underline">       
                    <p className='text-2xl font-extrabold'>
                      Food Affordability & Undernutrition
                    </p>
                    <p className="pt-2 text-sm">
                      In 2023 around 2.33 billion people around the world faced moderate to severe food insecurity. 
                      While most countries are still struggling to deal with food security in some form, 
                      in developing regions its impacts are proving to be much worse. In this series,
                      we'll be looking at these issues and the problems many governments today are facing. 
                      Along with what they are doing and could do given additional funding.
                    </p>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="pt-3 text-right text-sm leading-6 text-gray-500">
                        2024-10-31
                      </dd>
                    </dl>
                </Link>
                </article>
                <div className="articles pt-3">
                  <p className='text-2x1 font-extrabold'>
                    Articles
                  </p>
                  <ul className="list-inside">
                    <li>Food Affordability</li>
                    <li>Child Mortality & Undernutrition</li>
                    <li>Climate Change and The Future</li>
                    <li>Agricultural Subsidies and Rural Development</li>
                    <li>Manufacturing and Urban Development</li>
                  </ul>   
                </div>                
              </div>
              {/* Articles Here. */}
            </div>

            {/* 
              Series One Main Image then Articles 
              Similar to before except with a list of articles on topics and read times.
          */}

            {/* Something on the side of other shorts? */}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Home;