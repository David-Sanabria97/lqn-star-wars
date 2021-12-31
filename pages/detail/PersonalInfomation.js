import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Empty, Spin } from "antd";

import { GET_PERSON } from "../../services/queries";
import Tags from "../../components/Tags";

const PersonalInfomation = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_PERSON, { variables: { id } });
  if (loading) return <Spin />;
  if (error) return <Empty />;

  const person = data?.person;
  return (
    <Tags color={"green"} content={person} title={"Información personal"} />
  );
};

export default PersonalInfomation;
