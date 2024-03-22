uniform vec3 color1;
uniform vec3 color2;

varying vec3 vColor;
varying vec2 vUv;

uniform float uTime;

void main() {
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = step(0.5, strength);
    strength = 1.0 - strength;

    // Final color
    vec3 color = mix(vec3(0.0), vColor, strength);

    gl_FragColor = vec4(color, 1.0);
}
