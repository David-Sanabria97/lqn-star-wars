import { Card } from "antd";

const { Meta } = Card;

const CardGeneral = ({ onClick, description, id }) => {
  return (
    <Card
      onClick={() => onClick(id)}
      style={{ maxHeight: "100%", maxWidth: "100%" }}
      hoverable
    >
      <Meta title={description} />
    </Card>
  );
};
export default CardGeneral;
