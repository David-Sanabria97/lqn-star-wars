import { useRouter } from "next/router";
import Tags from "../../components/Tags";
import { Empty, Spin, Modal } from "antd";

import { useQuery } from "@apollo/client";

import { GET_PERSON } from "../../services/queries";

const ModalComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_PERSON, { variables: { id } });

  if (loading) return <Spin />;
  if (error) return <Empty />;

  const person = data.person;
  return (
    <>
      <Modal
        title={person.name}
        visible={true}
        footer={null}
        onCancel={() => router.push("/")}
      >
        <Tags content={person} title={"Personal information"} />
      </Modal>
    </>
  );
};
export default ModalComponent;
