export default function scrollPosition(propertyName) {
  return {
    data() {
      return {
        [propertyName]: 0
      }
    },
    created() {
      if (!this.$isServer) {
        this._scrollListener = () => {
          this[propertyName] = Math.round(window.scrollY)
        }

        // Call listener once to detect initial position
        this._scrollListener()

        // When scrolling, update the position
        window.addEventListener('scroll', this._scrollListener)
      }
    },
    beforeDestroy() {
      // Detach the listener when the component is gone
      window.removeEventListener('scroll', this._scrollListener)
    }
  }
}