
const achievements =
{ 'Lead Software Engineer, NUNISYNTH': 'Built and released a powerful and complex audio software by myself from scratch: www.nunisynth.com'
, 'Software Engineer, CodingPro': 'Completed www.codingpro.ronaldmcorona.vercel.app, a website where first-time programmers can learn JavaScript'
, 'Software Engineer, Lambda Calc Eval': 'Implemented a lambda calculus evaluator with optional reduction steps: www.lambdacalceval.ronaldmcorona.vercel.app'
, 'Software Engineer, Minesweeper': 'Created a Minesweeper clone with built-in solver: www.minesweeper-bkuszcggtr.now.sh'
}

export function Achievements() {
return <div>
    <h2> Achievements </h2>

    {Object.keys(achievements).map(title => <div>
        <h3>{title}</h3>
        <div>{achievements[title as keyof typeof achievements]}</div>
        <br/>
    </div>)}
</div>
}