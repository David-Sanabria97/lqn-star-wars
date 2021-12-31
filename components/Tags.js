import { Tag, Col, Row } from "antd";
import { Typography } from "antd";
import { Fragment } from "react";

const { Title } = Typography;

const Tags = ({ content, title, color }) => {
  const contentKeys = Object.keys(content).splice(2);
  const contentValues = Object.values(content).splice(2);

  return (
    <>
      {title && <Title level={2}>{title}</Title>}

      <Row gutter={[16, 16]}>
        {contentKeys.map((keys, i) => {
          return (
            <Col xs={24} sm={12} key={i}>
              <Tag
                color={color}
                style={{ marginBottom: "1em", color: "black" }}
              >
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
