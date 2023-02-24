import axios from "axios";

export function getOrders() {
  return axios
    .get(
      "http://paninaraviolaitis.altervista.org/evomatic/API/order/getArchiveOrder.php",
      { params: { _sort: "status" } }
    )
    .then((res) => res.data);
}

export function getProducts() {
  return axios
    .get(
      "http://paninaraviolaitis.altervista.org/evomatic/API/product/getArchiveProductUnfiltered.php"
    )
    .then((res) => res.data);
}

export function getAccounts() {
  return axios
    .get(
      "http://paninaraviolaitis.altervista.org/evomatic/API/user/getArchiveUsers.php",
      { params: { _sort: "status" } }
    )
    .then((res) => res.data);
}

export function getOffers() {
  return axios
    .get(
      "http://paninaraviolaitis.altervista.org/evomatic/API/offer/getArchiveOffer.php",
      { params: { _sort: "status" } }
    )
    .then((res) => res.data);
}

export function Login(email, password) {
  return axios
    .post(
      "http://paninaraviolaitis.altervista.org/evomatic/API/user/login.php",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}
