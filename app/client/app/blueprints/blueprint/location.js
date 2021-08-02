app.blueprints.blueprint.location = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/location`,
    success: location => [
      app.float({
        left: [
          location ? a.p(app.locationLabel(location)) : app.placeholder('No location'),
        ],
        right: [
          route.mount({
            routes: {
              '/?': (route) => [
                app.button({
                  label: app.icon('fas fa-file-import', 'Reimport'),
                  onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/reimport`),
                })
              ],
              '/design/?*': (route) => [
                a['.activatable']([
                  x.transition.fade({}),
                ], {
                  $state: false,
                  $update: (el, state) => {
                    el.$('ax-appkit-transition').$to(
                      state ? [
                        location ? app.button({
                          label: app.icon("fas fa-file-export", "Export"),
                          onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/export`),
                        }) : null,
                        ' ',
                        app.button({
                          label: app.icon("fas fa-location-arrow", "Location"),
                          onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/location`),
                        })
                      ] : null
                    )
                  },
                  $init: (el) => el.$activate(),
                  $activate: (el) => () => {
                    if (
                      window.location.pathname
                      .replace(/^\/blueprints\/@[\w\-]+\/design/, '')
                      .match(/^(?!export|\/export).*/)
                    ) {
                      el.$state = true
                    } else {
                      el.$state = false
                    }
                  }
                }),
              ],
              '*': null,
            }
          }),
        ],
      }),
      a.hr,
    ]
  }),
]