function Ruler() {
    let rulerMarks = [];
    for (let i = 1; i <= 10; i++) {
        rulerMarks.push(
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 0 0", position: "relative" }}>
                <div style={{ position: "absolute", top: "-5px", left: "0", right: "0", height: "10px", background: "repeating-linear-gradient(to right, #555555 0, #555555 1px, transparent 1px, transparent 10%)" }}></div>
                <span>{i}</span>
            </div>
        );
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "600px", // Fixed width
            height: "40px",
            position: "absolute",
            top: '2px',
            left: '67%',  // Center horizontally
            transform: 'translateX(-50%)', // Correct offset
            zIndex: 1,
            alignItems: "flex-end",
            paddingBottom: "5px",
        }}>
            {rulerMarks}
        </div>
    );
}


export default Ruler;
