import { useState } from "react";
import { useRouter } from "next/router";

import { useQuery } from "@apollo/client";
import { Spin } from "antd";
import ListsOfCard from "../components/ListsOfCard";
import { GET_PEOPLE } from "../services/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_PEOPLE);
  const [peopleData, setPeopleData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  if (loading) return <Spin />;

  const people = data?.allPeople?.people;

  const onClick = (id) => {
    setPeopleData(people.find((item) => item.id === id));
    setOpenModal(true);
    router.push(`/detail/${id}`);
  };

  return (
    <>
      <ListsOfCard list={people} onClick={onClick} />
    </>
  );
}
