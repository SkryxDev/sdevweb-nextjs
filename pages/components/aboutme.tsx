import 'bootstrap/dist/css/bootstrap.css';

export default function Aboutme() {
    return(
        <div className="aboutme">
            <br/>
            <br/>
            <br/>
            <h1 className="aboutmeh1">ABOUT ME</h1>
            <p className="aboutmep">Hey, sono <b>SkryxDev</b>, un developer autodidatta (per ora)</p>
            <center>
                <button className="btn" onClick={() => {window.open("https://github.com/skryxdev")}}>Github</button>
            </center>
            <br/>
            <br/>
            <br/>
        </div>
    )
}