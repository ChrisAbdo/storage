import React, { Component } from "react";
import Identicon from "identicon.js";
import styles from "../styles/Main.module.css";

class Main extends Component {
  render() {
    return (
      // div that only allows 3 posts per row.
      <div className={styles.uploadFont}>
        <div className="flex flex-wrap justify-center">
          {this.props.images.map((image, key) => {
            return (
              <div className="block overflow-hidden rounded-2xl mr-2 mb-2 border border-gray-500 ">
                <img
                  class="object-cover w-full h-56 "
                  src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                  alt=""
                />

                <div class="">
                  <small className="">{image.author}</small>
                  <ul id="imageList" className="">
                    <li className="">
                      <p class=""></p>
                      <p className={styles.font}>{image.description}</p>
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
                          let tipAmount = window.web3.utils.toWei(
                            "0.1",
                            "Ether"
                          );
                          console.log(event.target.name, tipAmount);
                          this.props.tipImageOwner(
                            event.target.name,
                            tipAmount
                          );
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
      </div>
    );
  }
}

export default Main;
