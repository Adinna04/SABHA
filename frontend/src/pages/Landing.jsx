import {
  ArrowRight,
  BrainCircuit,
  FileText,
  Menu,
  Mic,
  Radio,
  Users,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

function Landing({ onEnter }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="landing-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="landing-background">

        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="ambient ambient-three" />

        <div className="grid-floor" />

        <div className="stars">
          {Array.from({ length: 28 }).map((_, index) => (
            <span
              key={index}
              className={`star star-${index}`}
            />
          ))}
        </div>

      </div>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="landing-header">

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={21} />
        </button>


        <div className="brand-mark">
          <span className="brand-dot" />
          SABHA <span>AI</span>
        </div>


        <div className="system-status">
          <span className="status-dot" />
          SYSTEM READY
        </div>

      </header>


      {/* =====================================================
          MAIN LANDING
      ===================================================== */}

      <main className="landing-main">


        {/* Eyebrow */}

        <div className="hero-eyebrow">

          <span />

          SEAT ATTRIBUTED BOARDROOM HEARING ASSISTANT

          <span />

        </div>


        {/* HUD */}

        <div className="hero-hud">

          <div>
            <small>ENVIRONMENT</small>
            <strong>BOARDROOM</strong>
          </div>

          <div>
            <small>MODE</small>
            <strong>INTELLIGENT</strong>
          </div>

          <div>
            <small>CORE</small>
            <strong>ACTIVE</strong>
          </div>

        </div>


        {/* =================================================
            CENTER HERO
        ================================================= */}

        <section className="hero-title-area">


          {/* Main SABHA */}

          <h1
            className="hero-title"
            style={{
              transform: `translate(
                ${mouse.x * 5}px,
                ${mouse.y * 3}px
              )`,
            }}
          >
            SABHA
          </h1>


          {/* Outline SABHA */}

          <div
            className="hero-outline"
            style={{
              transform: `translate(
                calc(-50% + ${mouse.x * -3}px),
                ${mouse.y * -2}px
              )`,
            }}
          >
            SABHA
          </div>


          {/* Tagline */}

          <div className="hero-tagline">

            LISTEN.
            <span> ATTRIBUTE.</span>
            <span> UNDERSTAND.</span>

          </div>


          {/* Description */}

          <p className="hero-description">

            An intelligent boardroom hearing system that
            captures conversations, identifies speakers and
            transforms meetings into structured knowledge.

          </p>

        </section>


        {/* =================================================
            INTELLIGENCE STAGE
        ================================================= */}

        <section className="intelligence-stage">


          {/* Signal lines */}

          <div className="stage-line line-left" />
          <div className="stage-line line-right" />


          {/* VOICE */}

          <div className="stage-node node-voice">

            <Mic size={17} />

            <div>

              <small>01</small>

              <strong>VOICE</strong>

            </div>

          </div>


          {/* SPEAKER */}

          <div className="stage-node node-speaker">

            <Users size={17} />

            <div>

              <small>02</small>

              <strong>SPEAKER</strong>

            </div>

          </div>


          {/* =================================================
              CENTRAL AI CORE
          ================================================= */}

          <div className="ai-core">

            <div className="core-ring ring-one" />

            <div className="core-ring ring-two" />

            <div className="core-ring ring-three" />


            <div className="core-orbit orbit-one">
              <span />
            </div>

            <div className="core-orbit orbit-two">
              <span />
            </div>


            <div className="core-center">

              <BrainCircuit size={42} />

              <span>S</span>

            </div>

          </div>


          {/* CONTEXT */}

          <div className="stage-node node-context">

            <Radio size={17} />

            <div>

              <small>03</small>

              <strong>CONTEXT</strong>

            </div>

          </div>


          {/* DECISION */}

          <div className="stage-node node-decision">

            <FileText size={17} />

            <div>

              <small>04</small>

              <strong>DECISION</strong>

            </div>

          </div>


          {/* =================================================
              ENTER BOARDROOM
          ================================================= */}

          <button
            className="boardroom-cta"
            onClick={onEnter}
          >

            <span>
              ENTER THE BOARDROOM
            </span>

            <ArrowRight size={19} />

          </button>

        </section>


        {/* =================================================
            PROCESS
        ================================================= */}

        <section className="process-flow">

          <div className="process-item">

            <span>01</span>

            CAPTURE

          </div>


          <div className="process-connector" />


          <div className="process-item">

            <span>02</span>

            ATTRIBUTE

          </div>


          <div className="process-connector" />


          <div className="process-item">

            <span>03</span>

            UNDERSTAND

          </div>


          <div className="process-connector" />


          <div className="process-item">

            <span>04</span>

            REMEMBER

          </div>

        </section>

      </main>


      {/* =====================================================
          CORNER HUD
      ===================================================== */}

      <div className="corner-label corner-left">
        SABHA / 01
      </div>

      <div className="corner-label corner-right">
        AI BOARDROOM INTELLIGENCE
      </div>


      {/* =====================================================
          SIDE DRAWER
      ===================================================== */}

      {menuOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}


      <aside
        className={`side-drawer ${menuOpen ? "open" : ""
          }`}
      >

        {/* Drawer Header */}

        <div className="drawer-header">

          <div className="brand-mark">

            <span className="brand-dot" />

            SABHA <span>AI</span>

          </div>


          <button
            className="drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

        </div>


        {/* Drawer Content */}

        <div className="drawer-content">

          <div className="drawer-label">
            PLATFORM
          </div>


          <button
            onClick={() => {
              setMenuOpen(false);
              onEnter();
            }}
          >

            <ArrowRight size={18} />

            Enter Boardroom

          </button>


          <div className="drawer-divider" />


          <div className="drawer-label">
            SABHA
          </div>


          <div className="drawer-info">

            <strong>
              Intelligent Meeting Infrastructure
            </strong>

            <p>
              Capture conversations. Attribute speakers.
              Understand decisions.
            </p>

          </div>

        </div>


        {/* Drawer Footer */}

        <div className="drawer-footer">

          <span>SABHA AI</span>

          <span>v1.0</span>

        </div>

      </aside>

    </div>
  );
}

export default Landing;