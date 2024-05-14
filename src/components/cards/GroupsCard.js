import { Link } from "react-router-dom";
import styles from "../../features/dashboards/styles/ManagerDashboard.module.scss";
import useFetchData from "./hooks/useFetchData";
export default function GroupsCard() {
  const { data: groups, loading, error } = useFetchData("groups");
  return (
    <div className={styles.group}>
      <h3>Groups</h3>
      <p>Find all the groups information:</p>
      <p>how many children per group, ages, weekely plans and more!</p>
      {loading && <p>Loading</p>}
      {error && <p>Oopps! Something went wrong..</p>}
      {groups && (
        <>
          <p>Total: {groups.length}</p>
          <Link to="/addgroup">
            <button type="submit" value="add" className="add btn">
              Add
            </button>
          </Link>
          <Link to="/groups">
            <button type="submit" value="view" className="view btn">
              View
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
