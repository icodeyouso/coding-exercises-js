let intervalHandle;
var solfegeCtx = new(window.AudioContext || window.webkitAudio)

function playitAgain() {


}

function start() {
    intervalHandle = setInterval(solfege, 1000)
}

function stop() {
    clearInterval(intervalHandle)
}
// globals
var solfegeCtx, oscillator;

// hello audio world
(function init(g) {
    try {
        solfegeCtx = new(g.AudioContext || g.webkitAudioContext);
        oscillator = audio_context.createOscillator();
    } catch (e) {
        alert('No web audio oscillator support in this browser');
    }
}(window));

play(frequency)

//makes a noise with the proper frequency

function play(freq) {
    oscillator = audio_context.createOscillator();
    oscillator.frequency.value = freq;
    oscillator.connect(solfegeCtx.destination);
    oscillator.noteOn(0);
    fire('play', oscillator.frequency.value);
}
// stop the sound  stop() noteOff(0) 

function stop() {
    oscillator.noteOff(0);
    fire('stop');
}

var cmajor = {};
cmajor.yo = function() {
    var oscs = [],
        o, i, freqs = [261.63, 329.63, 392];
    freqs.forEach(function(freq) {
        o = audio_context.createOscillator();
        o.frequency.value = freq;
        o.connect(audio_context.destination);
        o.noteOn(0);
        oscs.push(o);
    });
    this.oscs = oscs;
    fire('play', '\n - ' + freqs.join('Hz\n - '));
};

cmajor.no = function() {
    this.oscs.forEach(function(o) {
        o.noteOff(0);
    });
    fire('stop');
};