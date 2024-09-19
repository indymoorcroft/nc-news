import Lottie from "react-lottie";
import animationData from "../assets/loading.json";

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading-box">
      <Lottie options={defaultOptions} height={400} width={400} />
      <p className="loading-text">Getting you to your destination</p>
    </div>
  );
};
