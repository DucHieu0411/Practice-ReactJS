import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Alert from "react-bootstrap/Alert";

const PrivateRoutes = (props) => {
  const { user } = useContext(UserContext);

  if (user && !user.auth) {
    return (
      <>
        <Alert variant="danger" dismissible className="mt-3">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            You don't have permission to access this page. Please log in first.
          </p>
        </Alert>
      </>
    );
  }
  return <>{props.children}</>;
};

export default PrivateRoutes;
