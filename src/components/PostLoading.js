import Typography from "@mui/material/Typography";
import Lottie from "react-lottie";
import loadingIcon from "@animation/loading.json";

export const PostLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 99999999999999,
        left: 65,
        right: 0,
        top: 150,
        bottom: 0,
        margin: "auto",
      }}
    >
      <Lottie options={defaultOptions} height={300} width={200} />
    </div>
  );
};
