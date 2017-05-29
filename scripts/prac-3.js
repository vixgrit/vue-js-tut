new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function() {
            return this.value < 37 ? 'Hasn\'t reached 37 yet!' : 'Has reached 37!';
        }
    },
    watch: {
        result: function() {
            var vi = this;
            setTimeout(function() {
                vi.value = 0;
            }, 5000);
        }
    }
});
