import Vue from 'vue'
import styles from './styles.css'

export default Vue.extend({
  beforeCreate () {
    // Render Inline CSS on SSR
    if ((styles as any).__inject__) {
      (styles as any).__inject__(this.$ssrContext)
    }
  },
  render () {
    return <h1 class={styles.bug}>Hello world!</h1>
  }
})
