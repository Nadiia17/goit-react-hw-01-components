export const generateRandomPastelColor = () => {
  const r = Math.floor(Math.random() * 55 + 200); // 200-255
  const g = Math.floor(Math.random() * 55 + 200); // 200-255
  const b = Math.floor(Math.random() * 55 + 200); // 200-255

  return `rgb(${r}, ${g}, ${b})`;
};
