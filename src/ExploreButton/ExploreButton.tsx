import UnstyledButton from "../UnstyledButton/UnstyledButton";

const ExploreButton = () => {
  return (
    <UnstyledButton
      className="bg-white rounded-full text-preset-4 relative px-400 aspect-square hover:after:opacity-100 hover:after:scale-[200%] md:hover:after:scale-150 
     after:content-[''] after:absolute after:bg-exploreOutline after:opacity-0 after:w-full after:h-full after:left-0 after:top-0 after:rounded-full after:aspect-square after:z-[-1] after:transition after:duration-250 after:linear hover:after:ease-in md:px-1000"
    >
      <span className="text-blue-900 hover:opacity-50"> Explore</span>
    </UnstyledButton>
  );
};

export default ExploreButton;
