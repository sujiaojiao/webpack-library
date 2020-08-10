const path = require('path');
module.exports={
	mode:'production',
	entry:'./src/index.js',
	// externals 可以是数组可以是对象
	// externals:['lodash'],//遇到lodash忽略，不打包到代码里面
	externals:{
		lodash:{
			commonjs:'lodash'
		}
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'library.js',
		library:'library',//像script
		// 可以是umd,this,window,global等
		libraryTarget:'umd',//umd:universally,是指不管事Amd,cmd或者common.js引入
	}

}