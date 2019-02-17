import React from 'react';
import CSSModules from 'react-css-modules';
import style from './<%= slug %>.less';

@CSSModules(style, {allowMultiple:true, handleNotFoundStyleName:'ignore'})
export default class <%= name %> extends React.Component{
	render(){
		return (<div styleName="<%= slug %>"><%= name %></div>);
	}
}
