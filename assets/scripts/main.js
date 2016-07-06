/**
 * Streetmix
 *
 */

// Polyfills
import 'babel-polyfill'
import 'whatwg-fetch' // fetch API
import 'handjs' // microsoft's pointer events / touch-action spec
import './vendor/canvas-toBlob.js'
import './vendor/Blob.js'
import './vendor/modernizr-custom'
import './vendor/polyfills/customevent' // customEvent in IE

// import modules for side-effects
import './app/blocking_shield'
import './app/debug_info'
import './app/keyboard_commands'
import './app/print'
import './app/status_message'
import './app/welcome'
import './dialogs/dialog'
import './dialogs/_save_as_image'
import './gallery/scroll'
import './gallery/view'
import './info_bubble/info_bubble'
import './menus/_help'
import './menus/_identity'
import './menus/_settings'
import './menus/menu'
import './streets/name'
import './streets/scroll'
import './util/fetch_nonblocking'

// This event is fired by _onEverythingLoaded() in the deprecated
// global bundle. This allows things in the modular bundle to respond
// to that function without needing to be exported globally.
// This should eventually not be required & can be removed.
window.addEventListener('stmx:everything_loaded', function (e) {
  /* global _onEverythingLoaded2 */
  _onEverythingLoaded2()
})

// Main object
import { Stmx } from './app/initialization'
Stmx()
