<div id="header" align="center">
  <img src="https://github.com/YashiLin1/YashiLin1.github.io/blob/cs732-se75-assignment-yilin927-YashiLin/demogif.gif?raw=true"/>
</div>

## :smiley_cat: MeowShop - A cute website with 3D objects and animation effects!
Check out the website at https://yashilin1.github.io/

Yashi Lin - Assignment - Tech Demo


# ⚡ Quick setup
1. Download all the files from the [Master](https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-yilin927-YashiLin/tree/master) branch of this repo.
2. Install [Node.js](https://nodejs.org/en)
3. Install [VS Code](https://code.visualstudio.com/) (or any code-editing tool as you like)
3. Open your terminal and run these commands to install the necessary libraries:

`npm install -D tailwindcss` `npx tailwindcss init`

`npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt framer-motion react-router-dom`

If react-tilt doesn't install properly, run `npm install --save --legacy-peer-deps  react-tilt` again. 

Finally, run `npm run dev` at your localhost.

# :hammer_and_wrench: Language & Tools
This website was built with React and several libraries for added functionality and aesthetics, including the use of WebGL for 3D objects.

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/blender/blender-original.svg" title="Blender" alt="Blender" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/threejs/threejs-original-wordmark.svg" title="threejs"  alt="threejs" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg" title="tailwindcss"  alt="tailwindcss" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg" title="vscode" **alt="vscode" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>
</div>

### :blue_heart: Web Development:
| Name  | Explain |
| ------------- | ------------- |
| [Tailwind CSS](https://tailwindcss.com/)  | Popular utility-first CSS framework  |
| [ThreeJS](https://threejs.org/)  | An essential tool for any web development project that involves 3D graphics or animations.  |
| [React-tilt](https://www.npmjs.com/package/react-tilt)  | A lightweight library for creating interactive tilt effects.  |
| [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)  | A React renderer for Three.js. Built specifically for integrating Three.js into React applications.  |
| [React-three/drei](https://github.com/pmndrs/drei) | A collection of helpers to simplify the process of building 3D graphics and animations using the Three.js library  |
| [Framer Motion](https://github.com/framer/motion)  | Animation and motion library for React that allows developers to easily create smooth and fluid animations with a declarative API.  |
| [Maath](https://github.com/pmndrs/maath)  | For 3D graphics and animations.  | 
| [React Router DOM](https://reactrouter.com/en/main/start/tutorial)  | Implement dynamic routing in a web app. | 

### :purple_heart: Web Design:
| Name  | Explain |
| ------------- | ------------- |
| [Blender](https://www.blender.org/)  | Edit 3D modelds and export GLTF/GLB file (GL Transmission Format/GL Binary file format) for WebGl |
| [Adobe Illustrator](https://www.adobe.com/products/illustrator.html)  | Web design and svg files |

# :hammer_and_wrench: Libraries usage explain

### :smiley: Tailwind CSS
It provides me with a set of pre-built UI components and responsive utility classes to build the site quickly without writing custom CSS. 

### :deciduous_tree: ThreeJS - 3D Graphics & Animations
<span style="float: left;"><img src="https://raw.githubusercontent.com/YashiLin1/YashiLin1.github.io/cs732-se75-assignment-yilin927-YashiLin/donut.gif" width="150"/></span> My website uses ThreeJS and its related libraries for all the 3D stuff. Taking this donut for example! See [jsx file](https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-yilin927-YashiLin/blob/master/src/components/canvas/Donut.jsx).

### React-three-fiber
- Its `Canvas` and `useFrame` components produce the 3D canvas and handle rendering. 
- Add light and camera so that they work together to illuminate the donut. The `hemisphereLight` component is used to create a light that is positioned directly above the scene and shines down from all directions. The `spotLight` component is used to create a focused light that shines in a specific direction and casts a shadow. The `pointLight` component is used to create a point light that illuminates the scene evenly in all directions.

### React-three/drei
- `useGLTF` hook allows loading 3D models in the glTF format, and accessing them as Three.js objects. It allows you to load this donut!

- `OrbitControls` component provides camera controls for Three.js scenes, allowing you to orbit this donut using the mouse!

- `Preload` show a fallback UI while the donut are being loaded, which can help to avoid rendering delays during the loading process and improve performance!

### :sparkles: Maath
I use the maath library (maath/random to be specific) for generating a set of random points as stars in the background. The background of my website is a 3D scene!

