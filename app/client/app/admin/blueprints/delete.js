app.admin.blueprints.delete = (router) => (a, x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/blueprints/${router.params.blueprint_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../..'),
  }),
]);
