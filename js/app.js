(function() {
    
    // Single ToDo item
    var Todo = function(title, completed = false) {
        this.title = ko.observable(title);
        this.completed = ko.observable(completed);
        this.editMode = ko.observable(false);
    }

    var ViewModel = function() {
        this.current = ko.observable("");

        this.todoList = ko.observableArray([]);
        // Add a new todo item 
        this.add = function() {
            var current = this.current().trim();

            if (current) {
                // push new todo item to the todoList
                this.todoList.push( new Todo(current) );
                // make current '' after pushing it to the list
                this.current('');
            }
        }
    }

    // Bind a new instance of the ViewModel to our page
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
}() );
