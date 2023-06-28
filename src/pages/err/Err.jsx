import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
const Err = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Page not Found...</h2>
      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: ".4rem",
          alignItems: "center",
          color: "#000",
        }}
      >
        <AiOutlineHome /> Home Page <AiOutlineHome />
      </Link>
    </div>
  );
};

export default Err;
