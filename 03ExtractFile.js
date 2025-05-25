function extractFile(str) {
  let importantPart = str.split("\\").pop();
  let lastDotIndex = importantPart.lastIndexOf(".");
  let fileName = importantPart.slice(0, lastDotIndex);
  let extention = importantPart.slice(lastDotIndex + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extention}`);
}
extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
