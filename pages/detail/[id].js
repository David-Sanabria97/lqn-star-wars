import { Modal } from "antd";
import { useRouter } from "next/router";

import PersonalInfomation from "./PersonalInfomation";
import FilmsInformation from "./FilmsInformation";

const ModalComponent = () => {
  const router = useRouter();
  return (
    <>
      <Modal
        visible={true}
        background={"rgb(239 239 239 / 52%)"}
        footer={null}
        onCancel={() => router.push("/")}
        width={"60%"}
      >
        <PersonalInfomation />
        <FilmsInformation />
      </Modal>
    </>
  );
};
export default ModalComponent;
