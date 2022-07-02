import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/HomeNavbar";
import { Text, Button } from "@chakra-ui/react";
import { Component, useState } from "react";
import styles from "../styles/Home.module.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>melomania</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Comforter&family=Poppins:wght@300&family=Supermercado+One&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main>
          <div className={styles.welcomeText}>
            <Navbar />
            <Text
              fontSize="6xl"
              fontWeight="extrabold"
              className={styles.welcomeText}
            >
              Welcome to 0xChange
            </Text>
            <Text
              fontSize="3xl"
              fontWeight="extrabold"
              className={styles.welcomeText}
            >
              a one of a kind multi-chain wallet and exchange
            </Text>
            <Text
              fontSize="3xl"
              fontWeight="extrabold"
              className={styles.welcomeText}
            >
              get started by connecting your wallet{" "}
            </Text>
            <div className="mt-6">
              <Link href="/marketplace">
                <Button>Marketplace</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
