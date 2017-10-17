import SHA1 from 'crypto-js/sha1'
import li from 'li'

export default {
  name: 'login',
  data () {
		return {
			status: 'not_accepted',
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
		onSubmit(evt) {
			evt.preventDefault();
			////alert(JSON.stringify(this.form.clearpassword));
			//var hash = SHA1(this.form.clearpassword);
			////console.log(hash.toString());
			//this.form.password = hash.toString();
			//this.form.username = this.form.user;
			//console.log(this.form.password);
			
			////const URL = window.location.protocol+'//'+window.location.host;
			////const URL = 'http://localhost:8081';
			
			this.$http.post('http://localhost:8082/login/api', {'username': this.form.username, 'password': SHA1(this.form.password).toString()},{
				headers : { "Content-Type": "application/json", "Accept": "application/json" },
			}).then(function(res){
				console.log('Ok:');
				//console.log(li.parse(res.headers.map.link[0]));
				
				window.location.replace(li.parse(res.headers.map.link[0]).next);
				
			}, function(res){
				console.log('Error:');
				console.log(res);
			});
		}
		
	}
}
