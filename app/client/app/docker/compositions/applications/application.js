app.docker.compositions.applications.application = (application) =>
a['app-docker-compositions-applications-application.app-dashboard-item']({
  id: `app-docker-compositions-applications-${application.id}`,
  $nodes: (el) => a['div.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.p-2']([
        app.float({
          left: a.span([
            a.img({
              src: `/api/blueprints/@${application.identifier.split('::')[1]}/icon/thumbnail`,
              height: '24',
              width: '24'
            }),
            ' ',
            application.identifier.split('::')[1],
          ]),
          right: a['app-docker-compositions-applications-stale'](application.stale ? app.icon('fas fa-exclamation-triangle', '', {iconTag: {style: {color: 'red'}}}) : ''),
        })
      ], {
        $on: {
          click: (e) => {
            let menuEl = e.currentTarget.$('^.app-dashboard-item .app-dashboard-item-menu')
            if (menuEl.classList.contains('active')) {
              menuEl.classList.remove('active')
            } else {
              menuEl.classList.add('active')
              menuEl.scrollIntoView({block: "center", behavior: 'smooth'});
            }
          },
        }
      }),
      app.docker.compositions.applications.menu(application),
    ]),
  ]),
})
