import {
  Activity,
  ArrowRight,
  BrainCircuit,
  FileText,
  Mic,
  Radio,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";

import { useState } from "react";

function Dashboard({ onBack }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="boardroom-page">

      {/* =================================================
          TOP NAVBAR
      ================================================= */}

      <header className="boardroom-navbar">

        <div className="boardroom-nav-left">

          <button
            className="boardroom-menu"
            onClick={() => setSidebarOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className="boardroom-brand">
            <span className="brand-dot" />
            SABHA <b>AI</b>
          </div>

        </div>

        <div className="boardroom-nav-center">

          <span className="nav-live-dot" />

          BOARDROOM ENVIRONMENT

        </div>

        <div className="boardroom-nav-right">

          <div className="system-chip">
            <span />
            SYSTEM READY
          </div>

        </div>

      </header>


      {/* =================================================
          SIDEBAR
      ================================================= */}

      {sidebarOpen && (
        <div
          className="boardroom-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`boardroom-sidebar ${sidebarOpen ? "open" : ""
          }`}
      >

        <div className="sidebar-top">

          <div className="sidebar-brand">
            <span className="brand-dot" />
            SABHA <b>AI</b>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>

        </div>


        <div className="sidebar-heading">
          WORKSPACE
        </div>

        <nav className="sidebar-nav">

          <button className="sidebar-nav-item active">
            <Activity size={17} />
            <span>Overview</span>
          </button>

          <button className="sidebar-nav-item">
            <Video size={17} />
            <span>Live Meeting</span>
          </button>

          <button className="sidebar-nav-item">
            <FileText size={17} />
            <span>Meetings</span>
          </button>

          <button className="sidebar-nav-item">
            <Radio size={17} />
            <span>Transcript</span>
          </button>

          <button className="sidebar-nav-item">
            <BrainCircuit size={17} />
            <span>AI Intelligence</span>
          </button>

          <button className="sidebar-nav-item">
            <Users size={17} />
            <span>Participants</span>
          </button>

        </nav>


        <div className="sidebar-heading">
          OUTPUT
        </div>

        <nav className="sidebar-nav">

          <button className="sidebar-nav-item">
            <FileText size={17} />
            <span>Minutes of Meeting</span>
          </button>

          <button className="sidebar-nav-item">
            <ArrowRight size={17} />
            <span>Action Items</span>
          </button>

        </nav>


        <div className="sidebar-heading">
          SYSTEM
        </div>

        <nav className="sidebar-nav">

          <button className="sidebar-nav-item">
            <ShieldCheck size={17} />
            <span>System Status</span>
          </button>

        </nav>


        <div className="sidebar-bottom">

          <button
            className="return-button"
            onClick={onBack}
          >
            ← RETURN TO SABHA
          </button>

          <div className="sidebar-version">
            SABHA AI / FRONTEND
            <span>v1.0</span>
          </div>

        </div>

      </aside>


      {/* =================================================
          MAIN BOARDROOM
      ================================================= */}

      <main className="boardroom-main">

        {/* Header */}

        <section className="boardroom-heading">

          <div>

            <div className="boardroom-kicker">
              SABHA / COMMAND CENTER
            </div>

            <h1>
              Welcome to the
              <span> boardroom.</span>
            </h1>

            <p>
              Your intelligent meeting environment is ready.
              Start a session to begin capturing real
              boardroom conversations.
            </p>

          </div>

          <div className="boardroom-time">
            <small>ENVIRONMENT</small>
            <strong>READY</strong>
          </div>

        </section>


        {/* =================================================
            HERO SESSION PANEL
        ================================================= */}

        <section className="session-panel">

          <div className="session-grid" />

          <div className="session-glow" />

          <div className="session-content">

            <div className="session-label">
              <span />
              NEW BOARDROOM SESSION
            </div>

            <h2>
              Start listening.
            </h2>

            <p>
              SABHA will capture the conversation,
              identify speakers and transform the discussion
              into structured meeting intelligence.
            </p>

            <button className="start-meeting-button">

              <Mic size={18} />

              START NEW MEETING

              <ArrowRight size={17} />

            </button>

          </div>


          {/* AI CORE */}

          <div className="dashboard-ai-core">

            <div className="dashboard-core-ring ring-a" />
            <div className="dashboard-core-ring ring-b" />
            <div className="dashboard-core-ring ring-c" />

            <div className="dashboard-core-center">

              <BrainCircuit size={34} />

              <span>S</span>

            </div>

          </div>

        </section>


        {/* =================================================
            SYSTEM PIPELINE
        ================================================= */}

        <section className="pipeline-section">

          <div className="section-title">

            <div>
              <small>INTELLIGENCE PIPELINE</small>
              <h2>Ready to process.</h2>
            </div>

            <span className="pipeline-status">
              AWAITING INPUT
            </span>

          </div>


          <div className="pipeline">

            <div className="pipeline-step">

              <div className="pipeline-number">
                01
              </div>

              <div className="pipeline-icon">
                <Mic size={19} />
              </div>

              <div>
                <strong>VOICE CAPTURE</strong>
                <span>
                  Conversation audio
                </span>
              </div>

            </div>


            <div className="pipeline-line" />


            <div className="pipeline-step">

              <div className="pipeline-number">
                02
              </div>

              <div className="pipeline-icon">
                <Users size={19} />
              </div>

              <div>
                <strong>SPEAKER ATTRIBUTION</strong>
                <span>
                  Who said what
                </span>
              </div>

            </div>


            <div className="pipeline-line" />


            <div className="pipeline-step">

              <div className="pipeline-number">
                03
              </div>

              <div className="pipeline-icon">
                <BrainCircuit size={19} />
              </div>

              <div>
                <strong>AI UNDERSTANDING</strong>
                <span>
                  Context & decisions
                </span>
              </div>

            </div>


            <div className="pipeline-line" />


            <div className="pipeline-step">

              <div className="pipeline-number">
                04
              </div>

              <div className="pipeline-icon">
                <FileText size={19} />
              </div>

              <div>
                <strong>MEETING MEMORY</strong>
                <span>
                  MoM & action items
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            EMPTY WORKSPACE
        ================================================= */}

        <section className="workspace-section">

          <div className="section-title">

            <div>
              <small>MEETING WORKSPACE</small>
              <h2>Your meetings will appear here.</h2>
            </div>

          </div>


          <div className="workspace-empty">

            <div className="empty-visual">

              <div className="empty-circle circle-one" />
              <div className="empty-circle circle-two" />
              <div className="empty-circle circle-three" />

              <FileText size={30} />

            </div>

            <div className="empty-text">

              <span>NO SESSION DATA</span>

              <h3>
                Nothing captured yet.
              </h3>

              <p>
                Once a boardroom session begins,
                transcripts, speakers, decisions and
                meeting outputs will appear here.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="boardroom-footer">

          <span>
            SABHA AI
          </span>

          <span>
            LISTEN. ATTRIBUTE. UNDERSTAND.
          </span>

          <span>
            FRONTEND ENVIRONMENT
          </span>

        </footer>

      </main>

    </div>
  );
}

export default Dashboard;