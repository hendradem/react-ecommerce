import React from "react";
import { Toast } from "react-bootstrap";

class ToastNotif extends React.Component {
  render() {
    return (
      <div>
        <Toast style={style.toast} show={true} delay={3000} autohide={true}>
          <Toast.Header CloseButton>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </div>
    );
  }
}

const style = {
  toast: {
    position: "absolute",
    top: "0",
    right: "0",
    margin: "80px 30px",
  },
};

export default ToastNotif;
