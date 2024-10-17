import { Provider } from "react-redux";
import store from "../redux/store";

export default function GlobalStateProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
