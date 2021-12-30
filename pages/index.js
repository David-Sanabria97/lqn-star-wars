import { useRouter } from "next/router";

import { useQuery } from "@apollo/client";
import { Spin, Typography, Empty } from "antd";
import ListsOfCard from "../components/ListsOfCard";
import { GET_PEOPLE } from "../services/queries";

export default function Home() {
  const { Title } = Typography;
  const { loading, error, data } = useQuery(GET_PEOPLE);
  const router = useRouter();

  if (loading) return <Spin />;
  if (error) return <Empty />;

  const people = data?.allPeople?.people;

  const onClick = (id) => {
    router.push(`/detail/${id}`);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          background: "#221D23",
        }}
      >
        <Title
          style={{
            fontFamily: "fantasy",
            fontSize: "clamp(1.125em,  calc(5vw * 1.62), 6.625em)",
            color: "yellow",
            margin: 0,
          }}
        >
          Star Wars
        </Title>
      </div>

      <ListsOfCard list={people} onClick={onClick} />
    </>
  );
}
