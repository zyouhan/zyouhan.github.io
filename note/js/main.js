

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

      

        methods: {
            add: function() {
                var task = Object.assign({}, this.task);
                if (!task.content) return;
                this.list.push(task);
                ms.set('list', this.list);
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

          
        },

    });

    
//输入框
    $(document).ready(function(){
        $("#task-input").focus(function(){
            $("#cancel-btn").show();
            $("textarea").slideDown(300);
        });
        $("#add-btn").click(function(){
            $('input').value = '';
            $("#cancel-btn").hide();
            $("textarea").slideUp(200);
        });
        $("#cancel-btn").click(function(){
            $('#task-input').value = ' ';
            $("#cancel-btn").hide();
            $("textarea").slideUp(200);
        });
    });
    
