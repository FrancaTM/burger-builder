import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = orderData => {
  return dispatch => {
    axios
      .post("/orders.json", orderData)
      .then(response => {
        console.log(response.data);
        // this.setState({ loading: false });
        // this.props.history.push("/");
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch(error => {
        // console.log(error);
        // this.setState({ loading: false });
        dispatch(purchaseBurgerFail(error));
      });
  };
};
