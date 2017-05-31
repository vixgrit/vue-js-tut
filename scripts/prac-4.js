new Vue({
  el: '#exercise',
  data: {
      pulseEffect: {
          highlight: false,
          shrink: true
      },
      turnBoxOrange: 'orangeBox',
      divThree: '',
      divFour: '',
      addBorder: 'true',
      changeHeight: '',
      progressBar: 0
  },
  methods: {
    startEffect: function() {
        var vi = this;
        setInterval(function() {
            vi.pulseEffect.highlight = !vi.pulseEffect.highlight;
            vi.pulseEffect.shrink = !vi.pulseEffect.shrink
        }, 1000);
    },
    startProgress: function() {
        var vi = this;
        setInterval(function() {
            if (vi.progressBar < 100) {
                vi.progressBar += 10;
            }
        }, 250);
    }
  }
});
