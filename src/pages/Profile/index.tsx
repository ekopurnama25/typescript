import React from "react";
import Layout from "../../components/Layout";
import HEAD_GUNDAM from "../../@assert/HEAD_GUNDAM.png";

const Profile: React.FC = () => {
  return (
    <Layout title="Home">
      <section className="flex justify-around  bg-blue-200">
        <div className="flex mx-auto max-w-5xl min-[800px]">
          <div className="flex flex-row items-center  max-[780px]:w-full mx-auto max-[780px]:flex-col">
            <div className="place-items-center w-full basis-1/2 max-[780px]:hidden">
              <img
                src={HEAD_GUNDAM}
                className="w-[780px] h-[400px] x-auto max-[780px]:w-[250px] max-[780px]:h-[250px] max-[780px]:flex max-[780px]:justify-center"
                alt=""
              />
            </div>
            <div className="w-full basis-1/2 max-[780px]:mt-8 max-[780px]:p-2">
              <h1 className="text-3xl max-[780px]:flex max-[780px]:justify-center max-[780px]:text-[32px] p-1 fantasy-text-one text-start">
                GUNDAM ON BASE{" "}
              </h1>
              <h1 className="text-3xl max-[780px]:flex max-[780px]:justify-center max-[780px]:text-[32px] p-1 fantasy-text-one text-start">
                CA : 0x32d3123o31200230
              </h1>
              <img
                className="w-[780px] h-[400px] mx-auto max-[980px]:w-[220px] min-[780px]:hidden max-[780px]:p-1 max-[780px]:h-[150px] max-[780px]:flex max-[780px]:justify-center"
                src={HEAD_GUNDAM}
                alt=""
              />
              <h1 className="fantasy-text-menus text-1xl text-justify max-[780px]:text-[9px] max-[780px]:flex max-[780px]:justify-center max-[780px]:text-center  text-[#4b5563]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur fuga sequi vel magni debitis doloribus? Ut est
                sequi, ducimus eius quidem dignissimos ex commodi velit odio
                maiores assumenda sit quibusdam.Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Mollitia repellendus pariatur,
                nemo perferendis provident laudantium inventore numquam quis,
                illum, dolore expedita nisi? Optio, quos! Perferendis nesciunt
                vel possimus iste earum.
              </h1>
              <div className="mt-2 flex justify-center">
                <button className="bg-[#5b21b6]  rounded-full h-8 w-96 shadow-md max-[780px]:w-full shadow-violet-600">
                  <p className="items-center fantasy-text-btn">
                    LFG GUNDAM ON BASE DEV BULLISH
                  </p>
                </button>
              </div>
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
    </Layout>
  );
};

export default Profile;
