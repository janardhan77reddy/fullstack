import React from "react";







function Edit() {
    return (
        <div>
            <div style={{ justifyContent: "center", textAlign: "center" }}>
                <div>
                    <h1>
                        Edit Book
                    </h1>
                </div>
                <div>
                    <h5>
                        Update Books info
                    </h5>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <input type="text" placeholder="the hungry of games" />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <input type="text" placeholder="kda555a" />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <input type="text" placeholder="suzanne collins" />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <input type="text" placeholder="popular" />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <input type="text" placeholder="2008-05-05-T00:00:00Z" />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <input type="text" placeholder="No one" />
                </div>
                <div>
                    <a href="./book">
                        <button>
                            Update Book 
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};




export default Edit;