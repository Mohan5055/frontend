import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <VStack>
      <Image
        src={img}
        width="200px" // Set a larger width
        height="200px" // Set a larger height
        objectFit="contain" // Ensures the image fits nicely without being cropped
        boxSize="200px" // Optional: Controls both width and height uniformly
        alt="Descriptive Alt Text"
      />

      <Text>₹{amount}</Text>
      <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
    </VStack>
  );
};

export default Card;
