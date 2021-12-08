import Icons from './icons.json'

const base = 5

export const Layout = {
  base,

  button: {
    xxxs: 15,
    xxs: 20,
    xs: 25,
    sm: 35,
    md: 40,
    lg: 50,
    xl: 60,
  },
}

export const Padding = {
  fourth: base / 4,
  second: base / 2,
  single: base,
  double: 2 * base,
  triple: 3 * base,
  quad: 4 * base,
  quint: 5 * base,
  sex: 6 * base,
}

export const Radius = {
  sm: 5,
  md: 10,
  lg: 15,
  max: ~(1 << 31),
}

export { Icons }
