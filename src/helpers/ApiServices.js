import ApiCrud from './ApiCrud';
const apiurl = "http://139.59.6.161:3001/";//dev
console.log("api url",apiurl);
const ApiServices = {
	login: async function (loginobj)
	{
		var response = await ApiCrud.postData(apiurl + "users" + "/" + "login", loginobj);
        console.log("response",response);
		return response;
	},
	

}
export default ApiServices;