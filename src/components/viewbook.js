import React from "react";

import './viewbook.css';







function View() {
    return (
        <div>
            <div style={{ justifyContent: "center", textAlign: "center" }}>
                <div>
                    <h1>
                        Book's Record
                    </h1>
                </div>
                <div>
                    <h5>
                        View Books Info
                    </h5>
                </div>
                <div>
                    <table className="tablet">
                        <thead>
                            <tr>
                                <th>
                                    Title
                                </th>
                                <td>
                                    The Hunger games
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Author
                                </th>
                                <td>
                                    suzanne collins
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    ISBN
                                </th>
                                <td>
                                    kda555ad
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Publisher
                                </th>
                                <td>
                                    No One
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Published Date
                                </th>
                                <td>
                                    &nbsp;&nbsp;&nbsp;2008-05-05T00:00.00Z
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Descrption
                                </th>
                                <td>
                                    popular
                                </td>
                            </tr>

                        </thead>
                    </table>
                </div>
                <div>
                    <a href="./edit">
                        <button>
                            Edit Book
                        </button>
                    </a>

                </div>
                <div>
                    <a href="./book">
                        <button>
                            Delete
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};




export default View;