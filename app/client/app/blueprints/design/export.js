app.blueprints.design.export = (route, blueprint) => (a, x) => a.div([
  a.h3(`Export`),
  app.jsonForm({
    url: `/api/publications/@${route.params.blueprintIdentifier}/export`,
    method: "POST",
    route: route,
    scope: 'model',
    form: (f) => [
      f.field({
        key: 'message',
        as: 'textarea',
        label: false,
        placeholder: 'Message',
      }),
    ],
    success: () => route.load('output'),
  }),
]);
