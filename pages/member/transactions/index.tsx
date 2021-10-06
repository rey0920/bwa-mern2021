import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionContent";

export default function index() {
  return (
    <>
      <SideBar active="Transactions" />
      <TransactionContent />
    </>
  );
}
