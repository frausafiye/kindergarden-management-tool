import { Link } from "react-router-dom";
import useFetchData from "./hooks/useFetchData";
import styles from "../../features/dashboards/styles/ManagerDashboard.module.scss";

export default function TeachersCard() {
  const { data: teachers, loading, error } = useFetchData("teachers");

  return (
    <div className={styles.teachers}>
      <h3>Teachers</h3>
      <p>Find all the teacher information:</p>
      <p>
        how many children in that teachers group and all the teachers necessary
        information!
      </p>
      {loading && <p>Loading</p>}
      {error && <p>Oopps! Something went wrong..</p>}
      {teachers && <p>Total: {teachers.length}</p>}
      <Link to="/teachers">
        <button type="submit" value="view" className="view btn">
          View
        </button>
      </Link>
    </div>
  );
}
