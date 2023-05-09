const app = Vue.createApp({
    data() {
        return {
            message: 'Hello, Vue!',
            image: 'img/vue-background.jpg'
        }
    },
    computed: {
        title() {
            return 'title';
        }
    }
});

app.mount('#vue-app');