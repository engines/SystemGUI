app.blueprints.design.export = (route, blueprint) => (a, x) => a.div([
  a.h3(`Export`),
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/location`,
    // [
    //   `/api/blueprints/@${route.params.blueprintIdentifier}/location`,
    //   // `/api/blueprints/@${route.params.blueprintIdentifier}/publication/diff`,
    // ],
    success: (location) => [
      app.locationLabel(location),
      a.br,
      // app.collapse({
      //   label: 'Diff',
      //   body: a.pre(diff),
      // }),
      app.form({
        url: `/api/blueprints/@${route.params.blueprintIdentifier}/publication/export`,
        method: "POST",
        scope: 'export',
        form: (f) => [
          f.field({
            key: 'message',
            as: 'textarea',
            required: true,
          }),
          f.buttons({route: route}),
        ],
        success: () => route.open('..'),
      }),
    ],
  }),
]);
