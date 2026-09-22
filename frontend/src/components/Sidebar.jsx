import {
  LayoutDashboard,
  Radio,
  FileText,
  ListChecks,
  Users,
  BarChart3,
  Settings,
  X,
  LogOut,
} from "lucide-react";

function Sidebar({
  open,
  onClose,
  onLogout,
}) {
  return (
    <>
      {open && (
        <div
          className="dashboard-sidebar-overlay"
          onClick={onClose}
        />
      )}

      <aside
        className={`dashboard-sidebar ${open ? "open" : ""
          }`}
      >

        <div className="sidebar-header">

          <div>
            <span className="sidebar-kicker">
              SABHA
            </span>

            <strong>
              Boardroom
            </strong>
          </div>

          <button onClick={onClose}>
            <X size={18} />
          </button>

        </div>

        <div className="sidebar-section">
          WORKSPACE
        </div>

        <nav>

          <button className="sidebar-link active">
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button className="sidebar-link">
            <Radio size={18} />
            Live Meeting
          </button>

          <button className="sidebar-link">
            <FileText size={18} />
            Meetings
          </button>

          <button className="sidebar-link">
            <ListChecks size={18} />
            Action Items
          </button>

          <button className="sidebar-link">
            <Users size={18} />
            Participants
          </button>

          <button className="sidebar-link">
            <BarChart3 size={18} />
            Analytics
          </button>

        </nav>

        <div className="sidebar-section">
          SYSTEM
        </div>

        <nav>

          <button className="sidebar-link">
            <Settings size={18} />
            Settings
          </button>

        </nav>

        <div className="sidebar-bottom">

          <button
            className="sidebar-logout"
            onClick={onLogout}
          >
            <LogOut size={18} />
            Exit SABHA
          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;