import React from "react";
import Layout from "../../components/Layout";
import GUMDAM from "../../@assert/gundam-removebg-preview.png";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <section className="flex justify-around  bg-blue-200">
        <div className="flex mx-auto max-w-5xl min-[800px]">
          <div className="flex flex-row items-center  max-[780px]:w-full mx-auto max-[780px]:flex-col">
            <div className="w-full basis-1/2 max-[780px]:mt-8 max-[780px]:p-2">
              <h1 className="text-3xl max-[780px]:flex max-[780px]:justify-center max-[780px]:text-[32px] p-1 fantasy-text-one text-start">
                GUNDAM ON BASE{" "}
              </h1>
              <img
                className="w-[780px] h-[400px] mx-auto max-[780px]:w-[220px] min-[780px]:hidden max-[780px]:p-1 max-[780px]:h-[150px] max-[780px]:flex max-[780px]:justify-center"
                src={GUMDAM}
                alt=""
              />
              <h1 className="fantasy-text-menus text-1xl text-justify max-[780px]:text-[9px] max-[780px]:flex max-[780px]:justify-center max-[780px]:text-center  text-[#4b5563]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia repellendus pariatur, nemo perferendis provident
                laudantium inventore numquam quis, illum, dolore expedita nisi?
                Optio, quos! Perferendis nesciunt vel possimus iste earum.
              </h1>
              <div className="mt-2 flex justify-center">
                <button className="bg-[#5b21b6]  rounded-full h-8 w-96 shadow-md max-[780px]:w-full shadow-violet-600">
                  <p className="items-center fantasy-text-btn">
                    LFG GUNDAM ON BASE DEV BULLISH
                  </p>
                </button>
              </div>
            </div>
            <div className="place-items-center w-full basis-1/2 max-[780px]:hidden">
              <img
                src={GUMDAM}
                className="w-[780px] h-[400px] x-auto max-[780px]:w-[250px] max-[780px]:h-[250px] max-[780px]:flex max-[780px]:justify-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center bg-blue-200">
        <div className="flex flex-col">
          <div className="flex justify-around m-4 items-center  mx-auto max-w-5xl min-[800px]">
            <div className="flex  items-center max-w-5xl min-[800px] m-4 border-1">
              <div className="flex flex-col w-full rounded-lg bg-white shadow">
                <div className="p-1 fantasy-text-two text-center items-center m-4">
                  <h1>GUNDAM ON BASE </h1>
                </div>
                <div className="text-center m-4">
                  <h1 className="fantasy-text-menus text-justify text-[#4b5563]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Mollitia repellendus pariatur, nemo perferendis provident
                    laudantium inventore numquam quis, illum, dolore expedita
                    nisi? Optio, quos! Perferendis nesciunt vel possimus iste
                    earum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Magni velit sapiente facere quaerat exercitationem,
                    saepe aspernatur vitae distinctio quas cupiditate
                    dignissimos cumque molestiae veniam libero nostrum eveniet.
                    Nisi, vitae ad?
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-blue-200">
        <div className="flex flex-col">
          <div className="flex justify-around m-4 items-center  mx-auto max-w-5xl min-[800px]">
            <div className="flex  items-center max-w-5xl min-[800px] m-4 border-1">
              <div className="flex flex-col w-full rounded-lg">
                <div className="bg-[#1e3a8a] m-4 h-16 w-80 rounded-lg fantasy-text-sosial">
                  <div className="flex flex-row justify-center p-5">
                    <div className="pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        fill="currentColor"
                        className="bi bi-telegram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                      </svg>
                    </div>
                    <div>
                      <p> TELEGRAM</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1e3a8a] m-4 h-16 w-80 rounded-lg fantasy-text-sosial">
                  <div className="flex flex-row justify-center p-5">
                    <div className="pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </div>
                    <div>
                      <p> TWITTER</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1e3a8a] m-4 h-16 w-80 rounded-lg text-center items-center justify-center fantasy-text-sosial">
                  <div>
                    <p className="mt-5">CA : 0x32d3123o31200230</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center bg-blue-200">
        <div className="flex flex-col">
          <div className="flex justify-around items-center  mx-auto max-w-5xl min-[800px]">
            <div className="flex flex-col m-2">
              <div className="bg-[#1e3a8a] h-16 max-[780px]:w-100 rounded-lg fantasy-text-sosial">
                <div className="flex flex-row justify-center">
                  <div className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      className="bi bi-telegram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                    </svg>
                  </div>
                  <div>
                    <p> TELEGRAM</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1e3a8a] m-4 h-16 max-[780px]:w-100 rounded-lg fantasy-text-sosial">
                <div className="flex flex-row justify-center p-5">
                  <div className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </div>
                  <div>
                    <p> TWITTER</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1e3a8a] m-4 h-16 max-[780px]:w-100 rounded-lg text-center items-center justify-center fantasy-text-sosial">
                <p className="mt-5">CA : 0x32d3123o31200230</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default Home;
