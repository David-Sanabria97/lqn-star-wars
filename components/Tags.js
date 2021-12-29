import { Tag, Col, Row } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const Tags = ({ content, title }) => {
  const contentKeys = Object.keys(content).splice(2);
  const contentValues = Object.values(content).splice(2);

  return (
    <>
      <Title level={3}> {title}</Title>
      <Row gutter={[16, 16]}>
        {contentKeys.map((keys, i) => {
          return (
            <Col xs={6}>
              <Tag color="red" key={keys.id}>
                {keys} : {contentValues[i]}
              </Tag>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Tags;
