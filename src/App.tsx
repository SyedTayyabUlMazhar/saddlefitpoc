import { CSSProperties, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  /**
   * this ratio is calculated from the svg we are using
   * The svg dimensions are: width="269" height="357"
   * 357 / 269 = 1.3271
   */
  const ratio = 1.3271;
  const svgWidth = windowWidth * 0.242;
  const svgHeight = ratio * svgWidth;
  const imageUrl =
    "https://www.shutterstock.com/image-photo/yellow-flower-background-landscape-alfalfa-260nw-1907624248.jpg";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.parent}>
      <div style={{ ...styles.child, backgroundColor: "pink" }}>Child 1</div>
      <div
        style={{
          ...styles.child,
          height: svgHeight - svgHeight * 0.2,
          justifyContent: "start",
        }}
      >
        <img
          src={imageUrl}
          style={{
            height: `${svgHeight}px`,
            zIndex: -1,
            overflow: "hidden",
          }}
        />
        <div style={styles.overlay} />
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            width: `${svgWidth}px`,
            height: `${svgHeight}px`,
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="269"
          height="357"
          viewBox="0 0 269 357"
          fill="none"
        >
          <image height="100%" href={imageUrl} clipPath="url(#shapeInside)" />
          <path
            d="M237.5 177.615L3.05176e-05 337.5V357.002L268.7 177.615L3.05176e-05 0V20L237.5 177.615Z"
            fill="url(#paint0_linear_25_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25_5"
              x1="168"
              y1="-32"
              x2="168"
              y2="394"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0499" stopColor="#ffffff3b" />
              <stop offset="0.49" stopColor="#f5f5f51d" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <clipPath id="shapeInside">
              <path
                d="M0 184.5L0 357.002L268.7 177.615L0 0V184.5Z"
                stroke="black"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div style={{ ...styles.child, backgroundColor: "orange" }}>Child 3</div>
    </div>
  );
}

export default App;

const styles: Record<string, CSSProperties> = {
  parent: {
    height: "100vh", // full screen height
    width: "100vw", // full screen width
    display: "flex",
    flexDirection: "column",
    position: "relative", // Make the parent position relative for image overlay
  },
  child: {
    width: "100%",
    height: "33.33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,255,0.5)",
  },
};
