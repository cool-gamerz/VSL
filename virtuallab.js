 document.getElementById('startPendulum').addEventListener('click', function () {
            performPendulumExperiment();
            document.getElementById('Simplependulum').style.display = 'block';
            document.getElementById('startWave').style.display = 'none';
        });
document.getElementById('startWave').addEventListener('click', function () {
            performWavelengthExperiment();
            document.getElementById('Waveexperiment').style.display = 'block';
            document.getElementById('startPendulum').style.display = 'none';
        });


        function performPendulumExperiment() {
            let length = parseFloat(prompt("Enter the length of the pendulum (in meters):"));
            if (!isNaN(length) && length > 0) {
                const gravity = 9.81; // m/s^2
                const period = 2 * Math.PI * Math.sqrt(length / gravity);
                document.getElementById('Simplependulumresults').textContent = `The period of the pendulum is approximately ${period.toFixed(4)} seconds.`;
            } else {
                alert("Please enter a valid number for the length.");
            }
        }



        function performWavelengthExperiment() {
            let frequency = parseFloat(prompt("Enter the frequency of the wave (in Hz):"));
            let speed = parseFloat(prompt("Enter the speed of the wave (in m/s):"));
            if (!isNaN(frequency) && frequency > 0 && !isNaN(speed) && speed > 0) {
                const wavelength = speed / frequency;
                document.getElementById('wavelengthResults').textContent = `The wavelength of the wave is approximately ${wavelength.toFixed(4)} meters.`;
            } else {
                alert("Please enter valid numbers for both frequency and speed.");
            }
        }