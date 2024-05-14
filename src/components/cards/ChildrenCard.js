import useFetchData from "./hooks/useFetchData";
import { Link } from "react-router-dom";
import styles from "../../features/dashboards/styles/ManagerDashboard.module.scss";

export default function ChildrenCard() {
  const { data: children, loading, error } = useFetchData("children");

  return (
    <div className={styles.children}>
      <h3>Childrens</h3>
      <p>Find all the information of the children:</p>
      <p>
        how many children in that kindergarden and all the children necessary
        information!
      </p>
      {loading && <p>Loading</p>}
      {error && <p>Oopps! Something went wrong..</p>}
      {children && <p>Total: {children.length}</p>}
      <Link to="/cregister">
        <button type="submit" value="add" className="add btn">
          Add
        </button>
      </Link>
      <Link to="/children">
        <button type="submit" value="view" className="view btn">
          View
        </button>
      </Link>
    </div>
  );
}
