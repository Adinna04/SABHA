import {
  ArrowLeft,
  BrainCircuit,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  LockKeyhole,
  Mic,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useState } from "react";

function Auth({
  mode,
  setMode,
  onBack,
  onSuccess,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      Temporary frontend navigation.

      Later:
      POST /api/auth/login
      POST /api/auth/register

      will be connected here.
    */

    onSuccess();
  };

  return (
    <div className="auth-page">

      <div className="auth-background">
        <div className="auth-glow auth-glow-one" />
        <div className="auth-glow auth-glow-two" />
        <div className="auth-grid" />
      </div>

      {/* Top */}
      <header className="auth-header">

        <button
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          BACK TO SABHA
        </button>

        <div className="brand-mark">
          <span className="brand-dot" />
          SABHA <span>AI</span>
        </div>

        <div className="secure-status">
          <LockKeyhole size={14} />
          SECURE ACCESS
        </div>

      </header>

      <main className="auth-main">

        {/* Left */}
        <section className="auth-intro">

          <div className="auth-eyebrow">
            BOARDROOM INTELLIGENCE
          </div>

          <h1>
            Enter the
            <span> boardroom.</span>
          </h1>

          <p>
            Access SABHA's intelligent meeting environment.
            Capture conversations, attribute speakers and
            transform discussions into structured knowledge.
          </p>

          <div className="auth-capabilities">

            <div>
              <Mic size={18} />
              <span>
                <strong>VOICE CAPTURE</strong>
                <small>Meeting audio intelligence</small>
              </span>
            </div>

            <div>
              <Users size={18} />
              <span>
                <strong>SPEAKER ATTRIBUTION</strong>
                <small>Who said what</small>
              </span>
            </div>

            <div>
              <BrainCircuit size={18} />
              <span>
                <strong>AI UNDERSTANDING</strong>
                <small>Decisions & action intelligence</small>
              </span>
            </div>

          </div>

        </section>

        {/* Card */}
        <section className="auth-card">

          <div className="auth-tabs">

            <button
              className={mode === "login" ? "active" : ""}
              onClick={() => setMode("login")}
            >
              SIGN IN
            </button>

            <button
              className={mode === "register" ? "active" : ""}
              onClick={() => setMode("register")}
            >
              REGISTER
            </button>

          </div>

          <div className="auth-card-header">

            <div className="auth-icon">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h2>
                {mode === "login"
                  ? "Welcome back."
                  : "Create your access."}
              </h2>

              <p>
                {mode === "login"
                  ? "Continue to your SABHA workspace."
                  : "Set up your SABHA workspace account."}
              </p>
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            {mode === "register" && (
              <label>
                FULL NAME
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </label>
            )}

            <label>
              EMAIL ADDRESS
              <input
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              PASSWORD

              <div className="password-field">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </label>

            {mode === "register" && (
              <label>
                CONFIRM PASSWORD
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </label>
            )}

            {mode === "login" && (
              <div className="auth-options">

                <label className="remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot"
                >
                  Forgot password?
                </button>

              </div>
            )}

            <button
              type="submit"
              className="auth-submit"
            >
              {mode === "login"
                ? "ENTER SABHA"
                : "CREATE ACCOUNT"}

              <ArrowLeft
                size={18}
                className="submit-arrow"
              />

            </button>

          </form>

          <div className="auth-secure">

            <CheckCircle2 size={15} />

            <span>
              Protected SABHA environment
            </span>

          </div>

          <div className="auth-switch">

            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() =>
                setMode(
                  mode === "login"
                    ? "register"
                    : "login"
                )
              }
            >
              {mode === "login"
                ? "Create one"
                : "Sign in"}
            </button>

          </div>

        </section>

      </main>

      <footer className="auth-footer">
        <span>SABHA AI</span>
        <span>LISTEN. ATTRIBUTE. UNDERSTAND.</span>
        <span>2026</span>
      </footer>

    </div>
  );
}

export default Auth;