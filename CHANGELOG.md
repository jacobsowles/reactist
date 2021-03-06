# Changelog

Reactist follows [semantic versioning](https://semver.org/) and doesn't introduce breaking changes (API-wise) in minor or patch releases. However, the appearance of a component might change in a minor or patch release so keep an eye on redesigns and make sure your app still looks and feels like you expect it.

## 1.18.04
- [New] Added `withArrow` property to `<Tooltip />` to support arrow-less tooltips

## 1.18.03
- [Tweak] `allowVaguePositioning` now also takes the vertical positioning into account instead of only the horizontal one

## 1.18.02
- [Tweak] When clicking on the trigger of a `<Tooltip />` (i.e. its children) we will close the Tooltip. This is helpful so tooltips no longer overlap menu. In case you need more finegrained control over this consider using a `<Popover />` directly.

## 1.18.01
- [Tweak] Reset margins on `<Input />` so it's visually aligned in Safari (and all other browsers) by default

## 1.18.00
- [New] Added the utility component `<KeyCapturer>`. Use it to wrap arbitrary elements and act on keyboard events happening while it is focussed

## 1.17.04
- [Tweak] All additionally passed props to a `<Button />` are now applied to the underlying `<button>` element. This allows you to make better use of the platform (e.g `type='submit'`) or adhere to accessibility best practices

## 1.17.03
- [Tweak] Moved some default styles from `<Tooltip />` to `<Popover />` which should make it easier to build nice experiences with it as you no longer need to provide all the styles

## 1.17.02
- [New] Added `size`, `spinnerColor` and `bgColor` properties to `<Loading />` for a fully customizable loading experience

## 1.17.01
- [Tweak] Unified all border colors across all components

## 1.17.00
- [New] Added new general purpose `<Popover />` component which also powers the `<Tooltip />` component. This allows for more flexible popovers than overriding the styles of a tooltip.

## 1.16.08
- [New] Added support for `disabled` property to `<Checkbox />`

## 1.16.07
- [Tweak] We now update the styles of `<Input />` when supplying the `disabled` property

## 1.16.06
- [New] Added `medium` property to `<Modal.Box />` as a new size constant. It will produce modals that are 680px wide
- [New] Added `plain` property to `<Modal.Body />` which removes all styling from the body for custom modals

## 1.16.05
- [Tweak] Darkened border color of `<Select />` to border color constant

## 1.16.04
- [Bug] Changed class name of loading `<Button />` from `loading` to `busy` to avoid clash with the `loading` class name of `<Loading />`

## 1.16.03
- [Tweak] Darkened font and border color of secondary button to improve readability

## 1.16.02
- [Tweak] Relaxed prop types of most components which render strings to also accept component(s)

## 1.16.01
- [Tweak] Updated icon of `<Select />` to fit our iconography

## 1.16.00
- [Tooling] Updated to webpack 4, babel 7 and fixed some problems in our build process. `moment`, `classnames` and `prop-types` are now correctly treated as externals and are no longer included in our production bundle. This resulted in a reduced stat size from 703kb to 160kb ⚡️

## 1.15.24
- [Bug] When closing a modal by pressing esc we now prevent the browser's default behaviour (e.g. leaving fullscreen mode)

## 1.15.23
- [Bug] Clicking on the inner overlay of `<Modal />` (aka left or right of the modal) when `closeOnOverlayClick` was set to `true` the modal wouldn't close

## 1.15.22
- [Bug] Changing the `right` prop of `<Dropdown />` didn't have any effect as it was "cached" in internal state upon first construction

## 1.15.21
- [Tweak] Added rounded corners to the blue line indicating an active tab

## 1.15.20
- [Bug] Setting `useCapture` to `true` to catch scroll events of all elements of a page to correctly hide the tooltip

## 1.15.19
- [New] Added `gapSize` to `<Tooltip />`

## 1.15.18
- [Redesign] The `<Loading />` indicator is now a spinning circle instead of three bouncing dots

## 1.15.17
- [Tweak] Inactive tabs use the secondary font color instead of custom gray

## 1.15.16
- [Tweak] Darkened primary and secondary font colors for improved readability

## 1.15.15
- [New] Added support for the `style` property to `<Modal.Box />` and `<Modal.Body />` for when a className is not enough

## 1.15.14
- [Tweak] Sets the default value of the `delayShow` of the `<Tooltip />` component to 500ms (0.5s) instead of 1s

## 1.15.13
- [Tweak] Set the margin of `<Select />` to 0 to avoid browser inconsistencies in Safari

## 1.15.12
- [Tweak] Instead of using the default delay of 1s (1000ms) for tooltips when hovering the `<Time />` component we now use 500ms (0.5s)

## 1.15.11
- [Redesign] The `<ColorPicker />` can now show an optional active indicator on the selected color item.
    - Additionally, we no longer hide the active color from the selection. That means you might need to check in your code that an actual change occurred.
- [Bug] When supplying an invalid `color` prop to the `<ColorPicker />` it would crash. Now it selects the first color in the `colorList`.

## 1.15.10
- [Tweak] Increased the size of the white inner ring that appears when hovering a color item of the `<ColorPicker />`

## 1.15.9

- [Redesign] New design for the `<ColorPicker />`
    - It now shows the color name on hover – when supplied through the `colorList` prop
- [Bug] `<Tooltip />`s are now correctly displayed in absolutely positioned elements (esp. `<Dropdown />`s)

---
... we failed to write a changelog before that version you could probably scroll through the commit history to find out more. Sorry!
