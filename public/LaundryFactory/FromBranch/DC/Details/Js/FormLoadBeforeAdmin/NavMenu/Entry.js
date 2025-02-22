import { StartFunc as StartFuncBSTableURL } from "./ParentId/Entry.js";
import { StartFunc as StartFuncDashboardId } from "./DashboardId/Entry.js";
import { StartFunc as StartFuncTodayDc } from "./TodayDc/EntryFile.js";
import { StartFunc as StartFuncDcAll } from "./DcAll/Entry.js";
import { StartFunc as StartFuncQrCode } from "./Tree/Entry.js";
import { StartFunc as StartFuncDcDetails } from "./KSTree/Entry.js";
import { StartFunc as StartFuncCreate } from "./Create/Entry.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncDashboardId();
    // StartFuncTodayDc();
    StartFuncDcAll();
    StartFuncQrCode();
    StartFuncDcDetails();
    StartFuncCreate();
};

export { StartFunc };