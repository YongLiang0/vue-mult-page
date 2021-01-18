/**
 * js正则表达式库--Regs.js
 * by liangyong
 * @date 2019-11-28
 * @用法示例:  Regs.en.test('abc')  ->  true
 */

export const REGS = {

	/*
	* 数字相关
	*/
	//正数（可含小数、0）
	posiNum: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,

	//正整数
	posiInt: /^[1-9]\d*$/,

	//0或正整数
	posiInt0: /^(0|[1-9][0-9]*)$/,

	//2位的数字
	numLen2: /^[0-9]{2}$/,

	// 2-3位的数字：
	numLen2or3: /^\d{1,3}$/,

	// 非零开头的最多带两位小数的正数：
	posiFloat2: /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/,

	// 带1-2位小数的正数或负数：
	float1or2: /^(\-)?\d+(.\d{1,2})?$/,

	// 非零的负整数：
	negativeInt: /^-[1-9]\d*$/,

	// 负数或0：
	negative0: /^-[1-9]\d*|0$/,

	// 负整数或0：
	negativeInt0: /^(-[1-9]\d*|0)$/,

	// 负浮点数：
	negativeFloat: /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/,

	// 正浮点数：
	posiFloat: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/,

	// 浮点数：
	float: /^(-?\d+)(\.\d+)?$/,

	/*
	* 字符相关
	*/

	// 英文和数字：
	numEn: /^[A-Za-z0-9]+$/,

	// 长度为2-4的所有字符：
	en2to4: /^.{2,4}$/,

	// 英文字母：
	En: /^[A-Za-z]+$/,

	// 大写英文字母：
	EN: /^[A-Z]+$/,

	// 小写英文字母：
	en: /^[a-z]+$/,

	// 小写英文字母：
	cn: /^[\u4E00-\u9FA5A]+$/,

	// 数字、字母、下划线
	numEn_: /^\w+$/,

	// 中文、英文、数字、下划线：
	numEnCn_: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,

	// 中文、英文、数字：
	numEnCn: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,

	// 含有^%&',;=?$\”等字符：
	illegal: /[^%&',;=?$\x22]+/,

	// Email地址：
	email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,

	// 手机号码：
	mobile: /^1[345789]\d{9}$/,

	// 身份证号(15位、18位数字)：
	idCard: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,

	// 日期： 2017-1-1或2017/1/1
	date: /^\d{4}(-|\/)\d{1,2}(-|\/)\d{1,2}$/,

	// 时间： 10:00:00
	time: /^([01]?\d|2[0-3]):[0-5]?\d:[0-5]?\d$/,

	// 日期+时间： 2017-1-1 10:00:00
	datetime: /^\d{4}(-|\/)\d{1,2}(-|\/)\d{1,2}\s([01]?\d|2[0-3]):[0-5]?\d:[0-5]?\d$/,

	// 一年的12个月(01～09和1～12)：
	month: /^(0?[1-9]|1[0-2])$/,

	// 一个月的31天(01～09和1～31)：
	day: /^((0?[1-9])|((1|2)[0-9])|30|31)$/,

	//中国邮政编码：
	postcode: /[1-9]\d{5}(?!\d)/,

	//IP地址：
	ip: /\d+\.\d+\.\d+\.\d+/,

	//域名：
	url: /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*/,

	//域名(http开头):
	urlHttp: /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/
};