import SideBar from "../../../components/organisms/SideBar";
import TransactionsDetailContent from "../../../components/organisms/TransactionsDetailContent";

export default function DetailTransaction() {
  return (
    <>
      <SideBar active="Transactions" />

      <section className="transactions-detail overflow-auto">
        <TransactionsDetailContent />
      </section>
    </>
  );
}
