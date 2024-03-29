app.user_keys.show = (route) => a.div([
  app.button({
    label: app.icon('fas fa-edit', 'Edit'),
    title: 'Edit token information',
    onclick: () => route.open('edit'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-user-secret', 'Token'),
    title: 'Replace token',
    onclick: () => route.open('token'),
  }),
  a.hr,
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete tokens',
        class: 'btn btn-outline-danger',
        onclick: () => route.open('delete'),
      }),
    ],
  }),
]);
