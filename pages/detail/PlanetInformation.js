import { useQuery } from "@apollo/client";
import { Empty, Spin } from "antd";

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
      <Title level={5}> Planetas</Title>
      {information.map((film) => {
        return <Tags content={film} paragraph={film.name} key={film.id} />;
      })}
    </>
  );
};

export default PlanetInformation;
