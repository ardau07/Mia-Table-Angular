import { Subject } from "rxjs";
import { MiaColumn } from "./mia-column";

export class MiaTableEditableConfig {
    columns: Array<MiaColumn> = [];
    hasAdd: boolean = true;

    subject?: Subject<any>;
}