const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/100tifi.co" ? route : "/:id";
    return validRoute;
  }

  return `/${route}`;
};

export default resolveRoutes;
