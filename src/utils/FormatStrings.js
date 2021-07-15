
const FormatStrings = (value, title, leng) => {
  if (value === undefined) {
    return title
  } else if (leng !== 4) {
    return value.length > leng ? value.slice(0, leng) + '...' : value
  } else {
    return value.slice(0, leng)
  }
}

export default FormatStrings
