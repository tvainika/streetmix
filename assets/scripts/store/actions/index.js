/**
 * Redux store actions.
 *
 * A "best practice" for large applications is to store actions as string
 * constants. The following text is copied from Redux documentation:
 * http://redux.js.org/docs/recipes/ReducingBoilerplate.html#actions
 *
 *  > Why is this beneficial? It is often claimed that constants are unnecessary,
 *  > and for small projects, this might be correct. For larger projects, there
 *  > are some benefits to defining action types as constants:
 *
 *  >   - It helps keep the naming consistent because all action types are
 *  >     gathered in a single place.
 *  >   - Sometimes you want to see all existing actions before working on a
 *  >     new feature. It may be that the action you need was already added by
 *  >     somebody on the team, but you didn't know.
 *  >   - The list of action types that were added, removed, and changed in a
 *  >     Pull Request helps everyone on the team keep track of scope and
 *  >     implementation of new features.
 *  >   - If you make a typo when importing an action constant, you will get
 *  >     `undefined`. Redux will immediately throw when dispatching such an
 *  >     action, and you'll find the mistake sooner.
 *
 * Following that suggestion, we will collect and export all actions as string
 * constants from this module.
 *
 * We are not currently exporting action creators (see that documentation to
 * learn more about them). This may change in the future as the need arises,
 * but for now all scripts can dispatch to the store directly.
 *
 * > Action creators have often been criticized as boilerplate. Well, you don't
 * > have to write them!
 */

/* gallery */

export const SHOW_GALLERY = 'SHOW_GALLERY'
export const SET_GALLERY_STATE = 'SET_GALLERY_STATE'
