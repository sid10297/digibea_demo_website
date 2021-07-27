import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";

const styles = {
  // card: {
  //   margin: "5px 15px",
  //   padding: "5px 5px",
  //   // backgroundColor: "#f4f4f4",
  //   backgroundColor: "red",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: "20px",
  // },
  image: {
    height: "150px",
    width: "100%",
    margin: "0 auto",
    padding: "1rem",
  },
};

const ImageCard = ({ id, image, name }) => {
  return (
    <div>
      {/* className="card-group" */}
      <Link to={`services/${id}`}>
        <Card className={"card"}>
          {/* style={styles.card} */}
          <div className="imgStyle">
            <Card.Img
              style={styles.image}
              variant="bottom"
              src={image}
              name={name}
            />
            <div className="card-title">
              <Card.Title style={{ fontWeight: "600" }}>{name}</Card.Title>
            </div>
            {/* <Card.Title className="text-title">{name}</Card.Title> */}
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ImageCard;
