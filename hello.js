
require('./world.js');
//css-loader! 作用使得webpack可以处理css文件
//style-loader! 作用将css-loader处理完的文件新建一个标签，插入到html中，当打包后的文件被引入后，css效果会执行
require('style-loader!css-loader!./style.css');

function hello(str){
	alert(str);
}

hello('world')