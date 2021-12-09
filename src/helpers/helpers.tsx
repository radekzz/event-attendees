export const getRandomHexColor = () => {
  return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16)
}