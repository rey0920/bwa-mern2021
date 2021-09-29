import CardItem from "./CardItem";

export default function OverviewContent() {
  return (
    <div className="main-content">
      <div className="row">
        <CardItem icon="game-desktop" totalSpent={8455000}>
          Game <br /> Desktop
        </CardItem>
        <CardItem icon="game-mobile" totalSpent={8455000}>
          Game <br /> Mobile
        </CardItem>
        <CardItem icon="game-desktop" totalSpent={8455000}>
          Other <br /> Categories
        </CardItem>
      </div>
    </div>
  );
}
