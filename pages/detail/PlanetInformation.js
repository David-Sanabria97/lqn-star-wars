import { useQuery } from "@apollo/client";
import { Empty, Row, Spin, Col } from "antd";

import { GET_PLANETS_FILM_ } from "../../services/queries";
import Tags from "../../components/Tags";
import Title from "antd/lib/typography/Title";

const PlanetInformation = ({ id }) => {
  const { loading, error, data } = useQuery(GET_PLANETS_FILM_, {
    variables: { id },
  });
  if (loading) return <Spin />;
  if (error) return <Empty />;
  const information = data.film.planetConnection.planets;
  return (
    <>
      <Title level={5} style={{ paddingTop: "1em" }}>
        Planetas
      </Title>
      <Row>
        {information.map((film) => {
          return (
            <Col xs={24} sm={12}>
              <Tags
                color={"red"}
                content={film}
                paragraph={film.name}
                key={film.id}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default PlanetInformation;
