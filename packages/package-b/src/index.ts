import { App } from 'vue';
import Button from './components/Button/Button.vue';

export default {
  install(app: App) {
    app.component('pkg-button', Button);
  }
};

export { Button }; 