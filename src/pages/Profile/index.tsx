import React from "react";
import Layout from "../../components/Layout";
import HEAD_GUNDAM from "../../@assert/HEAD_GUNDAM.png";

const Profile: React.FC = () => {
  return (
    <Layout title="Home">
      <div className="flex items-center justify-center h-screen bg-blue-200">
        <section className="flex justify-around items-center mx-auto max-w-5xl min-[800px]:-mt-36 border-1">
          <div className="flex flex-row items-center  max-[780px]:w-full mx-auto max-[780px]:flex-col">
            <div className="place-items-center w-full basis-1/2 max-[780px]:hidden">
              <img
                src={HEAD_GUNDAM}
                className="w-[780px] h-[400px] x-auto max-[780px]:w-[250px] max-[780px]:h-[250px] max-[780px]:flex max-[780px]:justify-center"
                alt=""
              />
            </div>
            <div className="w-full basis-1/2 max-[780px]:mt-8 max-[780px]:p-2">
              <div className="p-1 fantasy-text-one text-start">
                <h1>GUNDAM ON BASE 0x32d3123o31200230</h1>
              </div>
              <h1 className="fantasy-text-menus text-1xl text-justify max-[780px]:text-[9px] max-[780px]:flex max-[780px]:justify-center max-[780px]:text-center  text-[#4b5563]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia repellendus pariatur, nemo perferendis provident
                laudantium inventore numquam quis, illum, dolore expedita nisi?
                Optio, quos! Perferendis nesciunt vel possimus iste earum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dicta
                voluptate quas velit, error illo, cumque corrupti nam dolorem
                nisi eos numquam iste doloribus architecto vero harum modi
                aliquam praesentium delectus?
              </h1>
              <div className="mt-2 flex justify-center">
                <button className="bg-[#5b21b6]  rounded-full h-8 w-96 shadow-md max-[780px]:w-full shadow-violet-600">
                  <p className="items-center fantasy-text-btn">
                    MEMECOIN APPSTORE LAUNCHING
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;
