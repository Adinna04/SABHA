import {
  Menu,
  Bell,
  CircleUserRound,
} from "lucide-react";

function Navbar({ onMenu, onLogout }) {
  return (
    <header className="dashboard-navbar">

      <div className="navbar-left">

        <button
          className="dashboard-menu"
          onClick={onMenu}
        >
          <Menu size={21} />
        </button>

        <div className="dashboard-brand">
          <span className="brand-dot" />
          SABHA <span>AI</span>
        </div>

      </div>

      <div className="navbar-right">

        <div className="navbar-system">
          <span />
          AI SYSTEM READY
        </div>

        <button className="navbar-icon">
          <Bell size={18} />
        </button>

        <button
          className="navbar-user"
          onClick={onLogout}
        >
          <CircleUserRound size={19} />
        </button>

      </div>

    </header>
  );
}

export default Navbar;