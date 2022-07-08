import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ethers } from "ethers";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log("Requesting account...");

    // Check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        provider.on("network", (newNetwork, oldNetwork) => {
          // When a Provider makes its initial connection, it emits a "network"
          // event with a null oldNetwork along with the newNetwork. So, if the
          // oldNetwork exists, it represents a changing network
          if (oldNetwork) {
            window.location.reload();
          }
        });
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  async function changeWallet() {
    const accounts = await window.ethereum
      .request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      })
      .then(() =>
        ethereum.request({
          method: "eth_requestAccounts",
        })
      );
    setWalletAddress(accounts[0]);
    const account = accounts[0];
  }

  return (
    <div className="flex w-full justify-between px-4 py-2 border-b border-gray-500 ">
      <link
        href="https://fonts.googleapis.com/css2?family=Comforter&family=Poppins:wght@300&family=Supermercado+One&display=swap"
        rel="stylesheet"
      />
      <Link href="/">
        <h1 className={styles.navbarText}>Web3.Me</h1>
      </Link>

      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-500  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ml-2 text-sm font-medium  rounded-lg border border-gray-500"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>

      <div className={styles.navbarHeader}>
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="/marketplace">
          <Button variant="ghost">Marketplace</Button>
        </Link>
        <Link href="/profile">
          <Button variant="ghost">Profile</Button>
        </Link>
      </div>
      <div className="flex items-center">
        &nbsp;&nbsp;
        <ThemeSwitcher />
        &nbsp;&nbsp;
        {walletAddress ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="purple"
              onClick={requestAccount}
            >
              {walletAddress.length > 0 &&
                walletAddress.substring(0, 5) +
                  "..." +
                  walletAddress.substring(walletAddress.length - 4)}
              {walletAddress.length === 0 && "Connect Wallet"}
            </MenuButton>
            <MenuList>
              <MenuItem>View Profile</MenuItem>
              <MenuItem onClick={changeWallet}>Change Wallet</MenuItem>
              <MenuItem>Disconnect</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <ConnectButton className="connectButton" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
