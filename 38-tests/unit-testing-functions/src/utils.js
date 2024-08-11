export function formatAddress(address) {
  const { city, street, suite, zipcode } = address

  return `This user lives in the city of ${city} on ${street} street in the house ${suite}. Him zipcode is ${zipcode}`
}
