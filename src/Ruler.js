function Ruler() {
    let rulerMarks = [];
    for (let i = 1; i <= 60; i++) {
        if (i % 5 === 0) {
            rulerMarks.push(
                <div className="major-tick" key={i}>
                    {i !== 0 && <span>{i}</span>}
                </div>
            );
        } else {
            rulerMarks.push(<div className="minor-tick" key={i}></div>);
        }
    }

    return <div className="ruler">{rulerMarks}</div>;
}

export default Ruler;
