export async function generateImage(prompt) {
  // Dummy async function to simulate image generation
  await new Promise((res) => setTimeout(res, 500));
  const encoded = encodeURIComponent(prompt);
  return `https://via.placeholder.com/800x600.png?text=${encoded}`;
}
