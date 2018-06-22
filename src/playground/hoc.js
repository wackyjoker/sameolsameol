

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
		<div>
		<h1>Info</h1>
		<p>the info are here : {props.info}</p>
		</div>
	);

const withAdminWarning = (WrappedComponent)=>{
	return (props)=> (
		<div>
		{props.isAdmin &&<p> I'm hijacking this Component!</p>}
		<WrappedComponent {...props} />
		</div>
		);
}

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent)=>{
	return (props)=>(
		<div>
		{props.isAuthenticated ? (<WrappedComponent {...props} />):(<p>Plz log in</p>) }
		</div>
		);
};

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info='MODAFAKA'/> , document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='MODAFAKA'/> , document.getElementById('app'));