import { Col, Row } from "antd";

import CardGeneral from "./CardGeneral";

const ListsOfCard = ({ list, onClick }) => {
  return (
    <Row
      justify="center"
      gutter={[16, 16]}
      style={{
        background: "#221D23",
        padding: "2em 4em",
      }}
    >
      {list.map((character) => {
        return (
          <Col xs={24} sm={12} lg={8} key={character.id}>
            <CardGeneral
              onClick={onClick}
              description={character.name}
              id={character.id}
            />
          </Col>
        );
      })}
    </Row>
  );
};
export default ListsOfCard;
