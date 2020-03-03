// Fetch JSON
window.fetch('states.json')
    .then(data => data.json() )
    .then(states => {
        
    console.log(states);
 
        // Vue instance for H1
        var welcomeMsg = new Vue({
            el:'h1',
            data: {
                stateCount: states.length
            },
        });
        
        // Vue instance for id of autocomplete
        var form = new Vue({
            el:'#autocomplete',
            data: {
                states: states,
                statesVisible: false,
                filterStates: states,
                search: '',
            },
            watch:{
              search: function(){
                  console.log(this.filterStates)
                  //filter()
                  this.filterStates = states.filter( state => {
                      return state.toLowerCase().slice(0, this.search.length) === this.search.toLowerCase();
                  });
                //   if(this.filterStates.length === 1){
                //       this.filterStates = [];
                //   }
              }  
            },
            methods: {
                hideStates: function(){
                    this.statesVisible = false;
                },
                showStates: function(){
                    this.statesVisible = true;
                },
                complete: function(state){
                    this.search= state;
                },
            }
        })

 });