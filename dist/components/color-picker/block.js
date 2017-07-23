/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/7
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import './index.scss';
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Swatch from './swatch';

var _default = (_temp = _class = function (_Component) {
    _inherits(_default, _Component);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                colors = _props.colors,
                onClick = _props.onClick,
                title = _props.title,
                noWrap = _props.noWrap,
                onHover = _props.onHover;

            var body = colors.map(function (color, i) {
                return React.createElement(Swatch, { color: color, onClick: onClick, onHover: onHover, key: i });
            });
            var xmColorPickerBlock = classnames({
                'xm-color-picker-block': true,
                noWrap: noWrap
            });
            return React.createElement(
                'div',
                { className: xmColorPickerBlock },
                React.createElement(
                    'div',
                    { className: 'xm-color-picker-block-title' },
                    title
                ),
                body
            );
        }
    }]);

    return _default;
}(Component), _class.defaultProps = {
    colors: [],
    onClick: function onClick(color, e) {},
    onHover: function onHover(color, e) {},
    title: '默认title',
    noWrap: true
}, _class.propTypes = {
    colors: PropTypes.array,
    onClick: PropTypes.func,
    title: PropTypes.string,
    noWrap: PropTypes.bool
}, _temp);

export default _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/color-picker/block.js');
}();

;