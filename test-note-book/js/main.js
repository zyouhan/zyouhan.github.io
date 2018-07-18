

    new Vue({
        el: '#main',
        data: {
            list: [],
            task: {},
            taskTitleError: false
        },

        mounted: function() { 
            var me = this;
            this.list = ms.get('list') || this.list;
        },

        filter: {
            
        },
      
        computed: {
            notFinishedLen() {
                let len = 0
                for (let i of this.list) {
                    if (!i.finished) {
                        len++
                    }
                }
                return len
            },
            finishedLen () {
                let len = 0
                for (let i of this.list) {
                    if (i.finished) {
                        len++
                    }
                }
                return len
            }
        },

        methods: {
            add: function() {
                
                var task = Object.assign({}, this.task);
                if (!task.content) {
                    this.taskTitleError = true
                    return;
                }
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
            validateTitle: function(val) {
                if (val.target.value.length > 0) {
                    this.taskTitleError = false
                }
            }
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
    
