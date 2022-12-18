import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: any) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://localhost:8080",
			// Local development
			// changeOrigin: true,
			// build
			ws: true,
		})
	);
};
