
const languages =
`JavaScript
TypeScript
HTML
CSS
SASS/SCSS
Python
C#
Java
C++ (Arduino)`
.split('\n')

const frameworks =
`NodeJS
React
Express.js
Bootstrap
Svelte
Vue
SolidJS
Socket.io
Electron
Jest
Web Audio`
.split('\n')

const serverTools =
`Firebase
MongoDB
Vercel
Raspberry PI
NodeMCU`
.split('\n')

const developmentTools =
`Git
VSCode
Babel
Eclipse`
.split('\n')

export function Skills() {
    return <div>
        <h2> Skills </h2>
        <h4> Languages </h4>
        {languages.join(', ')}
        <h4> Frameworks </h4>
        {frameworks.join(', ')}
        <h4> Server Tools </h4>
        {serverTools.join(', ')}
        <h4> Developments Tools </h4>
        {developmentTools.join(', ')}
    </div>
}