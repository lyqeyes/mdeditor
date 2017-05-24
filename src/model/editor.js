/**
 * Created by yeanzhi on 17/3/30.
 */
'use strict';
import {observable} from 'mobx';

/*
* 编辑器的一些状态集合
* */
class Editor {

    /*
    * 会保留最后一次selection的值
    * */
    @observable
    range={};

    @observable
    focus=false;

    @observable
    format={};

    @observable
    value='';
}

const editor = new Editor();

export default editor;
