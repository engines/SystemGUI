app.user_keys.token = (route) => (a, x) => a.div([
  app.jsonForm({
    url: `/api/user_keys/@${route.params.userKeyIdentifier}`,
    method: "PUT",
    route: route,
    scope: 'model',
    horizontal: true,
    form: (f) => [
      f.field({
        key: 'domain',
        value: 'github.com',
      }),
      app.user_keys.form.token(f),
    ],
    success: () => route.open('..'),
  }),
]);
