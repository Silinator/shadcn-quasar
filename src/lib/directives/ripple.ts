import VWave from 'v-wave';

function getRippleConfig() {
  const styles = getComputedStyle(document.documentElement);

  return {
    initialOpacity: parseFloat(styles.getPropertyValue('--ripple-initial-opacity')) || 0.3,
    finalOpacity: parseFloat(styles.getPropertyValue('--ripple-final-opacity')) || 0.2,
    duration: parseFloat(styles.getPropertyValue('--ripple-duration')) || 0.35,
  };
}

const { wave: ripple } = VWave.createLocalWaveDirective(getRippleConfig());

export default ripple;
