import { useEffect, useState } from "react";
import Image from "next/image";
import fantasy_bg from "../../public/souldbound/fantasy_bg.jpg";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BackgroundImage() {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <div className="bg-black z-0 fixed w-full h-full">
        <div className="fixed z-10 top-0 blur-sm opacity-75">
          <Image src={fantasy_bg} width={width} height={height} />
        </div>
      </div>
    );
  }

  return null;
}

export default BackgroundImage;
