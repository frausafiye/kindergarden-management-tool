import { Link } from "react-router-dom";
import styles from "../../features/dashboards/styles/ManagerDashboard.module.scss";
import useFetchAllGroups from "./hooks/useFetchAllGroups";
export default function GroupsCard() {
  const { data: groups, loading, error } = useFetchAllGroups();

  // const getAllGroups = () => {
  //   axios({
  //     method: "GET",
  //     url: `${process.env.REACT_APP_BASE_URL}/groups/getAllGroups/${user.kg}`,
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     withCredentials: true,
  //   })
  //     .then((result) => {
  //       if (result.data.success) {
  //         setGroups(result.data.allGroups);
  //       } else {
  //         console.log(result);
  //       }
  //     })
  //     .catch((err) => authCheckHandler(err));
  // };
  // useEffect(() => {

  // }, []);
  return (
    <div className={styles.group}>
      <h3>Groups</h3>
      <p>Find all the groups information:</p>
      <p>how many children per group, ages, weekely plans and more!</p>
      {loading && <p>Loading</p>}
      {error && <p>Oopps! Something went wrong..</p>}
      {groups && (
        <>
          <p>Total: {groups.allGroups.length}</p>
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
