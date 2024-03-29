app.arenas.resolutions.prebuild = (route) => a.div([
  a.h3(`Prebuild`),
  a.p('Are you sure that you want to prebuild an image for this pack?'),
  app.jsonForm({
    url: `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/build`,
    method: "POST",
    route: route,
    form: f => [
      f.field({
        key: 'background',
        value: 'on',
        as: 'hidden',
      }),
    ],
    success: (result) => route.load('output', {timestamp: result.timestamp}),
  }),
]);
