import { useContext } from "react";
import { MyContext } from "../../../Container";
import useFetch from "../../../hooks/useFetch";

export default function useFetchData(type) {
  const { user } = useContext(MyContext);
  let url =
    type === "groups"
      ? `groups/getAllGroups/`
      : type === "teachers"
      ? `users/teachers/`
      : type === "children"
      ? `child/getAllChildren/`
      : "";
  url += user.kg;
  const { data, loading, error } = useFetch({
    url: url,
  });
  let returnData;
  if (data) {
    returnData =
      type === "groups"
        ? data.allGroups
        : type === "teachers"
        ? data.teachers
        : type === "children"
        ? data.allChildren
        : null;
  }
  return { data: returnData, loading, error };
}
