var app = new Vue({
    el: '#my_app',
    data: {
        profile:  [],
        repositories:[],
        followers:[],
    },
    methods: {
        dateFormat: function (date) {
            return moment(date).format('DD MMMM  YYYY');
        },
        loadProfile: function () {
            axios
                .get('https://api.github.com/users/aztanin')
                .then(response => (this.profile = response.data));
        },
        loadRepositories:function(){
            axios
            .get('https://api.github.com/users/aztanin/repos')
            .then(response => (this.repositories = response.data));
        },
        loadFollowers:function(){
            axios
            .get('https://api.github.com/users/aztanin/followers')
            .then(response => (this.followers = response.data));
        }
    },
    created: function () {
        this.loadProfile();
        this.loadRepositories();
        this.loadFollowers();
    },
    mounted() {

    }
})