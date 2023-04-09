<div id="header" align="center">
  <img src="https://github.com/YashiLin1/YashiLin1.github.io/blob/cs732-se75-assignment-yilin927-YashiLin/demogif.gif?raw=true"/>
</div>

## :smiley_cat: MeowShop - A cute website with 3D objects and animation effects!
Check out the website at https://yashilin1.github.io/

Yashi Lin - Assignment - Tech Demo


# ⚡ Quick setup
- Download all the files from the [Master](https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-yilin927-YashiLin/tree/master) branch of this repo to your local folder.
- Install [Node.js](https://nodejs.org/en); install [VS Code](https://code.visualstudio.com/) (or any code-editing tool as you like)
- Open your terminal and run command to install the necessary libraries
```
npm install --legacy-peer-deps
```
- Finally, launch website at your localhost.
```
npm run dev
```

### :warning: Note
It is necessary to set this flag `--legacy-peer-deps`  in order to work around mismatches between several libraries I use! See [details](https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-yilin927-YashiLin/edit/main/README.md#react-tilt).


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
| Tools  | Explain |
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
| Tools  | Explain |
| ------------- | ------------- |
| [Blender](https://www.blender.org/)  | Edit 3D models and export GLTF/GLB file (GL Transmission Format/GL Binary file format) for WebGl |
| [Adobe Illustrator](https://www.adobe.com/products/illustrator.html)  | Web design and svg files |


# :hammer_and_wrench: JS Libraries

### :smiley: Tailwind CSS
It provides me with a set of pre-built UI components and responsive utility classes to build the site quickly without writing custom CSS. 

### :smiley: Framer Motion
I use `variants` prop from Framer Motion for all the fade in animation. They provides many built-in animations!

### :deciduous_tree: ThreeJS - 3D Graphics & Animations
<span style="float: left;"><img src="https://raw.githubusercontent.com/YashiLin1/YashiLin1.github.io/cs732-se75-assignment-yilin927-YashiLin/donut.gif" width="150"/></span> My website uses ThreeJS and its related libraries for all the 3D stuff. Taking this donut for example! See [jsx file](https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-yilin927-YashiLin/blob/master/src/components/canvas/Donut.jsx).

### React-three-fiber
- Its `Canvas` and `useFrame` components produce the 3D canvas and handle rendering. 
- Add light and camera so that they work together to illuminate the donut. The `hemisphereLight` component is used to create a light that is positioned directly above the scene and shines down from all directions. The `spotLight` component is used to create a focused light that shines in a specific direction and casts a shadow. The `pointLight` component is used to create a point light that illuminates the scene evenly in all directions.

### React-three/drei
- `useGLTF` hook allows loading 3D models in the glTF format, and accessing them as Three.js objects. It allows you to load this donut!
- `OrbitControls` component provides camera controls for Three.js scenes, allowing you to orbit this donut using the mouse!
- `Preload` show a fallback UI while the donut are being loaded, which can help to avoid rendering delays during the loading process and improve performance!

### React-tilt
This package use older version of React, but it has cool animation features. Therefore when installing packages, you need to add `--legacy-peer-deps` flag just for it.

<span style="float: left;"><img src="https://github.com/YashiLin1/YashiLin1.github.io/blob/cs732-se75-assignment-yilin927-YashiLin/card.gif?raw=true" width="150"/></span> 
- `Tilt` create a 3D tilt effect on the card!


### :sparkles: Maath
I use the maath library (maath/random to be specific) for generating a set of random points as stars in the background. The background of my website is a 3D scene!

