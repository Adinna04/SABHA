function MeetingCard({
  title,
  date,
  status,
  participants,
}) {
  return (
    <article className="meeting-card">

      <div className="meeting-card-top">

        <span className="meeting-status">
          {status}
        </span>

        <span>
          {date}
        </span>

      </div>

      <h3>{title}</h3>

      <div className="meeting-card-bottom">
        <span>
          {participants} participants
        </span>
      </div>

    </article>
  );
}

export default MeetingCard;