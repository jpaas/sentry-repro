export const crashyFn = () => {
  const message = "Triggering javascript crash..."
  console.info(message)
  throw new Error(message)
}
