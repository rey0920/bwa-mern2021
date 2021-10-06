import RowsItem from "./RowsItem";

export default function TableRows() {
  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <table className="table table-borderless">
          <thead>
            <tr className="color-palette-1">
              <th className="" scope="col">
                Game
              </th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="list_status_item">
            <RowsItem
              thumbnail="overview-1"
              title="Mobile Legend Beng Beng"
              category="Mobile"
              item={200}
              price={500000}
              status="Pending"
              href="/member/transactions/detail"
            />
            <RowsItem
              thumbnail="overview-2"
              title="Call of Duty:Modern"
              category="Desktop"
              item={550}
              price={740000}
              status="Success"
              href="/member/transactions/detail"
            />
            <RowsItem
              thumbnail="overview-3"
              title="Clash of Clans"
              category="Mobile"
              item={100}
              price={120000}
              status="Failed"
              href="/member/transactions/detail"
            />
            <RowsItem
              thumbnail="overview-4"
              title="The Royal Game"
              category="Mobile"
              item={225}
              price={200000}
              status="Pending"
              href="/member/transactions/detail"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
