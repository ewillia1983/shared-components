import color from 'color';

const colors = {
  black: '#666',
  white: '#fff',
  primary: '#00bcec',
  secondary: '#1f2a44',
  grayLightText: '#c2c2c2',
};

export default {
  name: 'default',

  colors,

  text: {
    fg: '#666',
    bg: 'transparent',
    fontSize: '14px',
    fontWeight: 'auto',
    fontFamily: '"Open Sans", Arial, sans-serif',
  },

  button: {
    fg: '#fff',
    bg: '#00bcec',
    activeFG: '#fff',
    activeBG: color('#00bcec').darken(0.2).string(),
    border: '1px solid #00bcec',
    fontSize: '0.9em',
    fontWeight: '700',
    fontFamily: '"Open Sans", Arial, sans-serif',
    textTransform: 'uppercase',
    padding: '15px 50px',
    margin: '1em 0.5em',
  },

  tab: {
    bg: 'transparent',
    fg: '#fff',
    accent: '#00bcec',
    activeFG: '#fff',
    fontSize: '1em',
    fontWeight: 'auto',
    padding: '2em 0',
    margin: '0 2em 0 0',
    // controls animations
    accentBarTop: 'auto',
    accentBarBottom: '0',
    marginBottom: 'auto',
  },

  textInput: {
    bg: '#fff',
    fg: '#666',
    accentValid: '#d9f5fc',
    disabledBG: '#e1e1e1',
    disabledFG: '#c2c2c2',
    disabledBorder: '1px solid #c2c2c2',
    border: '1px solid #e1e1e1',
    focusedBorder: '1px solid #c2c2c2',
    fontSize: '16px',
    padding: '1em 1em',
    margin: '0 1em 0 0',
    letterSpacing: '0.02em',
    lineHeight: '1.5',
  },

  radioButton: {
    bg: '#fff',
    fg: '#666',
    accent: '#00bcec',
    active: '#fff',
    border: '1px solid #c2c2c2',
    padding: '1em 1.4em',
  },

  topNav: {
    bg: '#1f2a44',
    fg: '#fff',
    padding: '0 2em',
    margin: '0',
  },

  sidebar: {
    bg: '#e1e1e1',
    fg: '#666',
    border: '1px solid #c2c2c2',
    margin: '0',
    padding: '0',
  },

  card: {
    bg: '#fff',
    fg: '#666',
    activeFG: '#00bcec',
    padding: '1em',
    margin: '0.25em 1em',
    border: '1px solid #c2c2c2',
  },

  form: {
    bg: 'transparent',
    fg: '#666',
    padding: '1em',
    margin: 'auto',
    border: 'none',
  },

  shadow: {
    color: 'rgba(0, 0, 0, 0.14)',
  },

  header: {
    fontSize: '22px',
    fontWeight: '100',
    fontFamily: '"Raleway", "Open Sans", Arial, sans-serif',
  },

  label: {
    fg: '#666',
    bg: 'transparent',
    fontWeight: 600,
    fontSize: '1em',
    letterSpacing: '0.02em',
    fontFamily: '"Raleway", Arial, sans-serif',
    margin: '1em 0 0 0',
    padding: '0 0 0.4em 0',
  },

  toggle: {
    bg: '#fff',
    fg: '#fff',
    activeBG: '#3a455c',
    activeFG: '#fff',
    border: '2px solid #3a455c',
    activeBorder: '2px solid #3a455c',
    disabledBG: '#666',
    disabledBorder: '2px solid #666',
    hoverBorder: '2px solid #008db1',
    hoverBG: '#008db1',
    focusShadow: '0 0 0 5px #d9f5fc',
    padding: '0.2em 0 0.2em 4.2em',
    margin: '0.2em',
    height: '2em',
    width: '3.6em',
    fontFamily: '"Raleway", "Open Sans", Arial, sans-serif',
    fontWeight: 600,
  },

  hook: {
    fg: '#3a455c',
    fontSize: '2em',
    fontFamily: '"Raleway", "Open Sans", Arial, sans-serif',
    fontWeight: 300,
  },

  subheader: {
    fontSize: '1.5em',
    fontFamily: '"Raleway", "Open Sans", Arial, sans-serif',
    fontWeight: 300,
    fg: '#3a455c',
  },

  icon: {
    fontSize: '16px',
    fg: 'inherit',
  },

  code: {
    fontFamily: '"Source Code Pro", monospace',
    inlineFG: '#666',
    inlineBG: '#f1f1f1',
    inlineBorder: '1px solid #e4e4e4',
    borderRadius: '3px',
    fontSize: '0.85em',
    padding: '0.3em',
  },

  selectItem: {
    fg: '#666',
    bg: '#fff',
    activeFG: '#008db1',
    padding: '0.5em',
    border: '1px solid #c2c2c2',
  },

  accordion: {
    labelFG: '#00bcec',
    labelFontSize: '1.5em',
    labelFontFamily: 'Raleway, "Open Sans", sans-serif',
    border: '1px solid #c2c2c2',
    padding: '30px',
  },
};
