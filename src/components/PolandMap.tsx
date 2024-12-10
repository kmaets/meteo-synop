/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

/* interface GLTFResult extends GLTF {
	nodes: {
		g10: THREE.Mesh
	}
	materials: Record<string, never>
	animations: THREE.AnimationClip[]
} */

type GLTFResult = GLTF & {
	nodes: {
		g10: THREE.Mesh
	}
	materials: {
		Colors: THREE.Material
	}
	animations: THREE.AnimationClip[]
};

export const PolandMapModel = (props: JSX.IntrinsicElements['group']) => {
	const group = useRef(null!);
	// const { nodes } = useGLTF('/meteo-synop/pl-map.glb') as GLTFResult;
	const { nodes } = useGLTF('models/pl-map.glb') as GLTFResult;
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.g10.geometry}
				material={nodes.g10.material}
				// material={materials.Colors}
				animations={nodes.g10.animations}
				// rotation={[Math.PI/2, 0, 0]}
				rotation={[0 * Math.PI / 180, 0, 0]}
			>
			</mesh>
		</group>
	);
};

useGLTF.preload('models/pl-map.glb');
// useGLTF.preload('/models/pl-map.gltf');
