import fs from "fs";
// import dirTree from "directory-tree";
import {StartFunc as StartFuncReturnDbObject } from  "./CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inUsername,inPassword }) => {

    let LocalUsername = inUsername;
    let LocalPassword = inPassword;
    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();
    LocalFromLowDb.read();
    console.log("This is from LowDb ",LocalFromLowDb.read());
    console.log("Username:",LocalUsername,"Password:",LocalPassword);


   
    if (LocalFromLowDb.data.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    return LocalReturnData;

};
export { StartFunc };

const LocalFuncReadFileData = ({ inFilesAsArrayData }) => {
    let LocalFilesAsArrayData = inFilesAsArrayData;
    let LocalReturnData = { KTF: false }
    let LocalArray = LocalFilesAsArrayData.map(LoopFile => {
        const data = fs.readFileSync(LoopFile.path, { encoding: 'utf8', flag: 'r' });
        let JsonParseData = JSON.parse(data);

        let LoopInsideObject = {};
        LoopInsideObject.FileName = LoopFile.name;
        LoopInsideObject.FileData = JsonParseData;
        return LoopInsideObject;

    });
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalArray
    return LocalReturnData;
};
