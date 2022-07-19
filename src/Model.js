/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/FinalAnime-processed.gltf"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["default"]}
          position={[25.5825, 23.92753, -14.72935]}
          rotation={[0, 0, -Math.PI / 2]}
          userData={{ name: "Plane.002" }}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["default"]}
          position={[25.5825, 23.92753, 0.84073]}
          rotation={[0, 0, -Math.PI / 2]}
          userData={{ name: "Plane.001" }}
        />
        <mesh
          name="Cylinder008"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials["Material.020"]}
          position={[-2.19279, 16.69031, -2.50844]}
          rotation={[0.82489, -0.63888, -0.99882]}
          userData={{ name: "Cylinder.008" }}
        />
        <mesh
          name="Cylinder010"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials["Material.017"]}
          position={[-0.0475, 17.93332, -4.08866]}
          userData={{ name: "Cylinder.010" }}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["default"]}
          position={[25.5825, 22.81446, -8.2298]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Plane.005" }}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["default"]}
          position={[25.5825, 23.92753, -6.4524]}
          rotation={[0, 0, -Math.PI / 2]}
          userData={{ name: "Plane.004" }}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["default"]}
          position={[25.5825, 22.81446, -8.2298]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Plane.003" }}
        />
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.021"]}
          position={[25.5825, 12.95699, -8.2298]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Plane.006" }}
        />
        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.021"]}
          position={[25.5825, 31.58072, -8.2298]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Plane.007" }}
        />
        <group
          name="group485226736"
          position={[2.33761, 13.64262, -5.96919]}
          rotation={[Math.PI / 2, 0, -2.52352]}
          userData={{ name: "group485226736" }}
        >
          <mesh
            name="group485226736_1"
            castShadow
            receiveShadow
            geometry={nodes.group485226736_1.geometry}
            material={materials.mat16}
          />
          <mesh
            name="group485226736_2"
            castShadow
            receiveShadow
            geometry={nodes.group485226736_2.geometry}
            material={materials.mat23}
          />
          <mesh
            name="group485226736_3"
            castShadow
            receiveShadow
            geometry={nodes.group485226736_3.geometry}
            material={materials.mat17}
          />
          <mesh
            name="group485226736_4"
            castShadow
            receiveShadow
            geometry={nodes.group485226736_4.geometry}
            material={materials.mat15}
          />
        </group>
        <group
          name="group1885116500"
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1885116500" }}
        >
          <mesh
            name="group1885116500_1"
            castShadow
            receiveShadow
            geometry={nodes.group1885116500_1.geometry}
            material={materials["mat21.001"]}
          />
          <mesh
            name="group1885116500_2"
            castShadow
            receiveShadow
            geometry={nodes.group1885116500_2.geometry}
            material={materials.mat20}
          />
        </group>
        <mesh
          name="group560799048"
          castShadow
          receiveShadow
          geometry={nodes.group560799048.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group560799048" }}
        />
        <mesh
          name="group24448074"
          castShadow
          receiveShadow
          geometry={nodes.group24448074.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group24448074" }}
        />
        <group
          name="group256948792"
          position={[2.33761, 13.64262, -5.96919]}
          rotation={[Math.PI / 2, 0, -2.52352]}
          userData={{ name: "group256948792" }}
        >
          <mesh
            name="group256948792_1"
            castShadow
            receiveShadow
            geometry={nodes.group256948792_1.geometry}
            material={materials.mat16}
          />
          <mesh
            name="group256948792_2"
            castShadow
            receiveShadow
            geometry={nodes.group256948792_2.geometry}
            material={materials.mat23}
          />
          <mesh
            name="group256948792_3"
            castShadow
            receiveShadow
            geometry={nodes.group256948792_3.geometry}
            material={materials.mat17}
          />
          <mesh
            name="group256948792_4"
            castShadow
            receiveShadow
            geometry={nodes.group256948792_4.geometry}
            material={materials.mat25}
          />
        </group>
        <mesh
          name="group1647754183"
          castShadow
          receiveShadow
          geometry={nodes.group1647754183.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1647754183" }}
        />
        <mesh
          name="group1377145234"
          castShadow
          receiveShadow
          geometry={nodes.group1377145234.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1377145234" }}
        />
        <group
          name="49"
          position={[-105.48837, 2.72991, 54.89307]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "49" }}
        >
          <mesh
            name="49_1"
            castShadow
            receiveShadow
            geometry={nodes["49_1"].geometry}
            material={materials.Office_Cha}
          />
          <mesh
            name="49_2"
            castShadow
            receiveShadow
            geometry={nodes["49_2"].geometry}
            material={materials.Office_Cha_1}
          />
          <mesh
            name="49_3"
            castShadow
            receiveShadow
            geometry={nodes["49_3"].geometry}
            material={materials.Office_Cha_2}
          />
        </group>
        <mesh
          name="group476784665"
          castShadow
          receiveShadow
          geometry={nodes.group476784665.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group476784665" }}
        />
        <mesh
          name="group722357104"
          castShadow
          receiveShadow
          geometry={nodes.group722357104.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group722357104" }}
        />
        <mesh
          name="group1025492697"
          castShadow
          receiveShadow
          geometry={nodes.group1025492697.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1025492697" }}
        />
        <mesh
          name="group285410933"
          castShadow
          receiveShadow
          geometry={nodes.group285410933.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group285410933" }}
        />
        <mesh
          name="Tabletop"
          castShadow
          receiveShadow
          geometry={nodes.Tabletop.geometry}
          material={materials.Material}
          position={[8.62981, 12.96609, -6.96914]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Tabletop" }}
        />
        <mesh
          name="group525605584"
          castShadow
          receiveShadow
          geometry={nodes.group525605584.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group525605584" }}
        />
        <mesh
          name="group1278045090"
          castShadow
          receiveShadow
          geometry={nodes.group1278045090.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1278045090" }}
        />
        <group
          name="model"
          position={[-9.70557, 4.28663, -19.17317]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "model" }}
        >
          <mesh
            name="model_1"
            castShadow
            receiveShadow
            geometry={nodes.model_1.geometry}
            material={materials.mat10}
          />
          <mesh
            name="model_2"
            castShadow
            receiveShadow
            geometry={nodes.model_2.geometry}
            material={materials["mat23.001"]}
          />
          <mesh
            name="model_3"
            castShadow
            receiveShadow
            geometry={nodes.model_3.geometry}
            material={materials.mat21}
          />
          <mesh
            name="model_4"
            castShadow
            receiveShadow
            geometry={nodes.model_4.geometry}
            material={materials.mat4}
          />
          <mesh
            name="model_5"
            castShadow
            receiveShadow
            geometry={nodes.model_5.geometry}
            material={materials.mat8}
          />
          <mesh
            name="model_6"
            castShadow
            receiveShadow
            geometry={nodes.model_6.geometry}
            material={materials.mat5}
          />
          <mesh
            name="model_7"
            castShadow
            receiveShadow
            geometry={nodes.model_7.geometry}
            material={materials.mat3}
          />
          <mesh
            name="model_8"
            castShadow
            receiveShadow
            geometry={nodes.model_8.geometry}
            material={materials["mat17.001"]}
          />
          <mesh
            name="model_9"
            castShadow
            receiveShadow
            geometry={nodes.model_9.geometry}
            material={materials["mat16.001"]}
          />
          <mesh
            name="model_10"
            castShadow
            receiveShadow
            geometry={nodes.model_10.geometry}
            material={materials.mat1}
          />
        </group>
        <mesh
          name="group1987077651"
          castShadow
          receiveShadow
          geometry={nodes.group1987077651.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1987077651" }}
        />
        <mesh
          name="group1417853301"
          castShadow
          receiveShadow
          geometry={nodes.group1417853301.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1417853301" }}
        />
        <mesh
          name="group1406455588"
          castShadow
          receiveShadow
          geometry={nodes.group1406455588.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1406455588" }}
        />
        <mesh
          name="group172818934"
          castShadow
          receiveShadow
          geometry={nodes.group172818934.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group172818934" }}
        />
        <mesh
          name="group1699085095"
          castShadow
          receiveShadow
          geometry={nodes.group1699085095.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1699085095" }}
        />
        <mesh
          name="group2053840647"
          castShadow
          receiveShadow
          geometry={nodes.group2053840647.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group2053840647" }}
        />
        <mesh
          name="group1507777984"
          castShadow
          receiveShadow
          geometry={nodes.group1507777984.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1507777984" }}
        />
        <mesh
          name="ComputerMouse"
          castShadow
          receiveShadow
          geometry={nodes.ComputerMouse.geometry}
          material={materials.ComputerMouse_mat1}
          position={[5.01605, 13.45535, -9.79877]}
          rotation={[Math.PI / 2, 0, 0.16861]}
          userData={{ name: "ComputerMouse" }}
        />
        <mesh
          name="group1781696643"
          castShadow
          receiveShadow
          geometry={nodes.group1781696643.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1781696643" }}
        />
        <mesh
          name="group1308825903"
          castShadow
          receiveShadow
          geometry={nodes.group1308825903.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1308825903" }}
        />
        <mesh
          name="group31856083"
          castShadow
          receiveShadow
          geometry={nodes.group31856083.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group31856083" }}
        />
        <mesh
          name="group1377232627"
          castShadow
          receiveShadow
          geometry={nodes.group1377232627.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1377232627" }}
        />
        <mesh
          name="1345_Analog_Clock"
          castShadow
          receiveShadow
          geometry={nodes["1345_Analog_Clock"].geometry}
          material={materials.Mat}
          position={[-8.76154, 23.73161, -26.78332]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          userData={{ name: "1345 Analog Clock" }}
        />
        <mesh
          name="group103419857"
          castShadow
          receiveShadow
          geometry={nodes.group103419857.geometry}
          material={materials.mat20}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group103419857" }}
        />
        <mesh
          name="group1989238829"
          castShadow
          receiveShadow
          geometry={nodes.group1989238829.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group1989238829" }}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Tabletop material"]}
          position={[18.97672, 3.35831, -6.94155]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Cube.001" }}
        />
        <mesh
          name="group714662036"
          castShadow
          receiveShadow
          geometry={nodes.group714662036.geometry}
          material={materials.mat9}
          position={[24.09388, 16.18257, -19.36976]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "group714662036" }}
        />
        <group
          name="Room_Setting_"
          position={[3.43556, 22.19483, -8.28086]}
          userData={{ name: "Room Setting " }}
        >
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials["Material.012"]}
          />
          <mesh
            name="Cube006_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_3.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.014"]}
          position={[10.02197, 17.62551, -2.84622]}
          userData={{ name: "Cube.005" }}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.001"]}
          position={[4.2595, 4.61323, -7.40671]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Cylinder" }}
        />
        <group
          name="model001"
          position={[7.88966, 24.87743, -27.02509]}
          rotation={[Math.PI / 2, 0, 1.57815]}
          userData={{ name: "model.001" }}
        >
          <mesh
            name="model001_1"
            castShadow
            receiveShadow
            geometry={nodes.model001_1.geometry}
            material={materials["mat23.002"]}
          />
          <mesh
            name="model001_2"
            castShadow
            receiveShadow
            geometry={nodes.model001_2.geometry}
            material={materials.mat18}
          />
          <mesh
            name="model001_3"
            castShadow
            receiveShadow
            geometry={nodes.model001_3.geometry}
            material={materials.mat12}
          />
          <mesh
            name="model001_4"
            castShadow
            receiveShadow
            geometry={nodes.model001_4.geometry}
            material={materials["mat3.001"]}
          />
          <mesh
            name="model001_5"
            castShadow
            receiveShadow
            geometry={nodes.model001_5.geometry}
            material={materials["mat8.001"]}
          />
          <mesh
            name="model001_6"
            castShadow
            receiveShadow
            geometry={nodes.model001_6.geometry}
            material={materials["mat15.001"]}
          />
          <mesh
            name="model001_7"
            castShadow
            receiveShadow
            geometry={nodes.model001_7.geometry}
            material={materials["mat21.002"]}
          />
        </group>
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.013"]}
          position={[10.10983, 17.84664, -2.56002]}
          rotation={[-1.54412, -0.76404, 0.03545]}
          userData={{ name: "Cube.006" }}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Tabletop material"]}
          position={[18.97603, 3.93578, -6.63074]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Cube.002" }}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials["Material.016"]}
          position={[-2.1879, 13.4387, -2.51276]}
          userData={{ name: "Cylinder.005" }}
        />
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials["default"]}
          position={[-2.1879, 13.4387, -2.51276]}
          userData={{ name: "Cylinder.006" }}
        />
        <mesh
          name="Cylinder007"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials["Material.019"]}
          position={[-2.1879, 15.05739, -2.51276]}
          userData={{ name: "Cylinder.007" }}
        />
        <mesh
          name="Tabletop001"
          castShadow
          receiveShadow
          geometry={nodes.Tabletop001.geometry}
          material={materials.Material}
          position={[8.62981, 12.96609, -6.96914]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Tabletop.001" }}
        />
        <mesh
          name="Cylinder009"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials["Material.018"]}
          position={[-1.27967, 17.28277, -3.11768]}
          rotation={[-2.91488, -0.83037, 1.23797]}
          userData={{ name: "Cylinder.009" }}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.008"]}
          position={[13.7325, 13.48484, -1.55059]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Cube" }}
        />
        <mesh
          name="Tabletop002"
          castShadow
          receiveShadow
          geometry={nodes.Tabletop002.geometry}
          material={materials["Material.015"]}
          position={[10.66966, 13.53005, -9.26788]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Tabletop.002" }}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.006"]}
          position={[10.15981, 17.73992, -1.46331]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Cylinder.003" }}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.004"]}
          position={[13.73992, 14.72303, -1.4479]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Cylinder.001" }}
        />
        <mesh
          name="Cylinder004"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.002"]}
          position={[9.94503, 17.80123, -1.96893]}
          rotation={[3.0181, 1.23524, 1.73783]}
          userData={{ name: "Cylinder.004" }}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.003"]}
          position={[12.23686, 16.85401, -1.43039]}
          rotation={[3.13768, 0.01766, 1.94926]}
          userData={{ name: "Cylinder.002" }}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.007"]}
          position={[9.86425, 17.87462, -2.286]}
          rotation={[1.63647, -0.01155, -3.12271]}
          userData={{ name: "Cube.003" }}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.009"]}
          position={[13.73992, 16.17583, -1.4479]}
          rotation={[-Math.PI, 0.01809, -Math.PI]}
          userData={{ name: "Sphere" }}
        />
        <mesh
          name="Houseplant"
          castShadow
          receiveShadow
          geometry={nodes.Houseplant.geometry}
          material={materials.Houseplant_mat1}
          position={[16.71984, 2.60695, 5.10328]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "Houseplant" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/FinalAnime-processed.gltf");
