export const updateMonetization = (interledgerPaymentPointer = "") => {
  if (interledgerPaymentPointer) {
    console.log("Monetization updated to artist");
    document
      .querySelector("meta[name=monetization]")
      .setAttribute("content", interledgerPaymentPointer);
  } else {
    console.log("Monetization updated to original");
    document
      .querySelector("meta[name=monetization]")
      .setAttribute("content", "$ilp.uphold.com/WUdKN2pAgLAG");
  }
};
