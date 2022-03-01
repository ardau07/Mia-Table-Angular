export class MiaColumn {

    static TYPE_STRING = 'string';
    static TYPE_DATE = 'date';
    static TYPE_MORE_OPTIONS = 'more-options';
    static TYPE_TEXT = 'text';
    static TYPE_ARRAY = 'array';

    static TYPE_INPUT_EDITABLE = 'input-editable';
    static TYPE_DATE_EDITABLE = 'date-editable';
    static TYPE_SELECT_EDITABLE = 'select-editable';
    static TYPE_SELECT_SERVICE_EDITABLE = 'select-service-editable';
    static TYPE_REMOVE_EDITABLE = 'remove-editable';

    key: string = '';
    type: string = '';
    title: string = '';
    field_key?: string | Array<string>;
    extra?: any;
    isShow?: boolean = true;
}
