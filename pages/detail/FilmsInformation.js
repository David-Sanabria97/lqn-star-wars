import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Empty, Spin, Row, Col } from "antd";

import { GET_PERSON_FILMS } from "../../services/queries";
import Tags from "../../components/Tags";
import Title from "antd/lib/typography/Title";
import PlanetInformation from "./PlanetInformation";

const FilmsInformation = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_PERSON_FILMS, {
    variables: { id },
  });
  if (loading) return <Spin />;
  if (error) return <Empty />;
  const information = data.person.filmConnection.films;
  return (
    <>
      <Title level={2}> Peliculas</Title>
      <Row>
        {information.map((film) => {
          return (
            <Col xs={24} md={12} key={film.id}>
              <Tags color={"yellow"} content={film} paragraph={film.title} />
              <PlanetInformation id={film.id} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default FilmsInformation;
