import React from "react";








function Addbook() {
    return (
        <div style={{ justifyContent: "center", textAlign: "center" }}>
            <h1>
                Add Book
            </h1>
            <div>
                <h5>
                    Create New Book
                </h5>
            </div>
            <div style={{ marginBottom: "15px" }}>
                <input type="text" placeholder="title of the Book" />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <input type="text" placeholder="ISBN" />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <input type="text" placeholder="Author" />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <input type="text" placeholder="Describe This Book" />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <input type="text" placeholder="Published_date" />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <input type="text" placeholder="Publisher of this book" />
            </div>
            <div>
                <a href="./book">
                    <button>
                        Submit
                    </button>
                </a>
            </div>
        </div>
    );
};




export default Addbook;