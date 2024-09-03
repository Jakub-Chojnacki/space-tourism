import ExploreButton from "../ExploreButton/ExploreButton";

const HomePage = () => {
  return (
    <div className="text-white p-400 flex flex-col justify-between items-center gap-48 md:gap-800 lg:gap-100 md:my-1600 md:mx-1000 lg:flex-row lg:justify-around lg:mb-800 lg:mt-auto">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-preset-6 text-blue-300 text-center lg:text-left lg:w-full">
          SO, YOU WANT TO TRAVEL TO <span className="block text-preset-1 md:text-[9rem]">SPACE</span>
        </h1>

        <p className="text-preset-9 text-blue-300 text-center lg:text-left lg:max-w-[600px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <ExploreButton />
      </div>
    </div>
  );
};

export default HomePage;
