app.settings.about.reload = route => a.div([
  app.spinner('Updating settings'),
  a({
    $init: () => location.assign('/settings'),
  })
])
