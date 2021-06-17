
const projects =
{ 'CodingPro':
    <div>Developed <a href="https://codingpro.ronaldmcorona.vercel.app" 
        rel="noreferrer" target="_blank"> Codingpro</a>, where first-time 
        programmers can learn JavaScript. Includes built in code editor,
        automatic progress saving, hints, and test UI.
        <br/>
        <em> (JavaScript, HTML, CSS)</em>
    </div>

, 'Lambda Calc Eval':
    <div>Designed a <a href="https://lambdacalceval.ronaldmcorona.vercel.app" 
    rel="noreferrer" target="_blank">lambda calculus evaluator</a> for the web. 
    It provides an optional reduction step viewer, syntax highlighting, and error messages.
    <br/>
    <em> (JavaScript, HTML, CSS)</em>
    </div>

, 'Equality Game':
    <div> A <a href="https://github.com/JomoPipi/equalitygame" 
    rel="noreferrer" target="_blank">multiplayer competitive cognition 
    and reaction game</a> for mobile web browsers. Questions
    about equality are flashed at the users and the first one to answer gets the points.
    <br/>
    <em> (Node, Express, TypeScript, HTML, SCSS) </em>
    </div>
} as const

export function Projects() {
return <div>
    <h2> Personal Projects </h2>

    {Object.keys(projects).map(title => <div>
        <h3>{title}</h3>
        {projects[title as keyof typeof projects]}
        <br/>
    </div>)}
</div>
}