// This is practice for how to do a breath-first-search on an adjacency graph using Javascript

// Initialize Queue
// Initialize Queue functions - enqueue(vertex), dequeue(), isEmpty(), 

var Queue = function() {
    this.items = [];
}

Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
    console.log(`You've pushed ${obj} into your queue of [${this.items}]`)
}

Queue.prototype.dequeue = function() {
    return this.items.shift();
}

Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
}

// Create breath first search function
// Pass the adjacency list and value of starting point 

var bfsSearch = function(graph, source) {
    // Create an array of objects that describe each vertex
    var bfsInfo = [];
    // Objects will contain values of verticies
    // initialzie all values as null
    for (var i = 0; i < graph.length; i++) {
        bfsInfo[i] = {
            distance: null,
            predecessor: null
        };
    }

    // set the source vertex to 0
    bfsInfo[source].distance = 0;

    // Set up new queue object to store neighboring vertcies 
    var queue = new Queue();
    // Add source vertex to the queue
    queue.enqueue(source);

    // Traverse the graph
    // while the queue is not empty
    while(!queue.isEmpty()) {
        // repeatedly dequeue a vertex in the queue
        var vertex = queue.dequeue();

        for (var i = 0; i < graph[vertex].length; i++) {
            var neighbor = graph[vertex][i];
            // if there is an unvisted neighbor on the graph add it to the queue
            if (bfsInfo[neighbor].distance === null) {
                // add 1 to the neighboring vertex's distance
                // set neighboring vertex's predessecor to current vertex
                // enqueue neighboring verticies
                bfsInfo[neighbor].distance = bfsInfo[vertex].distance + 1;
                bfsInfo[neighbor].predecessor = vertex;
                queue.enqueue(neighbor); 
            }
        }
    }
    return bfsInfo;
};


// Adajcency List
var adjList = [
    [1],
    [0, 4, 5, 7],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    [0, ]
];

var bfsInfo = bfsSearch(adjList, 3);

for (var i = 0; i < adjList.length; i++) {
    console.log(`Vertex ${i}: distance = ${bfsInfo[i].distance}, predecessor = ${bfsInfo[i].predecessor}`);
}
