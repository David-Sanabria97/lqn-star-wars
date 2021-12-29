import { useState } from "react";
import { useRouter } from "next/router";

import { useQuery } from "@apollo/client";
import { Spin } from "antd";
import Modal from "antd/lib/modal/Modal";
import ListsOfCard from "../components/ListsOfCard";
import { GET_PEOPLE } from "../services/queries";
import Tags from "../components/Tags";

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
    router.push(`/${id}`);
  };

  return (
    <>
      <ListsOfCard list={people} onClick={onClick} />
      <Modal
        title={peopleData.name}
        visible={openModal}
        footer={null}
        onCancel={() => setOpenModal(false)}
      >
        <Tags content={peopleData} title={"Personal information"} />
        <Tags content={peopleData} title={"Homeword information"} />
      </Modal>
    </>
  );
}
