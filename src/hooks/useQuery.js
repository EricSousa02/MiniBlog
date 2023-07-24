import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery() {
  const { search } = useLocation();


  // array de dependencias faz com que a funcao so ative quando o item nas dependencias for alterado
  return useMemo(() => new URLSearchParams(search), [search]);
}
