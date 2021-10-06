import ButtonTab from "../../../components/atoms/ButtonTab";
import TableRows from "./TableRows";

export default function TransactionContent() {
  return (
    <section className="transactions overflow-auto">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              Rp 4.518.000.500
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <ButtonTab href="#" title="All Trx" active />
                <ButtonTab href="#" title="Success" active={false} />
                <ButtonTab href="#" title="Pending" active={false} />
                <ButtonTab href="#" title="Failed" active={false} />
              </div>
            </div>
          </div>
          <TableRows />
        </div>
      </main>
    </section>
  );
}
