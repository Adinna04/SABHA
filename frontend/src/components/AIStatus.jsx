import {
  BrainCircuit,
  CheckCircle2,
  Mic,
  Radio,
} from "lucide-react";

function AIStatus() {
  return (
    <section className="ai-status-panel">

      <div className="ai-status-main">

        <div className="ai-status-icon">
          <BrainCircuit size={24} />
        </div>

        <div>
          <span>AI CORE</span>
          <h3>Ready for boardroom intelligence</h3>
        </div>

      </div>

      <div className="ai-status-modules">

        <div>
          <Mic size={16} />
          <span>Voice</span>
          <CheckCircle2 size={14} />
        </div>

        <div>
          <Radio size={16} />
          <span>Attribution</span>
          <CheckCircle2 size={14} />
        </div>

        <div>
          <BrainCircuit size={16} />
          <span>Understanding</span>
          <CheckCircle2 size={14} />
        </div>

      </div>

    </section>
  );
}

export default AIStatus;