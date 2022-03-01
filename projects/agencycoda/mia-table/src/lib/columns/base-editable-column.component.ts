import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MiaTableEditableConfig } from "../entities/mia-table-editable-config";
import { BaseColumnComponent } from "./base-column.component";

@Component({
    selector: 'mia-base-editable-column',
    template: ''
})
export class BaseEditableColumnComponent extends BaseColumnComponent {
    @Input() configEdit?: MiaTableEditableConfig;

    input!: FormControl;

    createFormControl() {
        // Create Control
        this.input = new FormControl(this.getFieldValueByKey(this.column.field_key));
        // Config listening
        this.input.valueChanges.subscribe(val => {
            this.setFieldValueByKey(this.column.field_key, val);
            if(this.configEdit?.subject){
                this.configEdit?.subject.next(this.item);
            }
        });
    }
}
