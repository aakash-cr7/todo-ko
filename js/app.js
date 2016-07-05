(function() {
    
    // Single ToDo item
    var Todo = function(title) {
        this.title = ko.observable(title);
        this.completed = ko.observable(false);
        this.editMode = ko.observable(false);
    }

    var ViewModel = function() {
        self = this;
        self.current = ko.observable("");

        self.todoList = ko.observableArray([]);

        // Add a new tod item 
        self.add = function() {
            var current = self.current().trim();

            if (current) {
                // push new todo item to the todoList
                self.todoList.push( new Todo(current) );
                // make current '' after pushing it to the list
                self.current('');
            }
        }

        self.remove = function() {
            // remove the clicked item from the array
            self.todoList.remove(this); // here this refers to the item being clicked on
        }

        self.finishedTask = function() {
            this.completed(true);
        }
    }

    // Bind a new instance of the ViewModel to our page
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
}() );
