import { useContext } from "react";
import { MyContext } from "../../../Container";
import useFetch from "../../../hooks/useFetch";

export default function useFetchAllGroups() {
  const { user } = useContext(MyContext);

  const { data, loading, error } = useFetch({
    url: `groups/getAllGroups/${user.kg}`,
  });

  return { data, loading, error };
}
