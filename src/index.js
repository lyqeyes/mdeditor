/**
 * Created by pomy on 07/02/2017.
 */

'use strict';
import './style/index.scss';
import React, {Component} from 'react';
import {Provider} from 'mobx-react';

import {getEditor} from './lib/aceEditor';
import MDEditor from './mdeditor';
import insert from './model/insert';
import editor from './model/editor';
import help from './model/help';

class  Editor extends Component {
    static defaultProps = {
        options:{
            uploadUrl:'',
            helpOptions:[],
            fileOptions:[]
        },
        doc:{
            name:'',
            status:''
        },
        coCursors:[],
        rightContent:null,
        readOnly:false
    };

    constructor() {
        super();
        this.getEditor = getEditor;
    };

    getEditor(){
        return getEditor();
    }

    render() {
        return(
            <Provider
                insert={insert}
                editor={editor}
                help={help}
            >
                <MDEditor readOnly={this.props.readOnly}
                         defaultValue={this.props.defaultValue}
                        options={this.props.options}
                         coCursors = {this.props.coCursors}
                         doc={this.props.doc}
                         rightContent = {this.props.rightContent}/>
            </Provider>
        );
    }
}
export default Editor;
