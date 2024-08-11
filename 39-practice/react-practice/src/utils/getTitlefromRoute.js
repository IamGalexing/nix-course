export const getTitleFromRoute = (route) => {
  if (!route) return ''

  const trimmedRoute = route.startsWith('/') ? route.slice(1) : route

  return trimmedRoute.charAt(0).toUpperCase() + trimmedRoute.slice(1)
}
