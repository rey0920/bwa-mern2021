import Footer from "./Footer";
import Profile from "./profile";
import MenuItem from "./MenuItem";

interface SideBarProps {
  active: "Overview" | "Transactions" | "Edit-Profile";
}

export default function SideBar(props: SideBarProps) {
  const { active } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            href="/member"
            active={active === "Overview"}
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transactions"
            href="/member/transactions"
            active={active === "Transactions"}
          />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            href="/member/edit-profile"
            active={active === "Edit-Profile"}
          />
          <MenuItem title="Log Out" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
