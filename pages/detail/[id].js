import { Modal } from "antd";
import { useRouter } from "next/router";

import PersonalInfomation from "./PersonalInfomation";
import FilmsInformation from "./FilmsInformation";

const ModalComponent = () => {
  const router = useRouter();
  return (
    <>
      <Modal visible={true} footer={null} onCancel={() => router.push("/")}>
        <PersonalInfomation />
        <FilmsInformation />
      </Modal>
    </>
  );
};
export default ModalComponent;
