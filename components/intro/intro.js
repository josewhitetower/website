import { Canvas } from 'react-three-fiber';
import { Loader } from 'drei/prototyping/Loader';

import Scenes from './scenes';

function Intro() {
  return (
    <div className="intro fixed left-0 top-0 right-0 w-screen h-screen z-50">
      <Canvas
        antialias
        camera={{ position: [0, 0, 15], near: 5, far: 40 }}
        colorManagement
        gl={{ antialias: true, alpha: false }}
        pixelRatio={1}
        shadowMap>
        <color attach="background" args={['white']} />

        {/* lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[20, 20, 20]} />
        <pointLight position={[-20, -20, -20]} intensity={4} />
        <directionalLight
          castShadow
          position={[2.5, 12, 5]}
          intensity={4}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* scenes */}
        <Scenes />

        {/* effects */}
        {/* <EffectComposer></EffectComposer> */}
      </Canvas>

      <Loader />
    </div>
  );
}

export default Intro;
