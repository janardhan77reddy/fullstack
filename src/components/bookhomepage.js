import React from "react";
import './bookhomepage.css';







function BookHome() {
    return (
        <div >
            <h1>Book List</h1>
            <div>
                <a href="./add">
                    <button style={{float: "right"}}>
                        Add Book List
                    </button>
                </a>
            </div>
            <div className="border">
                <div className="grid">
                    <a href="./view"><h1>The Book Of CAIRO</h1></a>
                </div>
                <div>
                    <h5>
                        The Hungry games
                    </h5>
                </div>
                <div>
                    <h5>
                        suzanne collins
                    </h5>
                </div>
                <div>
                    <h5>
                        popular
                    </h5>
                </div>
            </div>
            <div className="border">
                <div className="grid">
                    <a href="./view"><h1>The Book Of CAIRO</h1></a>
                </div>
                <div>
                    <h5>
                        The Little Red Book
                    </h5>
                </div>
                <div>
                    <h5>
                        Mao Zedong
                    </h5>
                </div>
                <div>
                    <h5>
                        political
                    </h5>
                </div>
            </div>
            <div className="border">
                <div className="grid">
                    <a href="./view"><h1>The Book Of CAIRO</h1></a>
                </div>
                <div>
                    <h5>
                        The plagrims progess
                    </h5>
                </div>
                <div>
                    <h5>
                        John Buysn
                    </h5>
                </div>
                <div>
                    <h5>
                        fantasy
                    </h5>
                </div>
            </div>



        </div>
    );
};




export default BookHome;