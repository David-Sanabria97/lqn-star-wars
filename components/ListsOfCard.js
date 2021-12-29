import { Col, Row } from "antd";

import CardGeneral from "./CardGeneral";

const ListsOfCard = ({ list, onClick }) => {
  return (
    <>
      <Row justify="center" gutter={[16, 16]}>
        {list.map((character) => {
          return (
            <Col xs={12} sm={8} lg={4} key={character.id}>
              <CardGeneral
                onClick={onClick}
                description={character.name}
                id={character.id}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default ListsOfCard;
