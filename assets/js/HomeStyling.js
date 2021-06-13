import { computed } from 'vue'
import store from '@/store/index.js'

// Themeing
export const colors = computed(() => {
    return store.getters["theme/colors"];
});
