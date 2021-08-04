app.theme.palette = (name, colors, options) => app.theme({
  name: name,
  color: colors.text1,
  backgroundColor: !options.gradient ? colors.bg2 : undefined,
  background: options.gradient ? `linear-gradient(to bottom, ${colors.bg1}, ${colors.bg2})` : undefined,

  placeholderColor: colors.text2,
  borderColor: colors.outline,
  errorColor: colors.attention,
  successColor: colors.look,
  controlBoxShadowColor: colors.outline,

  buttonColor: colors.text1,
  buttonBackgroundColor: colors.bg1,
  buttonColorActive: colors.bg1,
  buttonBackgroundColorActive: colors.text2,
  buttonColorHover: colors.bg1,
  buttonBackgroundColorHover: colors.text1,

  navbarBrandColor: colors.text1,
  navbarButtonColor: colors.text2,
  navbarButtonColorActive: colors.text1,
  navbarButtonColorHover: colors.text1,
  navbarBackgroundColor: colors.bg1,

  outColor: colors.text2,
  outNullColor: colors.attention,
  outNumberColor: colors.attention,
  outBooleanColor: colors.attention,
  outTextColor: colors.text1,
})
