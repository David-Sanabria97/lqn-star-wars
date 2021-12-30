import { Card } from "antd";

const CardGeneral = ({ onClick, description, id }) => {
  return (
    <Card
      onClick={() => onClick(id)}
      style={{
        maxHeight: "100%",
        maxWidth: "100%",
        color: "white",
        background: "rgb(71 74 73)",
      }}
      hoverable
    >
      {description}
    </Card>
  );
};
export default CardGeneral;
