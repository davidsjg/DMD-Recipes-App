import React from "react";
import { useStoreContext } from "../utils/GlobalState";

export default function BookSelect() {
  const [state, dispatch] = useStoreContext();
  return "hello from BookSelect!";
}
