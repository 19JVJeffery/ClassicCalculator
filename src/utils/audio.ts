let audioCtx: AudioContext | null = null;

export function playRelayClick(): void {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const dur = 0.038;
    const sampleRate = audioCtx.sampleRate;
    const buffer = audioCtx.createBuffer(1, Math.floor(sampleRate * dur), sampleRate);
    const data = buffer.getChannelData(0);

    // Synthesize physical 1980s mechanical key relay click
    for (let i = 0; i < data.length; i++) {
      const t = i / data.length;
      // High-frequency transient burst decaying exponentially
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 3.5) * 0.9;
    }

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;

    // Filter to give that authentic tactile switch thump
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3200, audioCtx.currentTime);

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.28, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    source.start();
  } catch (err) {
    console.debug('Audio context not permitted yet', err);
  }
}
