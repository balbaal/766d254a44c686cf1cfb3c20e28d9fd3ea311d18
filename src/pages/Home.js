import React from "react";

// Components
import { CtaBack, DatePicker, Cart } from "elements";
import { NavButton, TimeLine, Modal } from "parts";

// Utils
import { getDaysInMonth } from "utils";

class Home extends React.Component {
  state = {
    isShowCart: false,
    isShowSearch: false,
    search: "",
  };

  componentDidMount() {
    // hide navigation when scroll down
    const elSelect = document.querySelector(".nav-button");
    let prevScroll = window.pageYOffset;

    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset;

      if (prevScroll < currentScroll) {
        elSelect.classList.add("hide");
      } else if (prevScroll > currentScroll) {
        elSelect.classList.remove("hide");
      }

      console.log("prevScroll :>> ", prevScroll);
      console.log("currentScroll :>> ", currentScroll);
      prevScroll = currentScroll;
    });
  }

  render() {
    const { isShowCart, isShowSearch, search } = this.state;

    return (
      <div className="container">
        <div
          className="shadow shadow-sm"
          style={{
            margin: "0 -15px 32px",
            padding: "8px 15px",
            position: "sticky",
            backgroundColor: "white",
            top: 0,
          }}
        >
          <CtaBack
            onClick={() => this.setState({ ...this.state, isShowSearch: true })}
          />
          <DatePicker
            listOfDate={getDaysInMonth(
              new Date().getMonth(),
              new Date().getFullYear()
            )}
          />

          <NavButton />
        </div>
        <TimeLine
          onClick={() => this.setState({ ...this.state, isShowCart: true })}
        />
        {isShowCart && (
          <Cart
            onClick={() => this.setState({ ...this.state, isShowCart: false })}
          />
        )}

        {isShowSearch && (
          <Modal
            title="Cek makanan yang tersedia di lokasi kamu!"
            onClick={() =>
              this.setState({
                ...this.state,
                isShowSearch: false,
              })
            }
          >
            Search
          </Modal>
        )}
      </div>
    );
  }
}

export default Home;
