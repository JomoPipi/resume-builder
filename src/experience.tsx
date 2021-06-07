
const experiences =
    { 'Lead Software Engineer, NUNISYNTH': 
        <div>Independently designed and released <a href="https://nunisynth.com" rel="noreferrer" target="_blank">NUNISYNTH</a>, a powerful and graphical modular audio software.</div>

    , 'Software Engineer, CodingPro':
        <div>Developed <a href="https://codingpro.ronaldmcorona.vercel.app" rel="noreferrer" target="_blank">Codingpro</a>, a website where first-time programmers can learn JavaScript.</div>

    , 'Software Engineer, Lambda Calc Eval':
        <div>Built a <a href="https://lambdacalceval.ronaldmcorona.vercel.app" rel="noreferrer" target="_blank">lambda calculus evaluator</a> with optional reduction step viewer.</div>

    , 'Software Engineer, Minesweeper':
        <div>Created a <a href="https://minesweeper-bkuszcggtr.now.sh" rel="noreferrer" target="_blank">Minesweeper clone</a> with built-in solver</div>
    }

export function Experiences() {
    return <div>
        <h2> Experience </h2>

        {Object.keys(experiences).map(title => <div>
            <h3>{title}</h3>
            {experiences[title as keyof typeof experiences]}
            <br/>
        </div>)}
    </div>
}