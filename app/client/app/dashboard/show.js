app.dashboard.show = (route) => a['app-dashboard-show']([

  app.button({
    label: app.icon('fas fa-vector-square', 'Arenas'),
    onclick: () => route.open('/arenas'),
  }),
  app.button({
    label: app.icon('fas fa-shapes', 'Blueprints'),
    onclick: () => route.open('/blueprints'),
  }),

])
