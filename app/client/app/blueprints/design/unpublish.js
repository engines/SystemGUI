app.blueprints.design.unpublish = (route) => (a, x) => a.div([
  a.h3(`Unpublish blueprint`),
  app.form({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/publication`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);