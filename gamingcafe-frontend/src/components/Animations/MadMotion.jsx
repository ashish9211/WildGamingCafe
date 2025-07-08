import React, { useRef, useEffect, useState, useCallback } from 'react';

// Helper function to convert HSL to RGB
// Used to generate a range of colors for waves
const hslToRgb = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color);
    };
    return [f(0), f(8), f(4)];
};

// Configuration for the waves
const waveConfig = {
    startCorner: 'top-left', // Reverted: Fixed starting corner
    speed: 0.4,              // How fast the wave expands and moves
    initialOpacity: 1.0,     // Full initial opacity for maximum visibility
    fadeRate: 0.00005,        // Significantly reduced fade rate for longer visibility
    spawnInterval: 1000,     // Increased spawn frequency (more waves)
    thicknessRatio: 0.9      // Defines the thickness of the wave (0.9 means 90% of radius, leaving 10% inner hole)
};

// Represents a single wave object.
class Wave {
    constructor(startX, startY, targetCorner, canvasWidth, canvasHeight) {
        this.initialX = startX;
        this.initialY = startY;
        this.x = startX;
        this.y = startY;
        this.radius = 0;
        this.opacity = waveConfig.initialOpacity;
        this.targetCorner = targetCorner;

        // Reverted: Generate a random hue across the full spectrum
        this.hue = Math.random() * 360;

        // Reverted: High saturation and lightness for maximum visibility (original values from no-blur version)
        const saturation = 90 + Math.random() * 10; // 90-100% saturation
        const lightnessDark = 40 + Math.random() * 10; // 40-50% lightness for dark part
        const lightnessMedium = 60 + Math.random() * 10; // 60-70% lightness for medium part

        this.colorDark = hslToRgb(this.hue, saturation, lightnessDark);
        this.colorMedium = hslToRgb(this.hue, saturation, lightnessMedium);

        // Determine movement direction based on target corner
        this.dx = 0;
        this.dy = 0;
        switch (this.targetCorner) {
            case 'bottom-right':
                this.dx = waveConfig.speed;
                this.dy = waveConfig.speed;
                break;
            case 'bottom-left':
                this.dx = -waveConfig.speed;
                this.dy = waveConfig.speed;
                break;
            case 'top-right':
                this.dx = waveConfig.speed;
                this.dy = -waveConfig.speed;
                break;
            case 'top-left':
                this.dx = -waveConfig.speed;
                this.dy = -waveConfig.speed;
                break;
            default:
                this.dx = waveConfig.speed;
                this.dy = waveConfig.speed;
        }
    }

    /**
     * Updates the wave's state for the next frame.
     */
    update() {
        this.radius += waveConfig.speed * 2; // Expand radius faster than movement
        this.opacity -= waveConfig.fadeRate; // Continuous fading
        this.x += this.dx;
        this.y += this.dy;

        // Ensure opacity doesn't go below 0
        this.opacity = Math.max(0, this.opacity);
    }

    /**
     * Draws the wave on the canvas using a radial gradient for a filled ring.
     * @param {CanvasRenderingContext2D} context - The 2D rendering context of the canvas.
     */
    draw(context) {
        // Calculate inner and outer radii for the expanding ring
        const outerRadius = this.radius;
        // The thickness of the wave will be a percentage of its current radius
        const innerRadius = Math.max(0, this.radius * (1 - waveConfig.thicknessRatio));

        // Create a radial gradient for the wave's thickness
        const gradient = context.createRadialGradient(this.x, this.y, innerRadius, this.x, this.y, outerRadius);

        // Define color stops for the gradient
        gradient.addColorStop(0, `rgba(${this.colorDark[0]}, ${this.colorDark[1]}, ${this.colorDark[2]}, ${this.opacity * 1.0})`); // Darker at inner edge
        gradient.addColorStop(0.9, `rgba(${this.colorMedium[0]}, ${this.colorMedium[1]}, ${this.colorMedium[2]}, ${this.opacity * 0.8})`); // Medium part, extends further
        gradient.addColorStop(1, `rgba(${this.colorMedium[0]}, ${this.colorMedium[1]}, ${this.colorMedium[2]}, 0)`); // Fades to transparent rapidly at outer edge

        context.fillStyle = gradient; // Use fillStyle for filled shapes

        context.beginPath();
        context.arc(this.x, this.y, outerRadius, 0, Math.PI * 2); // Draw outer circle
        context.arc(this.x, this.y, innerRadius, 0, Math.PI * 2, true); // Draw inner circle (counter-clockwise to cut out)
        context.closePath(); // Close the path to connect the inner and outer arcs
        context.fill(); // Fill the area between the arcs to create the ring
    }

    /**
     * Checks if the wave is still active (visible).
     * The wave is active as long as its opacity is greater than 0.
     * It will naturally move off-screen and then be removed when fully transparent.
     * @returns {boolean} - True if the wave is active, false otherwise.
     */
    isActive() {
        return this.opacity > 0;
    }
}

const WaveBackground = () => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);
    const waves = useRef([]); // Use ref for mutable array that doesn't trigger re-renders
    const lastWaveSpawnTime = useRef(0);
    // Reverted: Removed currentCornerIndex as we are not cycling corners

    // Function to resize the canvas
    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }, []);

    // Function to spawn a new wave
    const spawnWave = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Reverted: Removed maxWaves limit
        // if (waves.current.length >= waveConfig.maxWaves) {
        //     return;
        // }

        // Reverted: Fixed starting corner
        const selectedStartCorner = waveConfig.startCorner; // Use the fixed startCorner from config

        let startX, startY, targetCorner;

        // Determine start and target based on the selected corner
        switch (selectedStartCorner) {
            case 'top-left':
                startX = 0;
                startY = 0;
                targetCorner = 'bottom-right';
                break;
            case 'top-right':
                startX = canvas.width;
                startY = 0;
                targetCorner = 'bottom-left';
                break;
            case 'bottom-left':
                startX = 0;
                startY = canvas.height;
                targetCorner = 'top-right';
                break;
            case 'bottom-right':
                startX = canvas.width;
                startY = canvas.height;
                targetCorner = 'top-left';
                break;
            default: // Fallback
                startX = 0;
                startY = 0;
                targetCorner = 'bottom-right';
        }
        waves.current.push(new Wave(startX, startY, targetCorner, canvas.width, canvas.height));

        // Reverted: Removed cycling to the next corner
    }, []);

    // The main animation loop
    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas

        const currentTime = performance.now();

        // Spawn a new wave if enough time has passed
        if (currentTime - lastWaveSpawnTime.current > waveConfig.spawnInterval) {
            spawnWave();
            lastWaveSpawnTime.current = currentTime;
        }

        // Update and draw each wave
        for (let i = 0; i < waves.current.length; i++) {
            const wave = waves.current[i];
            wave.update();
            wave.draw(ctx);

            // Remove inactive waves (fully transparent)
            if (!wave.isActive()) {
                waves.current.splice(i, 1);
                i--; // Decrement i because we removed an element
            }
        }

        animationFrameId.current = requestAnimationFrame(animate);
    }, [spawnWave]); // Dependency on spawnWave to ensure it's up-to-date

    // useEffect for initial setup and cleanup
    useEffect(() => {
        resizeCanvas(); // Initial canvas resize

        // Start animation loop
        animationFrameId.current = requestAnimationFrame(animate);

        // Add event listener for window resize
        window.addEventListener('resize', resizeCanvas);

        // Cleanup function when component unmounts
        return () => {
            cancelAnimationFrame(animationFrameId.current); // Stop animation loop
            window.removeEventListener('resize', resizeCanvas); // Remove event listener
        };
    }, [animate, resizeCanvas]); // Dependencies ensure useEffect re-runs if animate or resizeCanvas change (though they are useCallback'd)

    return (
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            <canvas ref={canvasRef} className="block w-full h-full bg-transparent rounded-2xl"></canvas>
            {/* You can add other content on top of the canvas here */}
        </div>
    );
};

export default WaveBackground;
