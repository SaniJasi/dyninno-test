export default defineNuxtRouteMiddleware((to) => {
  const isAuthenticated = useCookie("isAuthenticated");

  if (!toValue(isAuthenticated) && to.path !== "/") {
    return navigateTo("/");
  }

  if (toValue(isAuthenticated) && to.path === "/") {
    return navigateTo("/protected");
  }
});
