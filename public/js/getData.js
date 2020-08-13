var ip = 'http://172.16.100.127:8080/test/'
var dataBase = 'jgyf'

$.ajaxSetup({
	type: "POST",
	beforeSend: function(XMLHttpRequest) {
		XMLHttpRequest.setRequestHeader("dataType", dataBase);
	}
});

var data = {
	type:'c',//c查询，d添加，e修改,
	table:'',//表名
	col:[],//列名
	where:'',
	extra:''
}

getData(data,res=>{
	
})

function getData(data, success = function() {}) {
	data = {
		code: encryptByDES(JSON.stringify(data))
	}
	var ajax = $.ajax({
		url: ip + "gdata/getdata", //发送ajax请求的地址
		type: "post", //以post形式发送数据
		data: JSON.stringify(data),
		contentType: "application/json",
		dataType: "json",
		success: res => {
			success(res)
		}
	});
	return ajax
}