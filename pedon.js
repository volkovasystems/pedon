"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "pedon",
			"path": "pedon/pedon.js",
			"file": "pedon.js",
			"module": "pedon",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/pedon.git",
			"test": "pedon-test.js",
			"global": true,
			"class": true
		}
	@end-module-configuration

	@module-documentation:
		Easy way to check your os type.
	@end-module-documentation

	@include:
		{
			"cobralize": "cobralize",
			"harden": "harden",
			"os": "os",
			"shardize": "shardize"
		}
	@end-include
*/

const cobralize = require( "cobralize" );
const harden = require( "harden" );
const os = require( "os" );
const shardize = require( "shardize" );

harden( "WINDOWS", "windows" );
harden( "OSX", "osx" );
harden( "LINUX", "linux" );
harden( cobralize( os.type( ) ), shardize( os.type( ), true ) );

const pedon = function pedon( type ){
	/*;
		@meta-configuration:
			{
				"type": "string"
			}
		@end-meta-configuration
	*/

	if( typeof type == "string" ){
		return pedon( ) === type;
	}

	if( os.type( ) == "Windows_NT" ){
		return WINDOWS;
	}

	if( os.type( ) == "Darwin" ){
		return OSX;
	}

	if( os.type( ) == "Linux" ){
		return LINUX;
	}

	return shardize( os.type( ), true );
};

harden( "WINDOWS", pedon( ) == WINDOWS, pedon );
harden( "OSX", pedon( ) == OSX, pedon );
harden( "LINUX", pedon( ) == LINUX, pedon );
harden( cobralize( os.type( ) ), true, pedon );

module.exports = pedon;
