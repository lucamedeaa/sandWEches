import axios from "axios";

export function getOrders() {
  return axios
    .get(
      "https://paninara.claudiodressadore.net/evomatic/API/order/getArchiveOrder.php",
      { params: { _sort: "status" } }
    )
    .then((res) => res.data);
}
