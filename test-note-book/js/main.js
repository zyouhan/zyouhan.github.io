

    new Vue({
        el: '#main',
        data: {
            list: [],
            task: {},
        },

        mounted: function() { 
            var me = this;
            this.list = ms.get('list') || this.list;
        },

        filter: {
            
        },
      

        methods: {
            add: function() {
                
                var task = Object.assign({}, this.task);
                if (!task.content) return;
                this.list.unshift(task);
                ms.set('list', this.list);
                this.reset_task();
            },

            remove: function(id) {
                this.list.splice(id, 1);
                ms.set('list', this.list);
            },    

            finish: function(id) {
                Vue.set(this.list[id], 'finished', !this.list[id].finished);
                Vue.set(this.list[id], 'show_detail', false);
            },

            toggle_detail: function(id) {
                Vue.set(this.list[id], 'show_detail', !this.list[id].show_detail);
                
            },

            set_task: function(task) {
                this.task = Object.assign({}, task);
            },

            reset_task: function() {
                this.set_task({});
            },

          
          
        },

    });

    
//输入框
    $(document).ready(function(){
        $("#task-input").focus(function(){
            $("#cancel-btn").show();
            $("textarea").slideDown(300);
        });
        $("#add-btn").click(function(){
            $("#cancel-btn").hide();
            $("textarea").slideUp(200);
        });
        $("#cancel-btn").click(function(){
            $("#cancel-btn").hide();
            $("textarea").slideUp(200);
        });
    });
    
