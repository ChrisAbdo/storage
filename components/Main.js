import React, { Component } from "react";
import Identicon from "identicon.js";
import { Input } from "@chakra-ui/react";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main
            role="main"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "500px" }}
          >
            <div className="content mr-auto ml-auto">
              <form
                className="mb-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  const description = this.imageDescription.value;
                  this.props.uploadImage(description);
                }}
              >
                {/*
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .bmp, .gif"
                  onChange={this.props.captureFile}
                />
                <div className="form-group mr-sm-2">
                  <br></br>
                  <input
                    id="imageDescription"
                    type="text"
                    ref={(input) => {
                      this.imageDescription = input;
                    }}
                    className="form-control"
                    placeholder="Image description..."
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block btn-lg">
                  Upload!
                </button>
              </form>
              */}
                <div class="p-6 max-w-sm  rounded-lg border shadow-md flex-1 items-center justify-content">
                  <div className="flex items-center justify-content" href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                      Upload Song
                    </h5>
                  </div>
                  <p class="mb-3 font-normal ">Accepted Files: mp3, mp4, wav</p>
                  <input
                    class="form-control
                                    w-full
                                    px-3
                                    py-0.5
                                    text-base
                                     bg-clip-padding
                                    border border-gray-500
                                    rounded
                                    transition
                                    ease-in-out
                                    mb-4
"
                    type="file"
                    id="formFile"
                    accept=".jpg, .jpeg, .png, .bmp, .gif"
                    onChange={this.props.captureFile}
                  />
                  <Input
                    className="mb-4"
                    placeholder="Song Description"
                    id="imageDescription"
                    type="text"
                    ref={(input) => {
                      this.imageDescription = input;
                    }}
                    required
                  />
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {this.props.images.map((image, key) => {
                return (
                  <div className="card mb-4" key={key}>
                    <div className="card-header">
                      <img
                        className="mr-2"
                        width="30"
                        height="30"
                        src={`data:image/png;base64,${new Identicon(
                          image.author,
                          30
                        ).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p class="text-center">
                          <img
                            src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                            style={{ maxWidth: "420px" }}
                          />
                        </p>
                        <p>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS:{" "}
                          {window.web3.utils.fromWei(
                            image.tipAmount.toString(),
                            "Ether"
                          )}{" "}
                          ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
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
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
