import React, { Component } from "react";
import Identicon from "identicon.js";

class Main extends Component {
  render() {
    return (
      // div that only allows 3 posts per row.
      <div className="flex flex-wrap justify-center">
        {this.props.images.map((image, key) => {
          return (
            <div className="">
              <div className="" key={key}>
                <div className="">
                  <img
                    className=""
                    width="30"
                    height="30"
                    src={`data:image/png;base64,${new Identicon(
                      image.author,
                      30
                    ).toString()}`}
                  />
                  <small className="">{image.author}</small>
                </div>
                <ul id="imageList" className="">
                  <li className="">
                    <p class="">
                      <img
                        src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                        style={{ maxWidth: "420px" }}
                      />
                    </p>
                    <p>{image.description}</p>
                  </li>
                  <li key={key} className="">
                    <small className="">
                      TIPS:{" "}
                      {window.web3.utils.fromWei(
                        image.tipAmount.toString(),
                        "Ether"
                      )}{" "}
                      ETH
                    </small>
                    <button
                      className=""
                      name={image.id}
                      onClick={(event) => {
                        let tipAmount = window.web3.utils.toWei("0.1", "Ether");
                        console.log(event.target.name, tipAmount);
                        this.props.tipImageOwner(event.target.name, tipAmount);
                      }}
                    >
                      TIP 0.1 ETH
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
