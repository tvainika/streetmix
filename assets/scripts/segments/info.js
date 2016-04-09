
export function prepareSegmentInfo (data) {
  for (var i in data) {
    for (var j in data[i].details) {
      var graphics = data[i].details[j].graphics

      if (graphics.repeat && !Array.isArray(graphics.repeat)) {
        graphics.repeat = [graphics.repeat]
      }
      if (graphics.left && !Array.isArray(graphics.left)) {
        graphics.left = [graphics.left]
      }
      if (graphics.right && !Array.isArray(graphics.right)) {
        graphics.right = [graphics.right]
      }
      if (graphics.center && !Array.isArray(graphics.center)) {
        graphics.center = [graphics.center]
      }
    }
  }

  return data
}
