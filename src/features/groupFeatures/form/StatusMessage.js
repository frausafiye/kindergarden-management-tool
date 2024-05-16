export const StatusMessage = ({ message }) => {
  return (
    <p className={!message.status.ok ? "errorMsg" : "successMsg"}>
      {message.status.msg}
    </p>
  );
};
