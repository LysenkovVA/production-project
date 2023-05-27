export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLE_DETAILS"] = "article_details";
    AppRoutes["ARTICLE_CREATE"] = "article_create";
    AppRoutes["ARTICLE_EDIT"] = "article_edit";
    AppRoutes["ADMIN_PANEL"] = "admin_panel";
    AppRoutes["FORBIDDEN"] = "forbidden";
    // Last
    AppRoutes["NOT_FOUND"] = "not_found";
})(AppRoutes || (AppRoutes = {}));
export var getRouteMain = function () { return "/"; };
export var getRouteAbout = function () { return "/about"; };
export var getRouteProfile = function (id) { return "/profile/".concat(id); };
export var getRouteArticles = function () { return "/articles"; };
export var getRouteArticleDetails = function (id) { return "/articles/".concat(id); };
export var getRouteArticleCreate = function () { return "/articles/new"; };
export var getRouteArticleEdit = function (id) { return "/articles/".concat(id, "/edit"); };
export var getRouteAdmin = function () { return "/admin"; };
export var getRouteForbidden = function () { return "/forbidden"; };
