import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ReusableTable=({columns, data})=>{
    return(
        <>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index}>
                            {columns.map((column)=>(
                                <td key={column}>{item[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ReusableTable;