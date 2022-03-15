app.blueprints.design.blueprint.bindings.new = (route, blueprint) => a.div([
  app.fetch({
    url: '/api/blueprints/list',
    success: (blueprints, el) => a.div([
      app.blueprints.design.blueprint.form({
        route: route,
        scope: 'binding',
        form: (f) => [
          f.field({
            key: 'target_identifier',
            label: 'Target',
            as: 'select',
            placeholder: 'Select blueprint',
            selections: blueprints,
            required: true,
          }),
        ],
        digest: (form) => {
          blueprint.bindings = [...(blueprint.bindings || []), app.compact(form.binding)];
          return {model: blueprint}
        },
        success: () => route.open(`../${blueprint.bindings.length - 1}`),
      }),
    ])
  }),
])
