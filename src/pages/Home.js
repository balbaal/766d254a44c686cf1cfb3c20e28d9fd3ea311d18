import React from "react";
import { RoomRounded } from "@material-ui/icons";

// Components
import { CtaBack, DatePicker, Cart, Input, MapResult } from "elements";
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
    const elSelect = document.querySelector(".shadow-soft");
    let prevScroll = window.pageYOffset;

    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset;

      if (prevScroll < currentScroll) {
        elSelect.classList.add("d-none");
      } else if (prevScroll > currentScroll) {
        elSelect.classList.remove("d-none");
      }

      prevScroll = currentScroll;
    });
  }

  render() {
    const { isShowCart, isShowSearch, search } = this.state;

    return (
      <div className="container">
        <div
          style={{
            margin: "0 -15px 80px",
            padding: "16px 15px 0",
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
        </div>
        <div
          className="container shadow-soft"
          style={{
            position: "fixed",
            top: "122px",
            left: 0,
            right: 0,
            backgroundColor: "white",
            padding: "8px 15px",
          }}
        >
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
            <Input
              icon={<RoomRounded />}
              type="text"
              value={search}
              onChange={(e) =>
                this.setState({ ...this.state, search: e.target.value })
              }
            />

            {search.length >= 3 && <MapResult />}
          </Modal>
        )}
      </div>
    );
  }
}

export default Home;
