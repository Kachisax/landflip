import React from "react";
import buy from "../../Assets/buy.png";
import line from "../../Assets/title-line-2.png";
import "../../index.css";

const BuyLand = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-full pt-20 text-black flex-col md:flex hidden">
        <h1 className="text-center font-semibold text-5xl flex flex-col">
          Buy lands with high current and<br></br> future value
        </h1>
        <img src={line} className="w-60 mx-auto" alt="lands"></img>
        <div className="container px-40 mt-10 flex flex-row">
          <div className="columns-1 w-96 carr rounded overflow-hidden">
            <div className="column">
              <div className="card">
                <img
                  src={buy}
                  className="-mt-5 object-cover rounded"
                  alt="text"
                ></img>

                <h2 className="px-2 text-left mt-6 font-semibold">
                  Landflip offers a flexible payment scheme that is ideal for
                  partners who want to spread their money into smaller amounts
                  over time and receive returns as high as 75%.
                </h2>
              </div>
            </div>
          </div>
          <div className="columns-1 w-96 carr rounded overflow-hidden ml-10">
            <div className="column">
              <div className="card">
                <img
                  src={buy}
                  className="-mt-5 object-cover rounded"
                  alt="text"
                ></img>

                <h2 className="px-2 text-left mt-6 font-semibold">
                  Landflip offers a flexible payment scheme that is ideal for
                  partners who want to spread their money into smaller amounts
                  over time and receive returns as high as 75%.
                </h2>
              </div>
            </div>
          </div>
          <div className="columns-1  w-96 carr rounded overflow-hidden ml-10">
            <div className="column">
              <div className="card">
                <img
                  src={buy}
                  className="-mt-5 object-cover rounded"
                  alt="text"
                ></img>

                <h2 className="px-2 text-left mt-6 font-semibold">
                  Landflip offers a flexible payment scheme that is ideal for
                  partners who want to spread their money into smaller amounts
                  over time and receive returns as high as 75%.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-violet-900 w-52 py-4 rounded mt-10 text-white font-bold mx-auto">
          <a
            href="https://landflip.ng/land-locations.html"
            target="_blank"
            rel="noreferrer"
          >
            View Available Lands
          </a>
        </button>
      </div>
      {/* Mobile View*/}
      {/* Mobile View*/}
      {/* Mobile View*/}
      <div className=" w-full pt-20 text-black flex flex-col md:hidden lg:hidden">
        <h1 className="text-center font-semibold text-3xl flex flex-col">
          Buy lands with high current and<br></br> future value
        </h1>
        <img src={line} className="w-42 mx-auto" alt="lands"></img>
        <div className="container mt-10 flex flex-col">
          <div className="mx-auto">
            <div className="w-96 carr rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy}
                    className="-mt-5 object-cover rounded"
                    alt="text"
                  ></img>

                  <h2 className=" text-center mt-6 font-semibold">
                    Landflip offers a flexible payment scheme that is ideal for
                    partners who want to spread their money into smaller amounts
                    over time and receive returns as high as 75%.
                  </h2>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="w-96 carr rounded overflow-hidden mt-10">
              <div className="column">
                <div className="card">
                  <img
                    src={buy}
                    className="-mt-5 object-cover rounded"
                    alt="text"
                  ></img>

                  <h2 className="text-center mt-6 font-semibold">
                    Landflip offers a flexible payment scheme that is ideal for
                    partners who want to spread their money into smaller amounts
                    over time and receive returns as high as 75%.
                  </h2>
                </div>
              </div>
            </div>
            {/* Third */}
            <div className="w-96 carr rounded overflow-hidden mt-10">
              <div className="column">
                <div className="card">
                  <img
                    src={buy}
                    className="-mt-5 object-cover rounded"
                    alt="text"
                  ></img>

                  <h2 className=" text-center mt-6 font-semibold">
                    Landflip offers a flexible payment scheme that is ideal for
                    partners who want to spread their money into smaller amounts
                    over time and receive returns as high as 75%.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-violet-900 w-52 py-4 rounded mt-20 text-white font-bold mx-auto mb-5">
            <a
              href="https://landflip.ng/land-locations.html"
              target="_blank"
              rel="noreferrer"
            >
              View Available Lands
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BuyLand;
