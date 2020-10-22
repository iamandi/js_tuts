// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// The graph
const adjacencyList = new Map();

const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

const addEdge = (source, destination) => {
  adjacencyList.get(source).push(destination);
  adjacencyList.get(destination).push(source);
};

airports.map((airport) => {
  addNode(airport);
});

routes.map((route) => {
  addEdge(route[0], route[1]);
});

/// BFS
