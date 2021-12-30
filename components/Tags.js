import { Tag, Col, Row } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const Tags = ({ content, title, paragraph }) => {
  const contentKeys = Object.keys(content).splice(2);
  const contentValues = Object.values(content).splice(2);

  return (
    <>
      {title && <Title level={2}> {title}</Title>}
      {paragraph && <Title level={4}> </Title>}
      <Row gutter={[16, 16]}>
        {contentKeys.map((keys, i) => {
          return (
            <Col xs={12} key={i}>
              <Tag color="red" style={{ marginBottom: "1em" }}>
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
