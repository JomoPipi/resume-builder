
const experiences =
    { 'Software Engineer, NUNISYNTH': 
        [ 'March 2020 - Current'
        , 
            <div>Independently designed and released <a href="https://nunisynth.com" 
                rel="noreferrer" target="_blank"> NUNISYNTH</a>, a standalone
                graphical modular audio software.
                <ul style={{padding: '0 4rem'}}>
                    <li>
                        Basic audio operations are performed with audio <em>nodes</em>, 
                        which are linked together to form audio graphs.
                        This flexible system allows for complex audio functions.
                    </li>
                    <li>
                        NUNISYNTH supports auto-updates, mp3/WAV imports, 
                        WAV exports, custom audio scripting, nested graphs, MIDI file imports, 
                        keyboard-shortcut macros, custom themes, and more.
                    </li>
                </ul>
                <br/>
                <em> (TypeScript, Electron, HTML, SCSS, WebAudio, React, Firebase, Canvas) </em>
            </div>
        ]
    }

export function Experiences() {
    return <div>
        <h2> Work Experience </h2>

        {Object.keys(experiences).map(title => {
            const [date, description] = experiences[title as keyof typeof experiences]
            return <div>
            <h3 style={{display: "inline-block", marginRight: '1rem' }}>{title}</h3> <em>{date}</em>
            {description}
            <br/>
        </div>
        })}
    </div>
}