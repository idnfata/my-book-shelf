import Typography from '@mui/material/Typography';
import Lottie from 'react-lottie';
import loadingPage from '@animation/loading-files.json';

export const ContentLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingPage,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
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
      <Lottie options={defaultOptions} height={400} width={500} />
      <Typography style={{marginTop: '-60px', fontSize: '15px', fontWeight: 'bold', color: "var(--primary-color)" }} color="textSecondary">
        Loading...
      </Typography>
    </div>
  );
};
