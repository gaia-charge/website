export const chartColors = [
  "#4C8C40",
  "#F9B233",
  "#9E2B2B",
  "#006BA6",
  "#0496FF",
  "#D81159",
  "#548080",
  "#214EA3",
  "#7A5DB0",
  "#7CA9FC",
  "#89C47E",
  "#CFF783",
  "#84F5F5",
  "#C0EFEC",

];

export const formatPower = (power) => {
  const floatPower = parseFloat(power);
  if (floatPower < 1) {
    return `${Math.floor(power * 1000)}W`;
  }
  if (floatPower <= 7.4) {
    return `${power}kW`;
  }
  if (floatPower < 1000) {
    return `${floatPower.toFixed(0)}kW`;
  }
  if (floatPower < 1000000) {
    return `${(floatPower / 1000).toFixed(0)}MW`;
  }
};

export const sanitizeNetworkNames = (network) => {
  if (
    network ===
    "Alian\u00e7a de Municipis de Catalunya i Institut Catal\u00e0 d\u2019Energia."
  ) {
    return "Municipality of Catalunya";
  }
  return network;
};
