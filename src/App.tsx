import { CSSProperties, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  // Original dimensions are taken from downloaded svg
  const SVG_ORIGINAL_WIDTH = 1331;
  const SVG_ORIGINAL_HEIGHT = 2344;

  const ratio = SVG_ORIGINAL_HEIGHT / SVG_ORIGINAL_WIDTH;
  const svgWidth = windowWidth * 0.242;
  const svgHeight = ratio * svgWidth;
  const imageUrl =
    "https://www.shutterstock.com/image-photo/yellow-flower-background-landscape-alfalfa-260nw-1907624248.jpg";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.outerWidth);
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
          flex: undefined,
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
          width={SVG_ORIGINAL_WIDTH}
          height={SVG_ORIGINAL_HEIGHT}
          viewBox={`0 0 ${SVG_ORIGINAL_WIDTH} ${SVG_ORIGINAL_HEIGHT}`}
          fill="none"
        >
          <image height="100%" href={imageUrl} clipPath="url(#shapeInside)" />
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
                d="M-0.00012207 2344C103.209 2312.15 328.003 2207.11 628.749 1862.89C783.103 1686.19 925.207 1608.4 1039.14 1545.93C1108.96 1507.64 1169.3 1474.57 1220.44 1426.8C1293.94 1357.89 1331 1272.14 1331 1172C1331 1071.86 1293.64 985.803 1220.44 917.204C1169.3 869.43 1108.96 836.355 1039.14 798.075C925.207 735.601 783.103 657.814 628.749 481.111C328.003 136.892 103.209 31.8495 -0.00012207 0C-0.00012207 856.071 -0.00012207 1383.68 -0.00012207 2344Z"
                fill="url(#paint0_linear_7012_626)"
              />
              <linearGradient
                id="paint0_linear_7012_626"
                x1="733.406"
                y1="2277.41"
                x2="-234.392"
                y2="1305.58"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#F4F2F2" />
              </linearGradient>
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
    flex: 1,
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
