<?php

add_action( 'rest_pre_dispatch', function () {
	if ( headers_sent() ) {
		return;
	}

	header( "Access-Control-Allow-Origin: *" );
	header( 'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, withCredentials' );

}, 10, 0 );