import { useNavigate as useBasicNavigate, Navigate as BasicNavigate } from "react-router-dom";

export function useNavigate() {
  const navigate = useBasicNavigate();

  return (path, keepParams) => navigate(path + (keepParams ? window.location.search : ""));
}

export function Navigate ({ to, keepParams }) {
  const target = to + (keepParams ? window.location.search : "")
  return <BasicNavigate to={target} />
}
