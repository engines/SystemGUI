app.collapse = ( options={} ) => a['app-collapse']( [
  app.button( {
    label: a({
      $tag: 'app-collapse-indicator',
      $nodes: ( el ) => app.icon( el.$iconClass(), options.label ),
      $display: options.display,
      $update: (el) => (display) => {
        el.$display = display
        el.$render()
      },
      $iconClass: (el) => () => el.$display ?
      'fa fa-caret-down' : 'fa fa-caret-right',
    }),
    onclick: (e) => e.currentTarget.$('^').$toggle(),
    class: 'btn app-btn',
    ...options.button,
  } ),
  a['app-collapse-body'](
    options.body,
    {
      ...options.bodyTag,
      style: {
        display: options.display ? 'unset': 'none',
        ...( options.bodyTag || {} ).style,
      }
    }
  ),
], {
  $toggle: (el) => () => { el.$update(!el.$('app-collapse-indicator').$display) },
  $update: (el) => (display) => {
    el.$('app-collapse-indicator').$update(display)
    el.$render()
    let body = el.$('app-collapse-body')
    if ( display ) {
      x.lib.animate.fade.in( body )
      let firstControl = el.$$('appkit-form-control').$$[0]
      if ( firstControl ) {
        firstControl.$focus()
      }
      // Libs needs to be refreshed when appear.
      el.$$('appkit-form-simplemde').$refresh()
    } else {
      x.lib.animate.fade.out( body )
    }
  },
  ...options.collapseTag
} )
