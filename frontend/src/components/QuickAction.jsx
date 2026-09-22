function QuickAction({
  icon,
  title,
  description,
}) {
  return (
    <button className="quick-action">

      <div className="quick-action-icon">
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

    </button>
  );
}

export default QuickAction;