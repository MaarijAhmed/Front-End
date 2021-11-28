import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Loadingscreen = () => {
  return (
    <div>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={100} //3 secs
        style={{ marginLeft: 430, marginTop: 200 }}
      />
    </div>
  );
};

export default Loadingscreen;
