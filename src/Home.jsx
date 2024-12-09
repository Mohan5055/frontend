import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";
import daa from "../src/images/daa_mockup.png";
import immunity from "../src/images/immunity_mockup.png";
import iis from "../src/images/iis_mockup.png";
import sleep from "../src/images/sleep_mockup.png";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Mr.Anuj Patel",
      description: " RazorPay",
      // image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Anuj Kumar Patel",
        email: "anujpatel5055@gmail.com",
        contact: "7071543130",
      },
      notes: {
        address: "Panewa panei Maharajganj",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card amount={1} img={daa} checkoutHandler={checkoutHandler} />
        <Card amount={1} img={immunity} checkoutHandler={checkoutHandler} />
        <Card amount={1} img={iis} checkoutHandler={checkoutHandler} />
        <Card amount={1} img={sleep} checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  );
};

export default Home;
