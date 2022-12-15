import 'bootstrap/dist/css/bootstrap.css';

export default function Cards() {
    return(
        <div className="col">
            <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                <img src="/js.png" className="card-img-top" alt="js"/>
                <div className="card-body">
                    <p className="card-text">Professional Javascript developer using Node.JS and NPM</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                <img src="/ts.png" className="card-img-top" alt="js"/>
                <div className="card-body">
                    <p className="card-text">Medium TypeScript developer.</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                <img src="react.png" className="card-img-top" alt="js"/>
                <div className="card-body">
                    <p className="card-text">Learning ReactJS using TypeScript</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                <img src="nextjs.png" className="card-img-top" alt="js"/>
                <div className="card-body">
                    <p className="card-text">Learning NextJS using TypeScript</p>
                </div>
            </div>
        </div>
    )
}