app.formDSL.designer.report.fieldset = blueprint => f => f.field( {
  key: 'fieldset',
  as: 'one',
  label: false,
  dependent: {
    key: 'type',
    pattern: '^fieldset$',
  },
  form: ff => [

    app.collapse( {
      label: 'Options',
      body: [

        ff.field( {
          key: 'label',
        } ),

        ff.field( {
          key: 'legend',
        } ),

        ff.field( {
          key: 'layout',
          as: 'checkbox',
          checked: 'vertical',
          control: { label: 'Vertical' },
        } ),

        ff.field( {
          key: 'dependent',
          as: 'one',
          form: (fff) => fff.row( { columns: [
            fff.field( {
              key: 'target',
            } ),
            fff.field( {
              key: 'pattern',
            } ),
          ] } ),
        } ),

      ],
    } ),

    app.collapse( {
      label: 'Components',
      body: app.formDSL.designer.report.components( blueprint )(ff),
    } ),

  ]
} )
