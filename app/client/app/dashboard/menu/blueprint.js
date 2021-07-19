app.dashboard.menu.blueprint = (route, blueprintIdentifier) => (a,x) => app.button({
  label: blueprintIdentifier,
  buttonTag: {
    $init: (el) => {
      setTimeout(el.$activate, 0)
    },
    $activate: (el) => () => {
      if (el.$match()[1] == blueprintIdentifier) {
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    },
    $on: {
      click: (e, el) => {
        let match = el.$match()
        let path = [
          `/blueprints/@${blueprintIdentifier}`,
          match[2] == 'design' ? 'design' : null
        ].filter(Boolean).join('/')
        route.open(path)
      },
    },
    $match: (el) => () => {
      return window.location.pathname.match(/^\/blueprints\/@([\w\-]+)?[\/]?([\w\-]+)?/) || []
    },
  }
})
