
const skills = 
`JavaScript
TypeScript
HTML
CSS
SASS/SCSS
Node
Express
Socket.io
React
Electron
VSCode
Python
C#
Java
Firebase
MongoDB
Git
Vercel
Arduino
Raspberry PI
Web Audio`
.split('\n')

export function Skills() {
    return <div>
        <h2> Skills </h2>
        {skills.join(', ')}
    </div>
}