import React, { Component } from "react";
import Identicon from "identicon.js";
import styles from "../styles/Main.module.css";

class Main extends Component {
  render() {
    return (
      // div that only allows 3 posts per row.
      <div className="flex flex-wrap justify-center">
        <div className={styles.uploadFont}>
          <link
            href="https://fonts.googleapis.com/css2?family=Comforter&family=Poppins:wght@300&family=Supermercado+One&display=swap"
            rel="stylesheet"
          />
          {this.props.images.map((image, key) => {
            return (
              /*
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
            */
              <div class="block overflow-hidden rounded-2xl mr-2 mb-2 border border-gray-500">
                <img
                  class="object-cover w-full h-56 "
                  src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                  alt=""
                />

                <div class="p-4 ">
                  <p className={styles.font}>
                    Uploaded by: {this.props.account.slice(0, 5)}...
                    {this.props.account.slice(-4)}
                  </p>

                  <h5 class="border-b border-gray-500">{image.description}</h5>

                  <p class="mt-1 text-xs opacity-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                  </p>
                  <span class="text-gray-500">
                    {window.web3.utils.fromWei(
                      image.tipAmount.toString(),
                      "Ether"
                    )}{" "}
                    ETH
                  </span>
                  <button
                    class="ml-2  font-bold py-2 px-4 rounded-full"
                    name={image.id}
                    onClick={(event) => {
                      let tipAmount = window.web3.utils.toWei("0.1", "Ether");
                      console.log(event.target.name, tipAmount);
                      this.props.tipImageOwner(event.target.name, tipAmount);
                    }}
                  >
                    TIP 0.1 ETH
                  </button>
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
