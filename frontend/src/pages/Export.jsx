import { useState } from 'react';
import * as XLSX from 'xlsx';


export default function Export(){

    const info = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };

    const downloadExcel = (data) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        console.log(worksheet);
        return;
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
        //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        XLSX.writeFile(workbook, "DataSheet.xlsx");
    }


    return(
        <div className="container">
            <button className="button block radius" onClick={() => downloadExcel(info)}>Hello</button>
        </div>
    )
}