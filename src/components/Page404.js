import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Page404 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 Error Page</h1>
      <p>The poll does not exist</p>
      <Button variant="danger" type="submit" onClick={handleClick}>
        Please Login
      </Button>
    </div>
  );
};

export default Page404;
