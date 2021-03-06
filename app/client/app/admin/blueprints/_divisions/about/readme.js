app.admin.blueprints.about.readme = (router) => (a, x) => a.div([
  app.fetch({
    url: `/api/blueprints/${router.params.blueprint_id}/readme`,
    success: (readme, el) => {
      el.$nodes = [
        app.form({
          url: `/api/blueprints/${router.params.blueprint_id}/readme`,
          method: "PUT",
          object: {readme: readme},
          form: (f) => [
            f.field({
              key: 'readme',
              as: 'markdown',
            }),
            f.buttons({router: router})
          ],
          success: () => router.open('..'),
        }),
      ]
    }
  }),
]);
