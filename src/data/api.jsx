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
      "http://paninaraviolaitis.altervista.org/evomatic/API/user/getArchiveUser.php",
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

export function addProduct(
  name,
  price,
  description,
  quantity,
  category,
  ingredients,
  tags,
  nutritional_values
) {
  return axios
    .post(
      "http://paninaraviolaitis.altervista.org/evomatic/API/product/createProduct.php",
      {
        name,
        price,
        description,
        quantity,
        category,
        ingredients,
        tags,
        nutritional_values,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}

export function setDoneOrder(id) {
  return axios
    .post(
      "http://paninaraviolaitis.altervista.org/evomatic/API/order/setStatusOrder.php",
      {
        id,
        status: 2,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}

export function modifyProduct(
  id,
  name,
  description,
  price,
  quantity,
  category
) {
  return axios
    .all([
      axios.post(
        "http://paninaraviolaitis.altervista.org/evomatic/API/product/modifyProductName.php",
        {
          id,
          name,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      ),
      axios.post(
        "http://paninaraviolaitis.altervista.org/evomatic/API/product/modifyProductDescription.php",
        {
          id,
          description,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      ),
      axios.post(
        "http://paninaraviolaitis.altervista.org/evomatic/API/product/modifyProductPrice.php",
        {
          id,
          price,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      ),
      axios.post(
        "http://paninaraviolaitis.altervista.org/evomatic/API/product/modifyProductQuantity.php",
        {
          id,
          quantity,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      ),
      axios.post(
        "http://paninaraviolaitis.altervista.org/evomatic/API/product/modifyProductCategory.php",
        {
          id,
          category,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      ),
    ])
    .then(axios.spread(item1, item2, item3, item4, (item5) => item5.data));
}

export function getProduct(id) {
  return axios
    .get(
      `http://paninaraviolaitis.altervista.org/evomatic/API/product/getProduct.php/${id}`
    )
    .then((res) => res.data);
}

export function deleteAccount(id) {
  return axios
    .get(
      `http://paninaraviolaitis.altervista.org/evomatic/API/user/deleteAccount.php/${id}`
    )
    .then((res) => res.data);
}

export function addAccount(name, surname, email) {
  return axios
    .post(
      "http://paninaraviolaitis.altervista.org/evomatic/API/user/addAccount.php",
      {
        name,
        surname,
        email,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}

export function changePassword(email, oldP, newP) {
  axios
    .post(
      "http://paninaraviolaitis.altervista.org/evomatic/API/user/changePassword.php",
      {
        email,
        oldPassword: oldP,
        newPassword: newP,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}
