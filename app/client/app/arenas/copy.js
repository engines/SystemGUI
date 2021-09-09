app.arenas.copy = (route) => (a,x) => a.div([
  a.h3('Copy'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/copy`,
    method: 'POST',
    scope: 'arena',
    form: (f) => [
      f.field({
        key: 'new_identifier',
        label: false,
        placeholder: 'Enter an identifier for the copy',
      }),
    ],
    digest: (form) => form.arena,
    success: (identifier) => {
      dashboardMenu.$render()
      route.open(`../../@${identifier}`)
    },
  }),
]);
