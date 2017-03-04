import { SET_DEBUG_FLAGS } from '../actions'

const initialState = {
  hoverPolygon: false,
  canvasRectangles: false,
  forceLeftHandTraffic: false,
  forceMetric: false,
  forceUnsupportedBrowser: false,
  forceNonRetina: false,
  forceNoInternet: false,
  forceReadOnly: false,
  forceTouch: false,
  forceLiveUpdate: false,
  secretSegments: false,
  experimental: false
}

const debug = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEBUG_FLAGS:
      const obj = Object.assign({}, state, action)
      delete obj.type // Do not save action type.
      return obj
    default:
      return state
  }
}

export default debug
