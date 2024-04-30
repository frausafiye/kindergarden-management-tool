export const StatusMessage = ({ message }) => {
  return (
    <p
      className={!message.status.ok ? "errorMsg" : "successMsg"}
      style={{ fontSize: "0.65rem" }}
    >
      {message.status.msg}
    </p>
  );
};
