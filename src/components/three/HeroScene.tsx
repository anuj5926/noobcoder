"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const noise = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;

const blobVertex = /* glsl */ `
uniform float uTime;
uniform float uAmp;
uniform vec2 uMouse;
varying vec3 vPos;
varying float vNoise;
${noise}
void main(){
  vec3 p = position;
  float n = snoise(p * 0.8 + vec3(uTime * 0.2, uTime * 0.15, uTime * 0.05));
  float detail = snoise(p * 2.2 - uTime * 0.25) * 0.18;
  float pull = dot(normalize(p).xy, uMouse) * 0.16;
  float d = (n + detail) * uAmp + pull;
  vec3 displaced = p + normal * d;
  vNoise = n + detail;
  vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`;

const blobFragment = /* glsl */ `
uniform float uTime;
uniform vec3 uViolet;
uniform vec3 uLime;
uniform vec3 uInk;
varying vec3 vPos;
varying float vNoise;
void main(){
  vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
  vec3 v = normalize(-vPos);
  float fres = pow(1.0 - clamp(dot(v, n), 0.0, 1.0), 2.6);
  vec3 L = normalize(vec3(-0.5, 0.8, 0.7));
  float diff = clamp(dot(n, L), 0.0, 1.0);
  float spec = pow(clamp(dot(reflect(-L, n), v), 0.0, 1.0), 28.0);
  float bands = sin(vNoise * 5.0 + uTime * 0.6) * 0.5 + 0.5;

  vec3 base = mix(uInk, uViolet, 0.18 + 0.7 * diff);
  base = mix(base, uInk, smoothstep(0.1, -0.9, vNoise) * 0.55);
  vec3 rim = mix(uViolet * 1.25, uLime, smoothstep(0.55, 1.0, bands));
  vec3 col = base + rim * fres * 0.95 + uLime * spec * 0.45;
  gl_FragColor = vec4(col, 1.0);
}
`;

const pointsVertex = /* glsl */ `
uniform float uTime;
uniform float uPixelRatio;
attribute float aScale;
varying float vAlpha;
void main(){
  vec3 p = position;
  p.y += sin(uTime * 0.4 + position.x * 2.0) * 0.06;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aScale * 22.0 * uPixelRatio / -mv.z;
  vAlpha = smoothstep(14.0, 3.0, -mv.z);
}
`;

const pointsFragment = /* glsl */ `
uniform vec3 uColor;
varying float vAlpha;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(uColor, a * vAlpha * 0.9);
}
`;

const rgb = (hex: string) =>
  new THREE.Vector3(
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  );

type Pointer = { current: { x: number; y: number } };

function Blob({ pointer, detail, radius }: { pointer: Pointer; detail: number; radius: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.32 },
      uMouse: { value: new THREE.Vector2() },
      uViolet: { value: rgb("#7957FF") },
      uLime: { value: rgb("#C6FF4D") },
      uInk: { value: rgb("#0b0b12") },
    }),
    [],
  );

  useFrame((state, delta) => {
    const m = mesh.current;
    if (!m) return;
    uniforms.uTime.value += delta;
    const target = uniforms.uMouse.value;
    target.x += (pointer.current.x - target.x) * 0.05;
    target.y += (pointer.current.y - target.y) * 0.05;
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.2);
    uniforms.uAmp.value = 0.32 + scroll * 0.35;
    m.rotation.y += delta * 0.12;
    m.rotation.x = THREE.MathUtils.lerp(m.rotation.x, pointer.current.y * 0.35, 0.04);
    m.rotation.z = THREE.MathUtils.lerp(m.rotation.z, -pointer.current.x * 0.25, 0.04);
    m.position.y = -scroll * 1.2;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pointer.current.x * 0.35, 0.03);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[radius, detail]} />
      <shaderMaterial vertexShader={blobVertex} fragmentShader={blobFragment} uniforms={uniforms} />
    </mesh>
  );
}

function Particles({ count, pointer }: { count: number; pointer: Pointer }) {
  const points = useRef<THREE.Points>(null);
  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      pos[i * 3 + 2] = r * Math.cos(phi) - 1;
      sc[i] = 0.4 + Math.random();
    }
    return [pos, sc];
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2) },
      uColor: { value: rgb("#E8FFB8") },
    }),
    [],
  );

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    const p = points.current;
    if (!p) return;
    p.rotation.y += delta * 0.03;
    p.rotation.x = THREE.MathUtils.lerp(p.rotation.x, pointer.current.y * 0.15, 0.03);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={pointsVertex}
        fragmentShader={pointsFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Orbit() {
  const group = useRef<THREE.Group>(null);
  const satellite = useRef<THREE.Mesh>(null);
  const line = useMemo(() => {
    const pts = new THREE.EllipseCurve(0, 0, 2.6, 2.6, 0, Math.PI * 2).getPoints(160).map((p) => new THREE.Vector3(p.x, p.y, 0));
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.18 });
    return new THREE.LineLoop(geo, mat);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.5;
    satellite.current?.position.set(Math.cos(t) * 2.6, Math.sin(t) * 2.6, 0);
  });

  return (
    <group ref={group} rotation={[1.15, 0.2, -0.35]}>
      <primitive object={line} />
      <mesh ref={satellite}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color="#C6FF4D" />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    if (wrapper.current) io.observe(wrapper.current);
    return () => {
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapper}
      className="absolute inset-0 transition-opacity duration-[1500ms] ease-out"
      style={{ opacity: ready ? 1 : 0 }}
    >
      <Canvas
        dpr={[1, isMobile ? 1.5 : 1.75]}
        camera={{ position: [0, 0, isMobile ? 7.5 : 6.4], fov: 40 }}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
        frameloop={visible ? "always" : "never"}
        onCreated={() => setReady(true)}
        aria-hidden="true"
      >
        <Blob pointer={pointer} detail={isMobile ? 24 : 48} radius={1.3} />
        <Particles count={isMobile ? 350 : 900} pointer={pointer} />
        <Orbit />
      </Canvas>
    </div>
  );
}
