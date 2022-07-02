import React, { Component } from "react";
import Identicon from "identicon.js";
import styles from "../styles/Main.module.css";
import {
  Button,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

class Main extends Component {
  render() {
    return (
      // div that only allows 3 posts per row.
      <div className={styles.uploadFont}>
        <h1 className="ml-2">Assorted: Highest Tipped</h1>
        <div className="flex flex-wrap justify-center">
          {this.props.images.map((image, key) => {
            return (
              <div className="block overflow-hidden rounded-2xl mr-2 mb-2 border border-gray-500 ">
                <img
                  class="object-cover w-full h-56 "
                  src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                  alt=""
                  // make image fit the container
                  style={{
                    maxWidth: "290px",
                  }}
                />

                <div class="">
                  <Link
                    href={`https://www.etherscan.io/address/${image.author}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                  >
                    {image.author}
                  </Link>
                  <ul id="imageList" className="">
                    <li className="">
                      <p class=""></p>
                      <p
                        className={styles.font}
                        class="border-b border-gray-500 mb-2 max-w-xs"
                      >
                        {image.description.length > 33
                          ? image.description.substring(0, 33) + "..."
                          : image.description}
                      </p>
                    </li>
                    <li key={key} className="space-x-9 mb-2">
                      <small className="ml-1">
                        TIPS:{" "}
                        {window.web3.utils.fromWei(
                          image.tipAmount.toString(),
                          "Ether"
                        )}{" "}
                        ETH
                      </small>
                      <Button
                        size="xs"
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
                      </Button>
                      <Button
                        //on click run handleClick function
                        onClick={this.handleClick}
                        size="xs"
                      >
                        More Info
                      </Button>
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
