const routes = {
    "/" :  "home.html",
    "/second" :  "second url",
};

function getRequestedRoute(url) 
{
    return routes[url];
}

module.exports = { getRequestedRoute };