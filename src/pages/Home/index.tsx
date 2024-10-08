import React from "react";
import Layout from "../../components/Layout";
import GUMDAM from "../../@assert/gundam-removebg-preview.png";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <div className="flex items-center justify-center h-screen bg-blue-200">
        <section className="flex justify-around items-center mx-auto max-w-5xl min-[800px]:-mt-36 border-1">
          <div className="flex flex-row items-center  max-[780px]:w-full mx-auto max-[780px]:flex-col">
            <div className="w-full basis-1/2 max-[780px]:mt-8 max-[780px]:p-2">
              <div className="p-1 fantasy-text-one text-start">
                <h1>GUNDAM ON BASE </h1>
              </div>
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
        </section>
      </div>
      <div className="flex items-center justify-center bg-blue-200">
        <section className="flex justify-around items-center mx-auto max-w-5xl min-[800px] border-1">
          <div className="flex  items-center mx-auto max-w-5xl min-[800px]:-mt-36 border-1">
            <div className="flex flex-col w-full rounded-lg bg-white h-60 shadow">
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
                  saepe aspernatur vitae distinctio quas cupiditate dignissimos
                  cumque molestiae veniam libero nostrum eveniet. Nisi, vitae
                  ad?
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center bg-blue-200">
        <section className="flex justify-around items-center mx-auto p-6 max-w-5xl min-[800px] border-1">
          <div className="flex flex-col w-full rounded-lg h-60 ">
            <div className="flex flex-col m-2">
              <div className="bg-[#1e3a8a] m-4 h-16 w-96 rounded-lg text-center items-center justify-center fantasy-text-sosial">
                <p className="mt-5">TELEGRAM</p>
              </div>
              <div className="bg-[#1e3a8a] m-4 h-16 w-96 rounded-lg text-center items-center justify-center fantasy-text-sosial">
                <p className="mt-5">TWITTER</p>
              </div>
              <div className="bg-[#1e3a8a] m-4 h-16 w-96 rounded-lg text-center items-center justify-center fantasy-text-sosial">
                <p className="mt-5">CA : 0x32d3123o31200230</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
