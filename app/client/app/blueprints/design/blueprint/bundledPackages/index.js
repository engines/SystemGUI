app.blueprints.design.blueprint.bundledPackages.index = (route, blueprint) => a.div([
  app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'bundled_packages',
      as: 'many',
      report: (rr) => [
        app.clickable(
          a['div.p-1']([
            rr.object.target ? a.div([
              rr.object.target.identifier || '', ' ',
              rr.object.target.repository || a['.error']('No repository'), ' ',
              rr.object.target.branch ? a.small(`${rr.object.target.branch}`) : '',
            ]) : '',
          ]),
          () => route.open(`${rr.index}`),
        ),
      ]
    })
  }),
  a.br,
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-list-ol', 'Manage bundled packages'),
      onclick: (e) => route.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add bundled package'),
      onclick: (e) => route.open('new'),
      class: 'btn btn-secondary',
    }),
  ]),
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: (e) => route.open('..'),
      class: 'btn btn-primary',
    }),
  ]),
])
